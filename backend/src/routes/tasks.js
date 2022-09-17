import { Router } from "express";
import { getTask } from "../controllers/task";

const router = Router();


router.get('/tasks',getTask)

router.get('/tasks/count')

router.get('/tasks/:id')

router.post('/tasks')

router.put('/tasks/:id')

router.delete('/tasks/:id')



export default router;
