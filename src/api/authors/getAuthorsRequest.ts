import axios from "axios";

async function getAuthorsRequest() {
    const {data} = await axios.get("/api/authors");
    return data;
}

export default getAuthorsRequest;
