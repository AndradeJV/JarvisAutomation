/// <reference types="cypress" />


class Store {
    getStore(){
        return cy.request({
            method: 'GET',
            url: 'store/storebase',
            failOnStatusCode: false
        });
    }
}


export default new Store;