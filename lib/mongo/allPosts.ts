import { MongoClient, Db, Collection } from "mongodb";
import clientPromise from ".";

let client: MongoClient | undefined;
let db: Db | undefined;
let posts: Collection<any> | undefined;

const init = async () => {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    posts = db.collection("posts");
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
};

(async () => await init())();

const getPosts = async () => {
  try {
    if (!posts) await init();
    const res = await posts!.find({});
    return { posts: res };
  } catch (error) {
    return { error: "Failed to fetch posts" };
  }
};

export { getPosts };
