/// <reference types="cypress" />


class Helpers {
    // clicar em algum elemento
    clickAnyElement(css){
        cy.get(css).click();
    }
    
    // Espera em segundos para realizar uma ação
    waitForTime(time){
        const result = time * 1000

        cy.wait(result);
    }

    // Validar campo pelo 'have.value'
    validationCSSPerValue(css, value){
        cy.get(css).should('have.value', value);
    }

    // Validar se a mensagem está visível
    validationMessageVisible(css, msg){
        cy.contains(css, msg).should('be.visible');
        this.waitForTime(2);
    }

    // Aguardar modal de carregamento desaparecer
    waitLoadingModal(){
        const element = cy.get(".brand.with-layout > div > div");
        let count = 0;

        while(element === true || count == 30){
            this.waitForTime(1);
            
            count += 1;

            return;
        }
    }

    

    // Esperar elemento aparecer em tela
    expectConditionsCss(css){
        const element = cy.get(css);
        count = 0;

        while(element === true || count == 30){
            this.waitForTime(1);
            
            count += 1;

            return;
        }
    }
}


export default new Helpers;