import { MongoClient, Db } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/color99b";

export class MongoDB {
  private client: MongoClient;
  private static instance: MongoDB;

  private constructor() {
    // this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.client = new MongoClient(uri, {});
  }

  public static async getInstance(): Promise<MongoDB> {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
      await MongoDB.instance.connect();
    }
    return MongoDB.instance;
  }

  private async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log("Connected to MongoDB successfully");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  }

  public getDb(databaseName: string): Db {
    return this.client.db(databaseName);
  }
}
