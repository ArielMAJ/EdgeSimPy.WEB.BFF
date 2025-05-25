import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import { Container } from "typedi";
import GetCurrentUserResolver from "./resolvers/Auth/queries/currentUser";
import LoginRequestResolver from "./resolvers/Auth/mutations/loginRequest";
import InfoResolver from "./resolvers/Info/queries/info";

const apolloServer = async () => {
  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [GetCurrentUserResolver, LoginRequestResolver, InfoResolver],
    validate: false,
    container: Container,
  };
  const apolloSchema = await buildSchema(apolloSchemaOptions);

  return new ApolloServer({
    schema: apolloSchema,
    introspection: true,
    context: ({ req }) => ({ req }),
  });
};

export default apolloServer;
