/// <reference types="cypress" />


class TaxTransactionMailManagement {
    postFind(payload){
        return cy.request({
            method: 'POST',
            url: "mailmanagement/find",
            failOnStatusCode: false,
            body: payload
        });
    }

    // Não precisa ser automatizado
    postSend(payload){
        return cy.request({
            method: 'POST',
            url: "",
            failOnStatusCode: false,
            body: payload
        })
    }
}


export default new TaxTransactionMailManagement;