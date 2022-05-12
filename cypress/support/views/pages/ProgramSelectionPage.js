/// <reference types="cypress" />


class ProgramSelectionPage {
    // Ir para Mais Clientes
    goToMoreClients(){
        cy.get("div:nth-child(2) > div > div > button").click();
    }

    // Ir para o taxa transacional
    goToTransactionFee(){
        cy.get("div:nth-child(3) > div > div > button").click();
    }
}


export default new ProgramSelectionPage;