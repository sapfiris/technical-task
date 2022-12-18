import {memo, useMemo, useReducer} from "react";
import {useContextSelector} from "use-context-selector";
import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Skeleton,
    styled,
    Typography,
} from "@mui/material";
import LikedIcon from "@mui/icons-material/Favorite";
import NotLikedIcon from "@mui/icons-material/FavoriteBorder";
import {ICommentListItem} from "src/models/ICommentListItem";
import DateUtils from "../../utils/DateUtils";
import CommentContext from "./CommentContext";

const AVATAR_SIZE = 56;

const StyledListItem = styled(ListItem)({
    paddingLeft: 0,
    paddingBottom: 0,
    "& .MuiListItemSecondaryAction-root": {
        right: 0,
    },
});

const StyledCommentText = styled(Typography)({
    paddingLeft: 16 + AVATAR_SIZE,
    paddingRight: 40,
    overflowWrap: "break-word",
});

const StyledChildrenContainer = styled(List)(({theme: {breakpoints}}) => ({
    padding: 0,
    [breakpoints.up("md")]: {
        paddingLeft: 24,
        paddingBottom: 4,
    },
}));

interface IProps {
    comment: ICommentListItem;
}

const CommentItem = ({comment}: IProps) => {
    const authors = useContextSelector(CommentContext, (c) => c.authors);
    const [liked, toggleLike] = useReducer((state) => !state, false);
    const author = useMemo(
        () => authors?.find((a) => a.id === comment.authorId),
        [authors, comment.authorId],
    );

    const countLikes = comment.likes + Number(liked);

    return (
        <>
            <StyledListItem
                secondaryAction={
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            size="small"
                            aria-label="like"
                            onClick={toggleLike}
                            sx={{color: "red"}}
                        >
                            {liked ? <LikedIcon /> : <NotLikedIcon />}
                        </IconButton>
                        {countLikes > 0 && (
                            <Typography variant="body2" sx={{marginLeft: 0.5}}>
                                {countLikes}
                            </Typography>
                        )}
                    </Box>
                }
            >
                <ListItemAvatar sx={{paddingRight: 2}}>
                    {author ? (
                        <Avatar
                            alt={author.name}
                            src={author.avatar}
                            sx={{width: AVATAR_SIZE, height: AVATAR_SIZE}}
                        />
                    ) : (
                        <Skeleton
                            variant="circular"
                            width={AVATAR_SIZE}
                            height={AVATAR_SIZE}
                        />
                    )}
                </ListItemAvatar>
                <ListItemText
                    primary={
                        author ? (
                            author.name
                        ) : (
                            <Skeleton variant="text" sx={{marginRight: 3}} />
                        )
                    }
                    secondary={
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{marginTop: -0.5}}
                        >
                            {DateUtils.toRelativeTime(comment.created)}
                        </Typography>
                    }
                />
            </StyledListItem>
            <StyledCommentText variant="body2">
                {comment.text}
            </StyledCommentText>

            {comment.children && (
                <StyledChildrenContainer>
                    {comment.children.map((item) => (
                        <CommentItem key={item.id} comment={item} />
                    ))}
                </StyledChildrenContainer>
            )}
        </>
    );
};

export default memo(CommentItem);
