/// <reference types="cypress" />


class Profile {
    getProfile(){
        return cy.request({
            method: 'GET',
            url: "profile/list",
            failOnStatusCode: false
        });
    }
}


export default new Profile;