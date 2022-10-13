const pipedrive = require('pipedrive');
const defaultClient = pipedrive.ApiClient.instance;
const logger = require("npmlog");

defaultClient.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_KEY;

module.exports = class PipedriveService {
    static retorno = { erro: false };

    static async getDeals() {
        try {
            logger.http("GET_DEALS", "Sending request")

            const api = new pipedrive.DealsApi();
            const response = await api.getDeals();

            this.retorno.data = response;
        } catch (err) {
            const errorToLog = err.context?.body || err;
            this.retorno = { erro: true, data: errorToLog };
        }
        return this.retorno;
    }

    static async addDeal(params) {
        try {
            logger.http("ADD_DEAL", "Adding new deal in pipeline")

            const api = new pipedrive.DealsApi();
            const data = {
                title: params.titulo,
<<<<<<< HEAD
                pipeline_id: params.pipelineId
=======
                pipeline_id: params.pipelineId,
                "1c789bc9694dd2d61f0c4c8b073ee433365dca97": `${params.nome} ${params.sobrenome}`,
                "1019bb808f1594729c22368b5436ca7a17b0df87": params.email,
                "58ef1435017cc0c4aca73613a13afa499a611cad": params.telefone,
                "3358f544d27546aebcfeed9a4d4ada87fccbbe29": params.cargo,
                "1ce7fa13bc199dee8c04a3138756b0f8bba7b1c0": `${params.titulo}, setor: ${params.setor}`,
                "80b23c7b4cc6a8f7cb2152863011d45006fd497d": params.tamanhoEmpresa,
                "e07b41faef221c00f7401d4ee437a1d29b3597dd": params.necessidade,
                "8ed844b1472908191334766dfd2c1b54fc9f616e": params.origem
>>>>>>> debfc91 (hotfix: remove field 'cargo: 3358f544d27546aebcfeed9a4d4ada87fccbbe29')
            }
            const response = await api.addDeal(data);

            this.retorno.data = response;
        } catch (err) {
            const errorToLog = err.context?.body || err;
            this.retorno = { erro: true, data: errorToLog };
        }
        return this.retorno;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> debfc91 (hotfix: remove field 'cargo: 3358f544d27546aebcfeed9a4d4ada87fccbbe29')
