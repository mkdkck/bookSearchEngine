import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books {
    book {
        _id
        bookId
        description
        title
        authors
        image
        link
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    user{
        _id
        username
        savedBooks
        bookCount
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: String,$username:String) {
    user(_id: $userId,username:$username) {
        _id
        username
        savedBooks
        bookCount
    }
  }
`;

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};