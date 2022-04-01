const express = require("express") 
const bodyParser = require("body-parser")
const db = require("./db")

const app = express();

app.use(bodyParser.urlencoded( {extended: false}))
app.use(bodyParser.json())

app.get("/home", (req, res) => {
    res.json({
        name: "hello",
        age: 38
    })
})

app.get("/delivery", db.getAllDeliveries)
app.get("/members", db.getTeamMembers)

app.listen(3001, ()=> console.log("server listenning on 3001"))