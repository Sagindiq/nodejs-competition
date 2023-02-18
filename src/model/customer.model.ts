import mongoose, { Schema } from "mongoose";

const CustomerSchema: Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: /^998\d{9}$/
    }
}, {
    collection: 'customers'
})

const customerModel = mongoose.model('customers', CustomerSchema)
export default customerModel;