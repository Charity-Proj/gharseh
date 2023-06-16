require('dotenv').config({path:"./config.env"})
const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

connectDB()
const PORT = process.env.PORT


app.use(express.json());
app.use(cors());
app.use('/api',require('./routers/auth'));
app.use('/api',require('./routers/Payment'));

app.use(errorHandler)

const server = app.listen(PORT,() => console.log(` server is running in port ${PORT}`));

process.on("unhandledRejection", (err,promise) => {
console.log(` logged error:${err}`)
server.close(() => process.exit(1))
})