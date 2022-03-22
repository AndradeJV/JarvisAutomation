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
}


export default new FinancialCycle;