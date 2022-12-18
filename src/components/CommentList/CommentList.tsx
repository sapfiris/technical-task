import {useEffect, useMemo, useState} from "react";
import {FavoriteBorder} from "@mui/icons-material";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Divider,
    Grid,
    List,
    Snackbar,
    styled,
    Typography,
} from "@mui/material";
import grey from "@mui/material/colors/grey";
import CommentContext from "./CommentContext";
import Comment from "src/components/CommentList/Comment";
import {useComments} from "src/components/CommentList/useComments";
import AuthorService from "../../services/AuthorService";
import {IAuthor} from "src/models/IAuthor";
import Spinner from "../Spinner";

const StyledLoadMoreButton = styled(Button)({
    textTransform: "initial",
    backgroundColor: grey[800],
    color: "#fff",
    "&:hover": {
        color: "black",
        backgroundColor: grey["A100"],
    },
});

export const CommentList = () => {
    const {
        comments,
        loading,
        error,
        totalComments,
        totalLikes,
        nextPage,
        canLoadMore,
    } = useComments();

    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [isErrorOpened] = useState<boolean>(false);

    useEffect(() => {
        AuthorService.getAll().then(setAuthors);
    }, []);

    const renderHeader = useMemo(
        () => (
            <Grid item container spacing={1} xs={12}>
                <Grid item container justifyContent="space-between" xs={12}>
                    <Grid item>
                        {totalComments && (
                            <Typography variant="body2">{`${totalComments} комментариев`}</Typography>
                        )}
                    </Grid>
                    <Grid item>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <FavoriteBorder sx={{marginRight: 1}} />
                            {totalLikes && (
                                <Typography variant="body2">
                                    {totalLikes}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Grid>
        ),
        [totalComments, totalLikes],
    );

    const renderLoadMore = useMemo(
        () => (
            <Grid item xs={12} textAlign="center">
                <StyledLoadMoreButton
                    onClick={nextPage}
                    variant="contained"
                    disabled={loading}
                    startIcon={
                        <CircularProgress
                            size={16}
                            sx={{
                                visibility: loading ? "visible" : "hidden",
                            }}
                        />
                    }
                    sx={{paddingRight: 3.5}}
                >
                    {!error ? "Загрузить еще" : "Попробовать снова"}
                </StyledLoadMoreButton>
            </Grid>
        ),
        [loading, error, nextPage],
    );

    const contextValue = useMemo(
        () => ({
            authors,
        }),
        [authors],
    );

    return (
        <CommentContext.Provider value={contextValue}>
            {comments ? (
                <Grid container spacing={1}>
                    {renderHeader}
                    <Grid item>
                        <List>
                            {comments.map((comment) => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </List>
                    </Grid>
                    {canLoadMore && renderLoadMore}
                </Grid>
            ) : (
                <Spinner />
            )}

            <Snackbar open={isErrorOpened || !!error} autoHideDuration={3}>
                <Alert severity="error" sx={{width: "100%"}}>
                    {error}
                </Alert>
            </Snackbar>
        </CommentContext.Provider>
    );
};
