import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Token {
  @Field({ description: "Access token for authentication" })
  accessToken!: string;

  @Field({ description: "Type of the token issued" })
  tokenType!: string;

  @Field(() => Date, { description: "Expiration date and time of the token" })
  expiresAt!: Date;
}
