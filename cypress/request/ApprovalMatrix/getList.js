/// <reference types="cypress" />


const getList = () => {
    return cy.request({
        method: 'GET',
        url: 'approvalmatrix/list',
        failOnStatusCode: false
    });
}


export default {
    getList
};