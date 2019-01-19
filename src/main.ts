import { ApolloServer, gql, ServerInfo } from 'apollo-server';
import { importSchema } from 'graphql-import';
import resolvers from './main.resolvers';
const typeDefs = importSchema(__dirname + '/main.graphql');

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  // @ts-ignore: https://github.com/apollographql/apollo-server/issues/1775
  resolvers,

  // Mocks all resolvers. On until we start fetching from data source
  mocks: true,

  // @TODO: Disable these options when making the app live.
  // for development sake, will leave it on even on production
  introspection: true,
  playground: true,
});

// launch webserver
const PORT = Number(process.env.PORT) || 8080;
server.listen({ port: PORT }).then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});
