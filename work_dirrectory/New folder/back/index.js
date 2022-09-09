// Mongodb
import mongoose from "mongoose";
import app from "./server.js";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

// Env
const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 3002;

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb database successfully connected');
});

(async function start() {
    try {
        await mongoose.connect(uri);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    } catch (e) {
        console.log(e)
    }
})();

