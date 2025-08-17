import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class CurrentUserResponse {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
