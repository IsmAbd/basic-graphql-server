const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log(`Server running at localhost:8000${apolloServer.graphqlPath}`);
});
