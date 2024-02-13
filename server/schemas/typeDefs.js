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
    books:[Book]
    users:[User]
    user:[_id:ID,username:String]:User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    updateBook (_id:ID!,bookId:ID!):User
    login(email: String!, password: String!): Auth
    removeBook(_id:ID!,bookId:ID!): User
  }
`;

module.exports = typeDefs;