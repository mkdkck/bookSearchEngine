const typeDefs = `
  type Book {
    _id:ID!
    bookId: ID!
    description:String!
    title:String!
    authors:String
    image:String
    link:String
    
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount:Int
  }

  type Query {
    user:[username:String!]:User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;