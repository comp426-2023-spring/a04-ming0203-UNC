import { rpsls } from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"

const app = express()
const args = minimist(process.argv.slice(2))
app.use(express.urlencoded({ extended: true }));

const port = args.port || 5000

app.get('/app', (req, res)=>{
    res.status(200).send("200 OK");
})

app.get("/app/*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.get('/app/rps/', (req, res)=>{
    res.status(200).send(JSON.stringify(rps()));
})

app.get('/app/rpsls', (req,res)=>{
    res.status(200).send(JSON.stringify(rpsls()));
})

app.get('/app/rps/play/', (req,res)=>{
    res.status(200).send(JSON.stringify(req.query.shot));
})

app.get('/app/rpsls/play/', (req,res)=>{
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

app.get('/app/rpsls/play/', (req,res)=>{
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})

app.get('/app/rpsls/play/:shot', (req,res)=>{
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})

app.listen(port)