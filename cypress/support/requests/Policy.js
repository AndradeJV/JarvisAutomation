/// <reference types="cypress" />


class Policy {
    getListDetail(endpoint){
        return cy.request({
           method: 'GET',
           url: `policy/listdetail/${endpoint}`,
           failOnStatusCode: false
        });
    }

    getKeyValueList(){
        return cy.request({
            method: 'GET',
            url: "policy/keyvaluelist",
            failOnStatusCode: false
        });
    }

    getTaxTransaction(endpoint){
        return cy.request({
            method: 'GET',
            url: `policy/tax-transaction/${endpoint}`,
            failOnStatusCode: false
        });
    }

    postFormulaValidator(payload){
        return cy.request({
            method: 'POST',
            url: "policy/formulavalidator",
            failOnStatusCode: false,
            body: payload
        })
    }

    postPolicy(payload){
        return cy.request({
            method: 'POST',
            url: "policy",
            failOnStatusCode: false,
            body: payload
        });
    }

    postImport(){
        return cy.request({
            method: 'POST',
            url: "policy/import",
            failOnStatusCode: false
        });
    }

    postExport(payload){
        return cy.request({
            method: 'POST',
            url: "policy/export",
            failOnStatusCode: false,
            body: payload
        });
    }

    putTaxTransaction(payload){
        return cy.request({
            method: 'PUT',
            url: "policy/tax-transaction",
            failOnStatusCode: false,
            body: payload
        })
    }
}


export default new Policy;