import mongoose, { Schema, Types } from "mongoose";

const SpecialistTimesSchema: Schema = new mongoose.Schema({
    id: Types.ObjectId,
    specialist_id: {
        type: Number,
        required: true,
        ref: 'specialists'
    },
    date: [{
        type: Date,
        required: true,
        hours: [
            {
                type: String,
                required: true,
                match: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                status: {
                    type: Boolean,
                    required: true,
                    default: true
                }
            }
        ]
    }]
}, {
    collection: 'specialist_times'
})

const specialistTimesModel = mongoose.model('specialist_times', SpecialistTimesSchema)
export default specialistTimesModel;