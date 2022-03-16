/// <reference types="cypress" />
const payload = require("../fixtures/Bill/getBill.json");

class Bill {
    getList(){
        return cy.request({
            method: 'GET',
            url: `bill/list/${payload.getList.cnpjNaoEncontrado.cnpj}`,
            failOnStatusCode: false,
        });
    }

    getListNotFound(){
        return cy.request({
            method: 'GET',
            url: `bill/list/${payload.getList.cnpjNaoEncontrado}`,
            failOnStatusCode: false,
        });
    }

    getLatePaymentList(){
        return cy.request({
            method: 'GET',
            url: 'approvalmatrix/list',
            failOnStatusCode: false
        });
    }

    getUnpaindList(cnpj){
        return cy.request({
            method: 'GET',
            url: 'approvalmatrix/list',
            failOnStatusCode: false
        });
    }

    getOpenList(cnpj){
        return cy.request({
            method: 'GET',
            url: 'approvalmatrix/list',
            failOnStatusCode: false
        });
    }
}


export default new Bill;