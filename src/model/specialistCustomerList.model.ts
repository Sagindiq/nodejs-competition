import mongoose, { Schema, Types } from "mongoose";

const SpecialistCustomerListSchema: Schema = new mongoose.Schema({
    id: {
        type: Types.ObjectId,
        required: true,
    },
    specialist_id: {
        type: Number,
        required: true,
        ref: 'specialists'
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true,
        match: /^998\d{9}$/
    },
    planning_date: {
        type: String,
        required: true
    }
}, {
    collection: 'specialistCustomerList'
})

const SpecialistCustomerListModel = mongoose.model('specialistCustomerList', SpecialistCustomerListSchema);
export default SpecialistCustomerListModel;