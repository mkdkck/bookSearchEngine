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
  query user($_id: String,$username:String) {
    user(_id: $_id,username:$username) {
        _id
        username
        savedBooks
        bookCount
    }
  }
`;