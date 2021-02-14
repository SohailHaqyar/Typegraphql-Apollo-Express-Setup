import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers";

(async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const app = express();

  const apolloServer = new ApolloServer({ schema });
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () =>
    console.log("Listening on port http://localhost:4000/graphql")
  );
})();
