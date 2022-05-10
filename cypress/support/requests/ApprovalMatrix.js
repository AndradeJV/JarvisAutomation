/// <reference types="cypress" />


class ApprovalMatrix {
    getList(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env("apiGTM")}/approvalmatrix/list`,
            failOnStatusCode: false
        });
    }
}

export default new ApprovalMatrix;