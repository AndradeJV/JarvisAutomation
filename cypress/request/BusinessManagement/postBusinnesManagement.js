/// <reference types="cypress" />
const payload = require("../../fixtures/BusinessManagement/postBusinessManagement.json");



// Teste no endpoint - Find Tax Transactional
const postFindTaxTransactional = () => {
    return cy.request({
        method: 'POST',
        url: "businessmanagement/findtaxtransactional",
        failOnStatusCode: false,
        body: payload.findTaxTransactional
    });
}

// Teste no endpoint - Update Tax Transactional
const postUpdateTaxTransactional = () => {
    return cy.request({
        method: 'POST',
        url: "businessmanagement/updatetaxtransactional",
        failOnStatusCode: false,
        body: payload.updateTaxTransactional
    });
}

const postFillMoreClients = () => {
    return cy.request({
        method: 'POST',
        url: "businessmanagement/fillmoreclients",
        failOnStatusCode: false,
        body: payload
    });
}

const postFindByFiscalNumber = () => {
    return cy.request({
        method: 'POST',
        url: "businessmanagement/find-by-fiscalnumber",
        failOnStatusCode: false,
        body: payload.findByFiscalNumber.parameter
    });
}

export default {
    postFindTaxTransactional,
    postUpdateTaxTransactional,
    postFillMoreClients,
    postFindByFiscalNumber
};