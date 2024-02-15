const typeDefs = `
  type bookSchema{
    _id:ID
    authors:[String]
    description:String
    bookId:ID!
    title:String
    image:String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]!
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
    addBook (
      authors:[String]
      bookId:ID!
      description:String!    
      image:String
      title:String!):User
    removeBook(userId:ID!,bookId:ID!): User
  }
`;

module.exports = typeDefs;