import { ApolloServer, gql } from "apollo-server";

const PORT = Number(process.env.PORT) || 8080;

// example
const players = [
  {
    id: 1,
    name: "Me"
  },
  {
    id: 2,
    name: "You"
  }
];

const typeDefs = gql`
  type Player {
    id: String
    name: String
  }

  type Query {
    players: [Player]
  }
`;

const resolvers = {
  Query: {
    players: () => players
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
