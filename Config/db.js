import mongoose from 'mongoose';

const connectDB = async()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGOBD_URL);
        console.log("mongo db successfull connected");
    }
    catch(err){
        console(err);
    }

}

export default connectDB;