import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ColonySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
    // galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
},
    { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('planet', {
    localField: 'PlanetID',
    ref: 'Planet',
    foreignField: '_id',
    justOne: true
}

)

