import ApplicationsPage from "../../support/views/pages/ApplicationsPage";
import ProgramSelectionPage from "../../support/views/pages/ProgramSelectionPage";
import FinancialCyclePage from "../../support/views/pages/FinancialCyclePage";
import TaxTransactionReportPage from "../../support/views/pages/TaxTransactionReportPage";
import Helpers from "../../support/Helpers";

const payload = require("../../fixtures/web/novaRegraTaxaTransacional.json");


describe("Nova Regra Taxa Transacional - US86189", () => {
    before(() => {
        cy.visit('/');
    });


    it("Login no taxa transacional", () => {
        cy.loginDefaultAdm();
        Helpers.waitForTime(2);
    });

    it("Ir ao Taxa Transacional", () => {
        ApplicationsPage.accessGTM();
        // Validar se chegou na página
        ProgramSelectionPage.goToTransactionFee();
    });

    it("Ir ao processamento de taxa", () => {
        FinancialCyclePage.clickButtonTaxTransactionalProcess();
        // Validar se chegou na página
    });

    it("Processar taxa transacional", () => {
        TaxTransactionReportPage.writeInitialDate(payload.dataInicial);
        TaxTransactionReportPage.writeFinalDate(payload.dataFinal);
        TaxTransactionReportPage.writeCnpj(payload.cnpj.cnpjDois.matriz);
    });
}) 