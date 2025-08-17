import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import { Container } from "typedi";
import LoginRequestResolver from "./resolvers/Auth/mutations/loginRequest";
import RegisterRequestResolver from "./resolvers/Auth/mutations/registerRequest";
import GetCurrentUserResolver from "./resolvers/Auth/queries/currentUser";
import InfoResolver from "./resolvers/Info/queries/info";

const apolloServer = async () => {
  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [
      GetCurrentUserResolver,
      RegisterRequestResolver,
      LoginRequestResolver,
      InfoResolver,
    ],
    validate: false,
    container: Container,
  };
  const apolloSchema = await buildSchema(apolloSchemaOptions);

  return new ApolloServer({
    schema: apolloSchema,
    introspection: true,
    context: ({ req }) => ({ req }),
    formatError: (error) => {
      const firstExternalError =
        error.extensions?.externalError?.response?.data?.detail?.[0];
      const errorMessage =
        firstExternalError?.ctx?.reason ||
        firstExternalError?.msg?.replace("Value error, ", "") ||
        error.message;
      return {
        message: errorMessage,
        statusCode:
          error.extensions?.externalError?.response?.status ||
          error.extensions?.externalError?.status ||
          500,
        statusMessage:
          error.extensions?.externalError?.response?.statusText ||
          error.extensions?.externalError?.response?.details ||
          "Internal Server Error",
        code:
          error.extensions?.externalError?.code ||
          error?.extensions?.code ||
          "INTERNAL_SERVER_ERROR",
        path: error.path,
        type: firstExternalError?.type,
        loc: firstExternalError?.loc,
      };
    },
  });
};

export default apolloServer;
