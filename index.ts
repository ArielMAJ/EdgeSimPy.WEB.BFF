import express from "express";
import config from "./src/config";
import apolloServer from "./src/graphql";

const { PORT } = config;

const app = express();

const start = async (port: number): Promise<void> => {
  const apolloServerInstance = await apolloServer();
  await apolloServerInstance.start();
  apolloServerInstance.applyMiddleware({ app, path: "/graphql" });

  return new Promise<void>((resolve) => {
    app.listen(port, async () => {
      console.log(`Application listening on http://localhost:${port}`);
      resolve();
    });
  });
};

start(PORT);
