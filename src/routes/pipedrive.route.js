const { Router } = require("express");
const routes = Router();

const pipedriveController = require("../controllers/pipedrive.controller");

/**
 * @ROUTES
 */

routes.post("/v1/addDeal", validarBody, async (req, res) => {
    var { titulo, pipelineId } = req.body;
    const retornoPipedrive = await pipedriveController.criarNegocioPipedrive({ titulo, pipelineId });
    if (retornoPipedrive.erro) return res.status(500).json(retornoPipedrive);
    return res.status(201).json(retornoPipedrive);
})

/**
 * @MIDDLEWARES
 */

function validarBody(req, res, next) {
    if (!req.body.titulo) return res.status(404).json({ erro: true, message: "'titulo' not found in body" });
    if (!req.body.pipelineId) return res.status(404).json({ erro: true, message: "'pipelineId' not found in body" });
    next();
}

module.exports = routes;