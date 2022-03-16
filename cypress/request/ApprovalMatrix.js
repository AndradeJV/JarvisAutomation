/// <reference types="cypress" />


class ApprovalMatrix {
    getList(){
        return cy.request({
            method: 'GET',
            url: 'approvalmatrix/list',
            failOnStatusCode: false
        });
    }
}

export default new ApprovalMatrix;