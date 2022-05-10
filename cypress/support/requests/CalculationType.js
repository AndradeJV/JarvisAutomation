/// <reference types="cypress" />


class CalculationType {
    getList(){
        return cy.request({
           method: 'GET',
           url: `${Cypress.env("apiGTM")}/calculationtype/list`,
            failOnStatusCode: false
        });
    }
}


export default new CalculationType;