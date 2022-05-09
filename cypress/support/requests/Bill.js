/// <reference types="cypress" />


class Bill {
    // Requisição no endpoint Bill
    getList(cnpj){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env("apiGTM")}/bill/list/${cnpj}`,
            failOnStatusCode: false,
        });
    }
}


export default new Bill;