/// <reference types="cypress" />


class Store {
    getStore(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env("apiGTM")}/store/storebase`,
            failOnStatusCode: false
        });
    }
}


export default new Store;