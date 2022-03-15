/// <reference types="cypress" />


const getStore = () => {
    return cy.request({
        method: 'GET',
        url: 'store/storebase',
        failOnStatusCode: false
    });
}


export default {
    getStore
}