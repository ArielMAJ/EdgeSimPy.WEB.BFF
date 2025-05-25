import { gql } from "graphql-tag";

export const getCurrentUserQuery = gql`
  query GetCurrentUser {
    currentUser {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
