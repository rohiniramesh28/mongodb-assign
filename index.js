import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(()=>{
    console.log("Database is connected successfully.");
    app.listen(PORT, ()=> {
      console.log('Server is running on port ${8000}');
    });
})
.catch((error) => console.log(error));