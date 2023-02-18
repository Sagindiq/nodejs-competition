import mongoose from "mongoose";
import {} from '../model'
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/node-competition'

const mongo = async () => {
    return await mongoose.connect(MONGO_CONNECTION_STRING)
}

export default mongo
