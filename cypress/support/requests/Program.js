/// <reference types="cypress" />


class Program {
    getProgram(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env("apiGTM")}/program/list`,
            failOnStatusCode: false
        });
    }
}


export default new Program;