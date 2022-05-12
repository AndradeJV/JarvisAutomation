/// <reference types="cypress" />


class ApplicationsPage {
    // Acessar "Programa de Suporte ao Diagnóstico"
    accessPSD(){
        cy.get("div:nth-child(1) > mat-card .header-text span").click();
    }
    
    // Acessar "Security Container System"
    accessSCS(){
        cy.get("div:nth-child(2) > mat-card .header-text span").click();
    }

    // Acessar "Monitoring IDP"
    accessMON(){
        cy.get("div:nth-child(3) > mat-card .header-text span").click();
    }
    
    // Acessar "Visibility Center InterPlayers"
    accessVCI(){
        cy.get("div:nth-child(4) > mat-card .header-text span").click();
    }
    
    // Acessar "Financial Statement IDP"
    accessFST(){
        cy.get("div:nth-child(5) > mat-card .header-text span").click();
    }
    
    // Acessar "Go To Market"
    accessGTM(){
        cy.get("div:nth-child(6) > mat-card .header-text span").click();
    }
    
    // Acessar "Início de Tratamento"
    accessInicioTratamento(){
        cy.get("div:nth-child(7) > mat-card .header-text span").click();
    }
    
    // Acessar "Relatórios Dinâmicos"
    accessRSM(){
        cy.get("div:nth-child(8) > mat-card .header-text span").click();
    }
}


export default new ApplicationsPage;