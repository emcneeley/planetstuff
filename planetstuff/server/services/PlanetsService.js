import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class PlanetsService {





    createNewPlanet(planetData) {
        const newPlanet = dbContext.Planets.create(planetData)
        return newPlanet
    }

    async getAllPLanets(query) {
        const allPlanets = await dbContext.Planets.find(query)
            .populate('galaxy', 'name stars')
        return allPlanets
    }

    async getPlanetsbyId(planetId) {
        const planet = await dbContext.Planets.findById(planetId)
        return planet
    }


    getPlanetsByGalaxyId(galaxyId) {
        const planet = dbContext.Planets.find({ galaxyId: galaxyId })
        if (!planet) throw new BadRequest('No PLanet ID')
        return planet
    }
}


export const planetsService = new PlanetsService()