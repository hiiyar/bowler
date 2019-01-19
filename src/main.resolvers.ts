import Players from './players/players.resolvers';

const RootResolver = {
  Query: {
    health: () => 'ok',
  },
};

export default [RootResolver, Players];
