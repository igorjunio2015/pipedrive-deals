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
                pipeline_id: params.pipelineId
            }
            const response = await api.addDeal(data);

            this.retorno.data = response;
        } catch (err) {
            const errorToLog = err.context?.body || err;
            this.retorno = { erro: true, data: errorToLog };
        }
        return this.retorno;
    }
}
