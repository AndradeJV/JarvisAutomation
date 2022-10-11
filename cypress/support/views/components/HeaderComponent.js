/// <reference types="cypress" />


class HeaderComponent {
    // Acessar faturamento
    accessRevenues(){
        cy.get("menu-bar:nth-child(1) > div > a").click();  
    }

    // Acessar financeiro
    accessFinancial(){
        cy.get("menu-bar:nth-child(2) > div > a").click();
    }

    // Acessar ciclos (dentro de histórico)
    accessCycles(){
        cy.get("menu-bar:nth-child(5) > div a").click();
        cy.get("#cdk-overlay-41 > div > div > button:nth-child(1)").click();
    }

    // Acessar estatísticas (dentro de histórico)
    accessStatistics(){
        cy.get("menu-bar:nth-child(5) > div a").click();
        cy.get("#cdk-overlay-41 > div > div > button:nth-child(2)").click();
    }

    // Acessar campanhas (dentro de parametrização)
    accessCampaigns(){
        cy.get("menu-bar:nth-child(5) > div a").click();
        cy.get("#cdk-overlay-40 > div > div > button:nth-child(1)").click();
    }

    // Acessar gestão de empresas (dentro de parametrização)
    accessBusinessManagement(){
        cy.get("menu-bar:nth-child(4) > div a").click();
        cy.get("#cdk-overlay-40 > div > div > button:nth-child(2)").click();
    }

    // Acessar gestão de emails (dentro de parametrização)
    accessEMailsManagement(){
        cy.get("menu-bar:nth-child(4) > div a").click();
        cy.get("#cdk-overlay-40 > div > div > button:nth-child(3)").click();
    }

    // Acessar gestão de destinatários (dentro de parametrização)
    accessRecipientManagement(){
        cy.get("menu-bar:nth-child(4) > div a").click();
        cy.get("#cdk-overlay-40 > div > div > button:nth-child(4)").click();
    }

    // Acessar políticas (dentro de parametrização)
    accessPolitics(){
        cy.get("menu-bar:nth-child(4) > div a").click();
        cy.get("#cdk-overlay-40 > div > div > button:nth-child(5)").click();
    }

    // Acessar títulos
    accessTitles(){
        cy.get("menu-bar:nth-child(5) > div > a").click();
    }

    // Ver notificações
    seeNotifications(){
        cy.get("#button-notification").click();
    }
}


export default new HeaderComponent;