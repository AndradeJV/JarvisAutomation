/// <reference types="cypress" />
const payload = require("../../fixtures/api/BusinessManagement/postBusinessManagement.json");


class BusinessManagement {
    postFindTaxTransactional(){
        return cy.request({
            method: 'POST',
            url: "businessmanagement/findtaxtransactional",
            failOnStatusCode: false,
            body: payload.findTaxTransactional
        });
    }

    postUpdateTaxTransactional(){
        return cy.request({
            method: 'POST',
            url: "businessmanagement/updatetaxtransactional",
            failOnStatusCode: false,
            body: payload.updateTaxTransactional
        });
    }

    postFillMoreClients(){
        return cy.request({
            method: 'POST',
            url: "businessmanagement/fillmoreclients",
            failOnStatusCode: false,
            body: payload
        });
    }

    postFindByFiscalNumber(){
        return cy.request({
            method: 'POST',
            url: "businessmanagement/find-by-fiscalnumber",
            failOnStatusCode: false,
            body: payload.findByFiscalNumber.parameter
        });
    }
}


export default new BusinessManagement;