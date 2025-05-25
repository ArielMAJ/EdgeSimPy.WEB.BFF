import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import { Container } from "typedi";
import GetCurrentUserResolver from "./resolvers/Auth/queries/currentUser";

const apolloServer = async () => {
  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [GetCurrentUserResolver],
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
