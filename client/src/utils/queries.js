import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me{
  me{
    _id
    username
    savedBooks{
      _id
      bookId
      description
      title
      authors
      image
    }
    bookCount
}
}`

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};