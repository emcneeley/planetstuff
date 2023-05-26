import { dbContext } from "../db/DbContext"

class ConloniesService {
    async createNewcolony(colonyData) {
        const newColony = await dbContext.Conlonies.create(colonyData)
        return newColony
    }




}

export const coloniesService = new ConloniesService()