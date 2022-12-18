import {AxiosError} from "axios";
import {useCallback, useEffect, useState, useRef} from "react";
import {ICommentListItem} from "src/models/ICommentListItem";
import CommentService, {MAX_RECONNECTION} from "src/services/CommentService";
import {IComment} from "src/models/IComment";

const buildCommentTree = (
    comments: IComment[],
    parentId: number | null = null,
): ICommentListItem[] =>
    comments
        .filter((arrItem) => arrItem.parent === parentId)
        .map((arrItem) => {
            return {
                ...arrItem,
                children: buildCommentTree(comments, arrItem.id),
            };
        });

export const useComments = () => {
    const preventDoubleRender = useRef<boolean>(false);
    const [comments, setComments] = useState<ICommentListItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);

    const [totalComments, setTotalComments] = useState<number>(0);
    const [totalLikes, setTotalLikes] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    const loadComments = useCallback(async (nextPage: number) => {
        try {
            setLoading(true);
            const {data: comments, pagination} = await CommentService.getAll(
                nextPage,
            );
            setComments((prevComments) => [
                ...(prevComments || []),
                ...buildCommentTree(
                    comments.sort(
                        (a, b) =>
                            new Date(a.created).getTime() -
                            new Date(b.created).getTime(),
                    ),
                ),
            ]);
            setTotalComments((prev) => prev + comments.length);
            setTotalLikes((prev) =>
                comments.reduce((acc, c) => acc + c.likes, prev),
            );
            setTotalPages(pagination.total_pages);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchComments = useCallback(
        (nextPage: number) => {
            if (preventDoubleRender.current) return Promise.resolve(null);
            preventDoubleRender.current = true;

            setError(null);
            // try to fetch if there is a network error
            let reconnectionCount = 0;
            return loadComments(nextPage).catch((error: AxiosError) => {
                if (
                    error.isAxiosError &&
                    error.message === "Network Error" &&
                    ++reconnectionCount < MAX_RECONNECTION
                ) {
                    return loadComments(nextPage);
                }
                setError(error.message);
                throw error;
            }).finally(() => {
                preventDoubleRender.current = false;
            });
        },
        [loadComments],
    );

    const nextPage = useCallback(() => {
        fetchComments(page + 1).then(() => {
            setPage(prev => prev + 1);
        });
    }, [fetchComments, page]);

    useEffect(() => {
        fetchComments(1);
    }, [fetchComments]);

    return {
        comments,
        loading,
        error,
        totalComments,
        totalLikes,
        nextPage,
        canLoadMore:  page < totalPages
    };
}
