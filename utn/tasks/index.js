const express = require('express');
const router = express.Router();
const ROUTE_PROJECT = process.env.ROUTE_PROJECT || "pwa_6522";
const ROUTE_TASKS = "tasks";
const FINAL_ROUTE = `/${ROUTE_PROJECT}/${ROUTE_TASKS}`;

const app = express();

const path_tasks = __dirname;

router.get("/",(req,res)=>{
    res.sendFile(`${path_tasks}/index.html`);
});

router.get("/lesson_1",(req,res)=>{
    res.redirect(`${FINAL_ROUTE}/lesson_1/index.html`);
});

router.use("/", express.static(path_tasks));

router.get('*', (req,res)=>{
    res.status(404);
    res.send({error:`Not found in ${FINAL_ROUTE}/**`})
});

app.use(`${FINAL_ROUTE}`, router) //Production Environment

app.use('/', router) //Local Environment

// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
    res.status(404);
    res.send({error:'Not found'});
});

module.exports = app;