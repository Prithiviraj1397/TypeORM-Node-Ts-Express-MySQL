import express from "express"
import { myDataSource } from "./config/app-data-source"
// create and setup express app
const app = express()
app.use(express.json())

//DB Connection
myDataSource.initialize().then(() => {
    console.log(`Data source has been initialized`)
}).catch((err) => {
    console.log(`Error Occured during Data source initialization  ${err}`)
})

app.use('/', require('./router/user.router'));
app.use('/roles', require('./router/role.router'));
app.use('/posts', require('./router/post.router'));
app.use('/courses', require('./router/course.router'));

app.listen(9000, () => {
    console.log(`Server is running on port 9000`);
})