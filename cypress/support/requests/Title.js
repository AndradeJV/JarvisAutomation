/// <reference types="cypress" />


class Title {
    postFindTitle(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env("apiGTM")}/title/find-title`,
            failOnStatusCode: false,
            body: payload
        })
    }

    postExportTitle(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env("apiGTM")}/title/export-title`,
            failOnStatusCode: false,
            body: payload
        });
    }
}


export default new Title;