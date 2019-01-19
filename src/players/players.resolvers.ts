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

export default {
  Query: {
    players: () => players
  }
};
