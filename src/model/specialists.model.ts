import mongoose, { Schema, Types } from "mongoose";

const SpecialistsSchema: Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: Types.ObjectId,
        required: true,
        ref: 'services'
    },
    phone: {
        type: String,
        required: true,
        match: /^998\d{9}$/
    },
    workshop_title: String,
    address: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        }
    },
    opening_hours: {
        type: Date,
        required: true
    },
    closing_hours: {
        type: Date,
        required: true
    },
    per_customer_time: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    collection: 'specialists'
})

const specialistModel = mongoose.model('specialists', SpecialistsSchema)
export default specialistModel;