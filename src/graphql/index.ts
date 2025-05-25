import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import { Container } from "typedi";
import glob from "glob";

const apolloServer = async () => {
  const resolvers = path.join(__dirname, "./resolvers/**/index.{ts,js}");
  const resolvers_vercel = path.join(__dirname, "./index.{ts,js}");
  console.log("resolvers", resolvers);
  const resolverFiles = glob.sync(resolvers, { absolute: true });
  console.log("Found resolver files:", resolverFiles);
  const allFiles = glob.sync(path.join(__dirname, "../../src/**/*.{ts,js}"), {
    absolute: true,
  });
  console.log("allFiles", allFiles);

  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [resolvers, resolvers_vercel],
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
