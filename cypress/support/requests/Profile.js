/// <reference types="cypress" />


class Profile {
    getProfile(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env("apiGTM")}/profile/list`,
            failOnStatusCode: false
        });
    }
}


export default new Profile;