"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const item_1 = __importDefault(require("../models/item"));
const uri = "mongodb://127.0.0.1:27017/color99b";
// const dbName = "testdb";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(uri, {});
        console.log("Connected to MongoDB");
        // let testSchema: = mongoose.Schema({
        //   name: "string",
        //   address: "string",
        //   age: "number",
        // });
        const newItem = new item_1.default({
            name: "Sample Item",
            description: "This is a sample item",
            price: 9.99,
        });
        // newItem.save((err, item) => {
        //   if (err) {
        //     console.error("Error saving item:", err);
        //   } else {
        //     console.log("Item saved:", item);
        //   }
        // });
        console.log(newItem);
        // Add your Mongoose operations here
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
main().catch(console.error);
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     const client = new MongoClient(uri);
//     const db = client.db("test");
//     console.log("db", db);
//     console.log("client", client);
//     const temp = db
//       .collection("testcal")
//       .findOne({ a: 1 })
//       .then((data) => {
//         console.log("엘렐레", data);
//       });
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// async function main() {
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db("test");
//     console.log(db.collection("testcal").findOne({ a: 1 }));
//     // Add your MongoDB operations here
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   } finally {
//     await client.close();
//   }
// }
// main().catch(console.error);
