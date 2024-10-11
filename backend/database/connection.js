import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "AUCTION_PLATFORM"
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log(`Database connection error: ${error}`);
    })
}