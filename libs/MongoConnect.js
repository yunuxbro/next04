import mongoose from "mongoose";


export const MongoConnect = async () => {
    try{
      await mongoose.connect(process.env.MONGO_LINK);

    } catch (err) {
        console.log(err);
    }
}

export default MongoConnect;