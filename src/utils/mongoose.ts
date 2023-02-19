import mongoose from "mongoose";
import {} from '../model'
import { MONGO_CONNECTION_STRING } from '../config'

const mongo = async () => {
    return await mongoose.connect(MONGO_CONNECTION_STRING)
}

export default mongo
