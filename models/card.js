const path = require("path");
const fs = require("fs");
const { resolve } = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "card.json"
);

class Card {
  static async add(bicycle) {
    const card = await Card.fetch();
    const indx = card.bicycles.findIndex((c) => c.id === bicycle.id);
    const candidate = card.bicycles[indx];

    if (candidate) {
      // велосипед уже сть
      candidate.count++;
      card.bicycles[indx] = candidate;
    } else {
      // надо добавить велосипед
      bicycle.count = 1;
      card.bicycles.push(bicycle);
    }
    card.price += +bicycle.price;

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  static async remove(id) {
    const card = await Card.fetch();
    const indx = card.bicycles.findIndex((c) => c.id === id);
    const bicycle = card.bicycles[indx];
    if (bicycle.count === 1) {
      // удалить
      card.bicycles = card.bicycles.filter((c) => c.id !== id);
    } else {
      //изменить количество
      card.bicycles[indx].count--;
    }
    card.price -= bicycle.price;

    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(card);
        }
      });
    });
  }
  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(p, "utf-8", (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(content));
        }
      });
    });
  }
}

module.exports = Card;
