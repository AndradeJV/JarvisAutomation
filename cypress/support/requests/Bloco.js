/// <reference types="cypress" />

const payloadGetBloco = require("../../fixtures/api/Bloco/getBloco.json");
const payloadPutBloco = require("../../fixtures/api/Bloco/putBloco.json");


class Bloco {
    getBloco(){
        return cy.request({
           method: 'GET',
            url: `Bloco/${payloadGetBloco.retornoSucesso.id}`,
            failOnStatusCode: false
        });
    }

    getBlocoERROR(){
        return cy.request({
           method: 'GET',
            url: `Bloco/${payloadGetBloco.retornoErro.id}`,
            failOnStatusCode: false
        });
    }
}


export default new Bloco;