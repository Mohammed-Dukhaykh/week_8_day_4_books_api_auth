const express = require("express")
const bodyParser = require("body-parser")
const books = require("./Routes/books")
const mongoose = require("mongoose")
const user = require("./Routes/users")
require("dotenv").config()

mongoose.connect(`
mongodb+srv://MoDuGh28:${process.env.MONGODB_PASSWORD}@cluster0.aabjx.mongodb.net/mySecondDatabase?retryWrites=true&w=majority
`).then(() => {
  console.log("Mongoos is connected")
})
.catch(error => {
  console.log("the Error is", error)
})

const app = express()


app.use(bodyParser.json())
app.use("/api/books" , books )
app.use("/api/auth" , user)


app.listen(3000 , () => {
  console.log("the server is listening on port " + 3000)
})