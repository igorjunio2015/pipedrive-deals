const pipedriveService = require("../services/pipedrive.service");

module.exports = class PipedriveController {

    static async criarNegocioPipedrive(params) {
        const retornoPipedrive = await pipedriveService.addDeal(params);
        if (retornoPipedrive.erro) return retornoPipedrive
        else return retornoPipedrive;
    }

}