import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

import mongoose from "mongoose";
import server from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then(data => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, () => {
      console.info(
        `The server is running successfuly on port: ${PORT}, http://localhost:${PORT}`
      );
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch(err => console.log("ERROR on connection MongoDB", err));
