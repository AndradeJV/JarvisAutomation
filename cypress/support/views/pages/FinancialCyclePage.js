/// <reference types="cypress" />


class FinancialCycle {
    // Clicar no botão "Processar Taxa Transacional"
    clickButtonTaxTransactionalProcess(){
        cy.get(".process-tax-report__button > button").click();
    }

    // Clicar no botão "Bloquear"
    clickButtonBlock(){
        cy.get(".financial-margin > div:nth-child(1) > div:nth-child(2) > button").click();
    }

    // Clicar no checkbox de selecionar todos
    clickSelectAllCheckbox(){
        cy.get(".mat-header-cell.cdk-column-selection.mat-column-selection.ng-star-inserted label > div").click();
    }

    // Clicar no botão de download da planilha
    clickButtonDownloadXLSX(){
        cy.get(".financial-margin > div:nth-child(2) > button:nth-child(3)").click();
    }

    // pesquisar CNPJ
    searchCNPJ(cnpj){
        cy.get("input[type=text]").type(cnpj);
    }
}


export default new FinancialCycle;