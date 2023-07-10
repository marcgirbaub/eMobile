import { Factory } from "fishery";
import { faker } from "@faker-js/faker";

const mobilesFactory = Factory.define(() => ({
  id: faker.string.uuid(),
  brand: faker.commerce.productName(),
  model: faker.commerce.productAdjective(),
  price: faker.commerce.price(),
  imgUrl: faker.image.url(),
}));

export const getRandomMobileList = (number) => mobilesFactory.buildList(number);
