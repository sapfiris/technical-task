import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import authors from "src/data/authors";
import {commentsPage1, commentsPage2, commentsPage3} from "src/data/comments";

const useMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 600});

    // authors
    mock.onGet("/api/authors").reply(200, authors);

    // comments
    mock.onGet("/api/comments", {params: {page: 1}}).reply(200, commentsPage1);

    // TODO
    mock.onGet("/api/comments", {params: {page: 2}}).networkErrorOnce();
    mock.onGet("/api/comments", {params: {page: 2}}).reply(200, commentsPage2);

    mock.onGet("/api/comments", {params: {page: 3}}).reply(200, commentsPage3);
};

export default useMockAdapter;
