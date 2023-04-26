import { gql } from "@apollo/client";

export const getCharacters = gql`
  query Characters {
    characters(filter: { name: "Rick" }) {
      results {
        id
        image
        name
        type
        status
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
