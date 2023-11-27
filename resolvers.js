import {authors, books} from "./db.js";

export const resolvers = {
    Query: {
        getAllBook: () => books,
        getAllAuthor: () => authors,
    }
}