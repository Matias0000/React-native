import express from 'express'
import tasksRoutes from './routes/tasks'
import cors from 'cors'
import morgan from 'morgan'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

import {options} from './middlewares/swaggerOptions'

const specs = swaggerJSDoc(options)

const app = express()



app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(tasksRoutes);

app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs))

export default app