import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $authors:[String]
    $bookId:ID!
    $description:String!    
    $image:String
    $title:String!
    ){
    addBook(
      authors:$authors
      bookId:$bookId
      description:$description
      image:$image
      title:$title
      ) {
        _id 
       username
       savedBooks{
        bookId
        title
       }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId:ID!) {
    removeBook(bookId:$bookId) {
        _id
        username
        savedBooks{
          _id
          bookId
          title
         }
    }
  }
`;