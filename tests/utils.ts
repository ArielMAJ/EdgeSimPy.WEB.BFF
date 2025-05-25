import path from "path";
import { Container } from "typedi";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";

export const createTestServer = async (context: any = {}) => {
  const resolvers = path.join(
    __dirname,
    "../src/graphql/resolvers/**/index.{ts,js}"
  );

  const apolloSchema = await buildSchema({
    resolvers: [resolvers],
    container: Container,
  });

  return new ApolloServer({
    schema: apolloSchema,
    context: () => context,
  });
};
