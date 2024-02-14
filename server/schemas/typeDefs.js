const typeDefs = `
  type bookSchema{
    authors:String!
    description:String!
    bookId:ID!
    title:String!
  }


  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]
    bookCount:Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users:[User]!
    user(userId:ID,username:String):User
    me: User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook (userId:ID!,bookId:ID!):User
    removeBook(userId:ID!,bookId:ID!): User
  }
`;

module.exports = typeDefs;