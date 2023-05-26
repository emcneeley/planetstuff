import { coloniesService } from "../services/ColoniesService";
import BaseController from "../utils/BaseController";

export class ColoniesController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .post('', this.createColony)
    }
    async createColony(req, res, next) {
        try {
            const colonyData = req.body
            const newColony = await coloniesService.createNewcolony(colonyData)
            res.send(newColony)
        } catch (error) {
            next(error)
        }
    }
}