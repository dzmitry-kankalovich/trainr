import { ApolloServer, ServerInfo } from 'apollo-server';
import { importSchema } from 'graphql-import'
// import { makeExecutableSchema } from 'graphql-tools'
import { allResolvers as resolvers } from './resolvers' 

const typeDefs = importSchema('graphql/schema.graphql');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });

// The `listen` method launches a web server.
server.listen({
  port: 8080
}).then((serverInfo: ServerInfo) => {
  console.log(`🚀 Server ready ${serverInfo.url}`);
});