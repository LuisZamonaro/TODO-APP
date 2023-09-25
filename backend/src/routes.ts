import {Router} from 'express'
import ActivityController from './Controllers/ActivityController'

export const router = Router()

// Show All Todos
router.get('/', ActivityController.index)

// Create a Todo
router.post('/', ActivityController.store)

// Clear Completed
router.delete('/clear', ActivityController.deleteCompleted)

// Update a todo
router.patch('/:id', ActivityController.update) // tudo que for individual (id) tem que ficar por último na ordem

// Delete a Todo
router.delete('/:id', ActivityController.delete)
