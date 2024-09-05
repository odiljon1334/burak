import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
        console.log(`The server is running successfuly on port: ${PORT}`)
    })
})
.catch((err) => console.log("ERROR on connection MongoDB", err));


