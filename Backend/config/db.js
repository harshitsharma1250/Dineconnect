import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harshit:harshit@cluster0.18qwg.mongodb.net/dineconnecting').then(()=>{
        console.log("DB connnected") ;
    })
}