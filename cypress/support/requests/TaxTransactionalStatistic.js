/// <reference types="cypress" />


class TaxTransactionalStatistic {
    postFindRanked(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env("apiGTM")}/TaxTransactionalStatistic/findranked`,
            failOnStatusCode: false,
            body: payload
        });
    }

    postFindCalculate(paylaod){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env("apiGTM")}/TaxTransactionalStatistic/findcalculate`,
            failOnStatusCode: false,
            body: paylaod
        });
    }
}


export default new TaxTransactionalStatistic;