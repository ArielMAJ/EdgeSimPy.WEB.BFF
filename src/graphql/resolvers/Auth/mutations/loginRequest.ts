import { Arg, Mutation, Resolver } from "type-graphql";
import { requestToken } from "../../../../services/authentication/auth.service";
import LoginRequestInput from "../types/inputs/LoginRequestInput";
import TokenResponse from "../types/objects/TokenResponse";

@Resolver()
export default class LoginRequestResolver {
  @Mutation(() => TokenResponse, { description: "Logs the user in." })
  async loginRequest(
    @Arg("input", () => LoginRequestInput)
    { email, password }: LoginRequestInput
  ): Promise<TokenResponse> {
    console.info(
      `[LoginRequestResolver] Received login request for email: ${email}`
    );
    return requestToken(email, password);
  }
}
