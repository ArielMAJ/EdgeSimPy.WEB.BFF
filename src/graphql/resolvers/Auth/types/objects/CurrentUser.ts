import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export default class CurrentUser {
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
