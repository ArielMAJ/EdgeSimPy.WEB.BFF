import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import { Container } from "typedi";
import glob from "glob";

const apolloServer = async () => {
  const resolvers = path.join(__dirname, "./resolvers/**/index.{ts,js}");
  console.log("resolvers", resolvers);
  const resolverFiles = glob.sync(__dirname, { absolute: true });
  console.log("Found resolver files:", resolverFiles);
  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [resolvers],
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
