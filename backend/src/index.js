import  app  from "./app";

import taskRouter from './routes/tasks'


app.use(taskRouter)

app.listen(3000);

console.log("Server on port 3000");