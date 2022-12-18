import {IComment} from "./IComment";

export interface ICommentListItem extends IComment {
    children: ICommentListItem[];
}
