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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books:[Book]
    users:[User]
    user:[userId:ID,username:String]:User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook (userId:ID!,bookId:ID!):User
    removeBook(userId:ID!,bookId:ID!): User
  }
`;

module.exports = typeDefs;