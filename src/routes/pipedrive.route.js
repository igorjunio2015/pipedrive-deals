const { Router } = require("express");
const routes = Router();

const pipedriveController = require("../controllers/pipedrive.controller");

/**
 * @ROUTES
 */

routes.post("/v1/addDeal", validarBody, async (req, res) => {
<<<<<<< HEAD
    var { titulo, pipelineId } = req.body;
    const retornoPipedrive = await pipedriveController.criarNegocioPipedrive({ titulo, pipelineId });
=======
    const retornoPipedrive = await pipedriveController.criarNegocioPipedrive(req.body);
>>>>>>> debfc91 (hotfix: remove field 'cargo: 3358f544d27546aebcfeed9a4d4ada87fccbbe29')
    if (retornoPipedrive.erro) return res.status(500).json(retornoPipedrive);
    return res.status(201).json(retornoPipedrive);
})

/**
 * @MIDDLEWARES
 */

function validarBody(req, res, next) {
    if (!req.body.titulo) return res.status(404).json({ erro: true, message: "'titulo' not found in body" });
    if (!req.body.pipelineId) return res.status(404).json({ erro: true, message: "'pipelineId' not found in body" });
<<<<<<< HEAD
=======
    if (!req.body.nome) return res.status(404).json({ erro: true, message: "'nome' not found in body" });
    if (!req.body.sobrenome) return res.status(404).json({ erro: true, message: "'sobrenome' not found in body" });
    if (!req.body.email) return res.status(404).json({ erro: true, message: "'email' not found in body" });
    if (!req.body.telefone) return res.status(404).json({ erro: true, message: "'telefone' not found in body" });
    if (!req.body.cargo) return res.status(404).json({ erro: true, message: "'cargo' not found in body" });
    if (!req.body.tamanhoEmpresa) return res.status(404).json({ erro: true, message: "'tamanhoEmpresa' not found in body" });
    if (!req.body.setor) return res.status(404).json({ erro: true, message: "'setor' not found in body" });
    if (!req.body.necessidade) return res.status(404).json({ erro: true, message: "'necessidade' not found in body" });
    if (!req.body.origem) return res.status(404).json({ erro: true, message: "'origem' not found in body" });
>>>>>>> debfc91 (hotfix: remove field 'cargo: 3358f544d27546aebcfeed9a4d4ada87fccbbe29')
    next();
}

module.exports = routes;