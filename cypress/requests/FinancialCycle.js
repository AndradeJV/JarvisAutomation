/// <reference types="cypress" />


class FinancialCycle {
    postFind(payload){
        return cy.request({
            method: 'POST',
            url: "financialcycle/find",
            failOnStatusCode: false,
            body: payload
        });
    }

    postExport(){
        return cy.request({
            method: 'POST',
            url: "financialcycle/export",
            failOnStatusCode: false,
        });
    }

    postLocked(payload){
        return cy.request({
            method: 'POST',
            url: "financialcycle/locked",
            failOnStatusCode: false,
            body: payload
        });
    }
}


export default new FinancialCycle;