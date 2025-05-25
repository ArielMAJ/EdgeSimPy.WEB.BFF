import { Arg, Mutation, Resolver } from "type-graphql";
import { AuthenticationError } from "apollo-server-errors";
import LoginRequestInput from "../types/inputs/LoginRequest";
import Token from "../types/objects/Token";
import { requestToken } from "../../../../services/authentication/login.service";

@Resolver()
export default class LoginRequestResolver {
  @Mutation(() => Token, { description: "Logs the user in." })
  async loginRequest(
    @Arg("input", () => LoginRequestInput)
    input: LoginRequestInput
  ): Promise<Token> {
    const { email, password } = input;
    console.info(
      `[LoginRequestResolver] Received login request for email: ${email}`
    );
    return requestToken(email, password);
  }
}
