/// <reference types="cypress" />


class LoginPage {
    // Clicar no botão 'Loging'
    clickButtonLogin(){
        cy.get("#button-login").click();
    }

    // Clicar no link 'Esqueceu a senha?'
    clickLinkForgetPassword(){
        cy.get("#button-forgot-password > span").click();
    }
    
    // Escrever o nome do usuário
    writeUser(user){
        cy.get("#mat-input-0").type(user);
    }

    // Escrever senha
    writePassword(password){
        cy.get("#mat-input-1").type(password);
    }
}


export default new LoginPage;