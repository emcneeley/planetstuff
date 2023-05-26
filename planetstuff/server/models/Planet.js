import mongoose from "mongoose";

const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
    name: { type: String, required: true },
    biome: { type: String, require: true },
    atmosphere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
},
    { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})

