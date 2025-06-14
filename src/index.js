// require("dotenv").config();
import dotenv from "dotenv";

import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error connecting to DB : ", error);
    process.exit(1);
})




































// first approach of connecting to db


// import express from "express";
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.error("Error connecting to DB : ", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error connecting to DB : ", error);
//     }
// })();
