import { galaxiesService } from "../services/GalaxiesService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createNewGalaxy)
            .get('', this.getGalaxies)
            .get('/:Id', this.getGalaxyById)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)

    }

    async createNewGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const newGalaxy = await galaxiesService.createNewGalaxy(galaxyData)
            res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next) {
        try {
            const query = req.query
            const galaxies = await galaxiesService.getGalaxies(query)
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next) {
        try {
            const galaxyId = req.params.Id
            const galaxy = await galaxiesService.getGalaxyByID(galaxyId)

            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsByGalaxyId(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

}