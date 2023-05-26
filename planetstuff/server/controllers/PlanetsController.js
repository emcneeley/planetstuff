import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {

    constructor() {
        super('/api/planets')
        this.router
            .post('', this.createNewPlanet)
            .get('', this.getAllPlanets)
            .get('/:Id', this.getPlanetsById)
    }


    async createNewPlanet(req, res, next) {
        try {
            const planetData = req.body
            const newPlanet = await planetsService.createNewPlanet(planetData)
            res.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }

    async getAllPlanets(req, res, next) {
        try {
            const query = req.query
            const planets = await planetsService.getAllPLanets(query)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsById(req, res, next) {
        try {
            const planetId = req.params.Id
            const planet = await planetsService.getPlanetsbyId(planetId)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

}