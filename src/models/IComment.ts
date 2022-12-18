import {ICommentRaw} from "./ICommentRaw";

export interface IComment extends Omit<ICommentRaw, "author"> {
    authorId: number;
}
