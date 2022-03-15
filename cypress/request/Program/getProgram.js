/// <reference types="cypress" />


const getProgram = () => {
    return cy.request({
        method: 'GET',
        url: "program/list",
        failOnStatusCode: false
    });
}


export default { getProgram };