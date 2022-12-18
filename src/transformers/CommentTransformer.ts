import {IComment} from "../models/IComment";
import {ICommentRaw} from "../models/ICommentRaw";

const hydrate = (data: ICommentRaw): IComment => {
    const {author, ...rest} = data;
    return {
        ...rest,
        authorId: author,
    };
};

export default {hydrate};
