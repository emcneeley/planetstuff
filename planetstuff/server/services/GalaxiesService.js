import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class GalaxiesService {

    async createNewGalaxy(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)
        return newGalaxy
    }

    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }

    async getGalaxyByID(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)

        if (!galaxy) throw new BadRequest('No ID to be found')
        return galaxy
    }

}

export const galaxiesService = new GalaxiesService()