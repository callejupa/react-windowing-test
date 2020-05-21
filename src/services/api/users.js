import faker from "faker";

export const getUsers = ({ startIndex, stopIndex }) =>
  [...Array(stopIndex - startIndex)].map(() => ({
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    firstName: faker.name.firstName()
  }));
