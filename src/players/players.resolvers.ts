import { MockList } from 'graphql-tools';

export default {
  Query: {
    players: () => [],
    playerByTag: () => new MockList(1),
  },
};
