export interface ICommentRaw {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}
