import { Arg, Mutation, Resolver } from "type-graphql";
import { registerNewUser } from "../../../../services/authentication/user.service";
import RegisterRequestInput from "../types/inputs/RegisterRequestInput";
import RegisterResponse from "../types/objects/RegisterResponse";

@Resolver()
export default class RegisterRequestResolver {
  @Mutation(() => RegisterResponse, { description: "Registers new user." })
  async registerRequest(
    @Arg("input", () => RegisterRequestInput)
    { fullName, email, password }: RegisterRequestInput
  ): Promise<RegisterResponse> {
    console.info(
      `[RegisterRequestResolver] Received register request for email: ${email}`
    );
    return registerNewUser(fullName, email, password);
  }
}
