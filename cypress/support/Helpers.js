/// <reference types="cypress" />


class Helpers {
    // Espera em segundos para realizar uma ação
    waitForTime(time){
        const result = time * 1000

        cy.wait(result);
    }
}


export default new Helpers;