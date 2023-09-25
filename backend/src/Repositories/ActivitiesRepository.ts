import { Activity } from '../Models/Activity'

interface Params {
    message?: string,
    status?: number,
    isDeletable?: boolean
    id?: string
}

class ActivitiesRepository {
	async findAll() {
		const response = await Activity.find()
		return response
	}

	async createActivity({message, status, isDeletable}: Params) {
		const activity = await Activity.create({message, status, isDeletable})
		return activity
	}

	async update({status, id}: Params) {
		const activity = await Activity.findByIdAndUpdate(id, {status})
		return activity
	}

	async delete(id: string) {
		const activity = await Activity.findByIdAndDelete(id)
		return activity
	}

	async deleteCompleted() {
		const activity = await Activity.deleteMany({ // padrão, deleta vários
			status: {
				$eq: 2 // padrão dele
			}
		})
		return activity
	}
    
}


export default new ActivitiesRepository()