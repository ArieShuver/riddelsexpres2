import { connect } from "../db/dbMongo.js";
import { ObjectId } from "mongodb";

export async function getAll() {
    const db = await connect();
    const collection = db.collection("riddles");
    const riddles = await collection.find().toArray();
    return riddles;
}

export async function update(riddle) {
    try {
        const db = await connect();
        const collection = db.collection("riddles");
        const result = await collection.updateOne(
            { _id: new ObjectId(riddle._id) },
            { $set: riddle }
        );
    } catch (error) {
        console.error("Error updating riddle:", error);
        return null;
    }

}

export async function add(riddle) {
    const db = await connect();
    const collection = db.collection("riddles");
    const result = await collection.insertOne(riddle);
    if (result.insertedCount === 0) {
        console.error("Failed to add riddle");
        return null;
    }
    return result;
}

export async function deleteOne(id) {
    const db = await connect();
    const collection = await db.collection("riddles");
    await collection.deleteOne({ _id: new ObjectId(id) });
    console.log("Riddle deleted successfully");
    return { message: "Riddle deleted successfully" };
}