import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import {IAuthor} from "src/models/IAuthor";

async function getAll(): Promise<IAuthor[]> {
    return await getAuthorsRequest();
}

export default {
    getAll,
};
