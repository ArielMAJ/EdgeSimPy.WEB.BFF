import { Field, InputType } from "type-graphql";

@InputType({ description: "Login request input" })
export default class LoginRequestInput {
  @Field({ description: "User email address" })
  email!: string;

  @Field({ description: "User password" })
  password!: string;
}
