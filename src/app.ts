import express from "express";
import config from "./config";
import apolloServer from "./graphql";

const { PORT } = config;

const app = express();

const start = async (port: number): Promise<void> => {
  (await apolloServer()).applyMiddleware({ app, path: "/graphql" });

  return new Promise<void>((resolve) => {
    app.listen(port, async () => {
      console.log(`Application listening on http://localhost:${port}`);
      resolve();
    });
  });
};

start(PORT);
