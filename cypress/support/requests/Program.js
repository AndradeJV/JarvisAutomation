/// <reference types="cypress" />


class Program {
    getProgram(){
        return cy.request({
            method: 'GET',
            url: "program/list",
            failOnStatusCode: false
        });
    }
}


export default new Program;