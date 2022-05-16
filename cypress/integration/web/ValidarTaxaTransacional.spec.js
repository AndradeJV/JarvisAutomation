import ApplicationsPage from "../../support/views/pages/ApplicationsPage";
import ProgramSelection from "../../support/views/pages/ProgramSelectionPage";

const payload = require("../../fixtures/web/validarTaxaTransacional.json");


describe("Validar Tela Inicial Taxa Transacional", () => {
    it("Logar na plataforma", () => {
        cy.visit('/');
        cy.loginDefaultAdm();
    });

    it("Acessar taxa transacional",  () => {
        ApplicationsPage.accessGTM();
        ProgramSelection.goToTransactionFee();
    });

    it("Validar taxa transacional", () => {
        cy.validationMessageVisible(".padding-left-40 > .title", payload.textoValidacaoTxTransacional);
    });
})