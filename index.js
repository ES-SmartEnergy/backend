


const routes = require("./routes/routes_dado.js")
const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/.netlify/functions/api", routes);

app.listen( process.env.PORT || 3000);

module.exports.handler = serverless(app)