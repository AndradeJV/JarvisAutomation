/// <reference types="cypress" />
const payload = require("../../fixtures/Bill/getBill.json");



const getList = () => {
    return cy.request({
        method: 'GET',
        url: `bill/list/${payload.getList.cnpjNaoEncontrado.cnpj}`,
        failOnStatusCode: false,
    });
}

const getListNotFound = () => {
    return cy.request({
        method: 'GET',
        url: `bill/list/${payload.getList.cnpjNaoEncontrado}`,
        failOnStatusCode: false,
    });
}

const getLatePaymentList = () => {
    return cy.request({
        method: 'GET',
        url: 'approvalmatrix/list',
        failOnStatusCode: false
    });
}

const getUnpaidList = (cnpj) => {
    return cy.request({
        method: 'GET',
        url: 'approvalmatrix/list',
        failOnStatusCode: false
    });
}

const getOpenList = (cnpj) => {
    return cy.request({
        method: 'GET',
        url: 'approvalmatrix/list',
        failOnStatusCode: false
    });
}


export default {
    getList,
    getListNotFound,
    getLatePaymentList,
    getUnpaidList,
    getOpenList
};