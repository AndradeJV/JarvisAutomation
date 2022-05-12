import LoginPage from "../../support/views/pages/LoginPage";
import Helpers from "../../support/Helpers";

const payload = require("../../fixtures/web/login.json");


describe("Testes login", () => {
    beforeEach(() => {
        cy.visit('/');
    });


    it("Login sucesso", () => {
        cy.loginDefaultAdm();
    });

    it("Login sem usuário", () => {
        LoginPage.writePassword(payload.loginSemUsuario.password);
        LoginPage.clickButtonLogin();
        Helpers.validationMessageVisible(payload.cssMensagemErro, payload.mensagemErro);
    });

    it("Login sem senha", () => {
        LoginPage.writeUser(payload.loginSemSenha.user);
        LoginPage.clickButtonLogin();
        Helpers.validationMessageVisible(payload.cssMensagemErro, payload.mensagemErro);
    });

    it("Login sem inserção de dados", () => {
        LoginPage.clickButtonLogin();
        Helpers.validationMessageVisible(payload.cssMensagemErro, payload.mensagemErro);
    });
});