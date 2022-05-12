/// <reference types="cypress" />


class AddreseeManagementPage {
    // Clicar no botão de pesquisa
    clickButtonSearchCnpj(){
        cy.get("#search-container > div > button").click();
    }

    // Clicar no botão de upload de arquivos
    clickButtonUpload(){
        cy.get("form > div > button").click();
    }

    // Clicar no primeiro botão de ação
    clickButtonFirstAction(){
        cy.get("#button_icon_ViewDetails_0").click();
    }
    
    // Pesquisar cnpj
    searchCnpj(cnpj){
        cy.get('input[autocomplete="off"]').type(cnpj);
    }
}


export default new AddreseeManagementPage;