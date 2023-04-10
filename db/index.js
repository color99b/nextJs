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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/color99b";
class MongoDB {
    constructor() {
        // this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.client = new mongodb_1.MongoClient(uri, {});
    }
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!MongoDB.instance) {
                MongoDB.instance = new MongoDB();
                yield MongoDB.instance.connect();
            }
            return MongoDB.instance;
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                console.log("Connected to MongoDB successfully");
            }
            catch (err) {
                console.error("Error connecting to MongoDB:", err);
            }
        });
    }
    getDb(databaseName) {
        return this.client.db(databaseName);
    }
}
exports.MongoDB = MongoDB;
