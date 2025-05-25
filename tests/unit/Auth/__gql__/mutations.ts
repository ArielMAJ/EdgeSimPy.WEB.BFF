import gql from "graphql-tag";

export const loginRequestMutation = gql`
  mutation loginRequest($email: String!, $password: String!) {
    loginRequest(input: { email: $email, password: $password }) {
      accessToken
      tokenType
      expiresAt
    }
  }
`;
