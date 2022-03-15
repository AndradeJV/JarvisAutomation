/// <reference types="cypress" />


const getProfile = () => {
    return cy.request({
        method: 'GET',
        url: "profile/list",
        failOnStatusCode: false
    });
}


export default { getProfile };