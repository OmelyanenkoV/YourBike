const uuid = require("uuid").v4;
const fs = require("fs");
const path = require("path");

class Bicycle {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = uuid();
  }

  toJSON() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id,
    };
  }

  static async update(bicycle) {
    const bicycles = await Bicycle.getAll();

    const idx = bicycles.findIndex((c) => c.id === bicycle.id);
    bicycles[idx] = bicycle;

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "bicycles.json"),
        JSON.stringify(bicycles),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  async save() {
    const bicycles = await Bicycle.getAll();
    bicycles.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "bicycles.json"),
        JSON.stringify(bicycles),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "bicycles.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }
  static async getById(id) {
    const bicycles = await Bicycle.getAll();
    return bicycles.find((c) => c.id === id);
  }
}

module.exports = Bicycle;
