const express = require("express") 
const Router = require("express-promise-router");
const bodyParser = require("body-parser")
const db = require("./db")

const app = express();
const router = Router();

app.use(router);
app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.json({
        name: "hello",
        age: 38
    })
})

router.get("/delivery/:id?", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (id === undefined) {
        results = await db.getAllDeliveriesAsync();
        console.log(results)
        res.send(results)
    }
    else {
        result = await db.getDeliveryAsync();
        res.send()
    }
})

router.post("/delivery", async (req, res) => {
    const { id_deliverer, id_checker, week_mer, week_mep, descr, jiras } = req.body;
    
})

app.get("/members", db.getTeamMembers)


app.listen(3001, ()=> console.log("server listenning on 3001"))