export const authors = [
  { id: 1, firstName: "Tom", lastName: "Coleman" },
  { id: 2, firstName: "Sashko", lastName: "Stubailo" },
  { id: 3, firstName: "Mikhail", lastName: "Novikov" },
];

const authorsResolver = {
  Query: {
    author: (_, { id }) => authors.find((author) => author.id === id),
  },
};

export default authorsResolver;
