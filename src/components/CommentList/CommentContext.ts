import {createContext} from "use-context-selector";
import {IAuthor} from "src/models/IAuthor";

export interface ICommentContext {
    authors: IAuthor[] | null;
}

export default createContext<ICommentContext>({
    authors: null,
});
