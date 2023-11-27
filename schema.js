export const typeDefs = `#graphql
    type Book {
        id: ID!,
        title: String!,
        author: String!,
        publisher: String!,
        publish_year: Int!
    }

    scalar Date
    type Author {
        id: ID!,
        full_name: String!,
        birth_date: Date!
        address: String!
    }

    type Query {
        getAllBook: [Book!]!
        getAllAuthor: [Author!]!
    }
`