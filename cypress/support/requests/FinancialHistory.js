/// <reference types="cypress" />

/*
* Endpoint -> financial/history/
* */


class FinancialHistory {
    postTransactions(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env("apiGTM")}/financial/history/transactions`,
            failOnStatusCode: false,
            body: payload
        });
    }
}


export default new FinancialHistory;