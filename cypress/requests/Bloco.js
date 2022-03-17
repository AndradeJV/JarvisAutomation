/// <reference types="cypress" />

const payloadGetBloco = require("../fixtures/Bloco/getBloco.json");
const payloadPutBloco = require("../fixtures/Bloco/putBloco.json");


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