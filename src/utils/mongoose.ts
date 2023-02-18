import mongoose from "mongoose";
import {} from '../model'
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017node-competition'

const mongo = async() => {
    return await mongoose.connect(MONGO_CONNECTION_STRING)
}

export default mongo
