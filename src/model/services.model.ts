import mongoose, { Schema, Types } from "mongoose";

const ServicesSchema: Schema = new mongoose.Schema({
    id: {
        type: Types.ObjectId,
        required: true,
    },
    title: String,
    specialists: [
        {
            type: Number,
            required: true,
            ref: 'specialists'
        }
    ]
}, {
    collection: 'services'
})

const serviceModel = mongoose.model('services', ServicesSchema)

export default serviceModel;