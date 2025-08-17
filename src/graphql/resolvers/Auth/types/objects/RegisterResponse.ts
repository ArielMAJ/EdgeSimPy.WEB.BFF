import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class RegisterResponse {
  @Field()
  fullName!: string;

  @Field()
  email!: string;
}
