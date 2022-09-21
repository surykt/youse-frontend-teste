import faker from "faker";

faker.seed(0);

const defaultParams = {
  filter: false,
  skip: 0,
  limit: false
};

export default {
  fetch: userParams =>
    new Promise((resolve, reject) => {
      if (Math.random() > 0.9) {
        return reject("An error has occurred! Please try again.");
      }

      const { filter, skip, limit } = {
        ...defaultParams,
        ...userParams
      };

      const allItems = Array.from(Array(200)).map((_, i) => ({
        id: i,
        title: faker.name.findName(),
        description: faker.internet.email()
      }));

      const returnedItems = allItems
        .filter(item =>
          !filter
            ? true
            : item.title.contains(filter) || item.description.contains(filter)
        )
        .slice(skip, skip + limit);

      setTimeout(() => resolve(returnedItems), returnedItems * 10);
    })
};
