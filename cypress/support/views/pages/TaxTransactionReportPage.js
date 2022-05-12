/// <reference types="cypress" />


class TaxTransactionReportPage {
    // Clicar no botão processar
    clickButtonProcess(){
        cy.get(".process-grid__button > button").click();
    }
    
    // Escrever data inicial
    writeInitialDate(date){
        cy.get("input[formcontrolname='startDate']").type(date);
    }

    // Escrever data final
    writeFinalDate(date){
        cy.get("input[formcontrolname='endDate']").type(date);
    }
    
    // Escrever CNPJ
    writeCnpj(cnpj){
        cy.get("input[placeholder='00.000.00/0000-00']").type(cnpj);
    }

    // Validar botões de download
    validateButtonsDownload(){
        let count = 0;

        
    }
}


export default new TaxTransactionReportPage;