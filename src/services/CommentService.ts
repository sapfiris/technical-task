import getCommentsRequest from "src/api/comments/getCommentsRequest";
import {IPaginatedResponse} from "src/models/IPaginatedResponse";
import {ICommentRaw} from "src/models/ICommentRaw";
import {IComment} from "src/models/IComment";
import CommentTransformer from "src/transformers/CommentTransformer";

export const MAX_RECONNECTION = 3;

async function getAll(page: number): Promise<IPaginatedResponse<IComment[]>> {
    const {data, pagination} = (await getCommentsRequest(
        page,
    )) as IPaginatedResponse<ICommentRaw[]>;

    return {
        data: data.map(CommentTransformer.hydrate),
        pagination,
    };
}

export default {
    getAll,
};
