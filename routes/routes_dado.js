const express = require("express")
const getDocumentoDado = require("../controllers/getDocumentoDado.js")
const getUsuario = require("../controllers/getUsuario.js")
const getNovoUsuario = require("../controllers/getNovoUsuario.js")
const setDocumento = require("../controllers/setDocumento.js")
const getDocumentoHome = require("../controllers/getDocumentoHome.js")

const router = express.Router()

router.post("/dados", getDocumentoDado)

router.post("/home", getDocumentoHome)

router.get("/", (req, res) => {
    // Imprimir "Olá, mundo" no console do servidor
    console.log("Olá, mundo");

    // Enviar "Olá, mundo" como resposta para o cliente
    res.send("Olá, mundo");
})

router.post("/login", getUsuario)

router.post("/criardocumeto", setDocumento)

router.post("/registrar", getNovoUsuario)

module.exports = router;
