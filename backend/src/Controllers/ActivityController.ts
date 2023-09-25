import { Request, Response } from 'express'
import ActivitiesRepository from '../Repositories/ActivitiesRepository'

class ActivityController {
	async index(request: Request, response: Response) {
		const activities = await ActivitiesRepository.findAll()
		response.json(activities)
	}

	async store(request: Request, response: Response) {
		const {message, status, isDeletable} = request.body

		const activity = await ActivitiesRepository.createActivity({message, status, isDeletable})

		response.status(201).json(activity)
	}

	async update(request: Request, response: Response) {
		const {status} = request.body
		const {id} = request.params
		const activity = await ActivitiesRepository.update({status, id})
        
		response.status(201).json(activity)
	}

	async delete(request: Request, response: Response) {
		const {id} = request.params

		await ActivitiesRepository.delete(id)

		response.status(204).send()
	}

	async deleteCompleted(request: Request, response: Response) {
		await ActivitiesRepository.deleteCompleted()
		response.status(204).send()
	}
}

export default new ActivityController()