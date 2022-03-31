import FinancialCycle from "../../requests/FinancialCycle";

const payloadFind = require("../../fixtures/FinancialCycle/postFind.json");
const payloadExport = require("../../fixtures/FinancialCycle/postExport.json");
const payloadLocked = require("../../fixtures/FinancialCycle/postLocked.json");


describe("POST - Endpoint Financial Cycle", () => {
    it("Validar retorno - Find",  () => {
        FinancialCycle.postFind(payloadFind.envioSucesso.body).should(response => {
            expect(response.status).to.equal(payloadFind.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadFind.envioSucesso.responseBody.Start);
            expect(response.body.TotalPerPages).to.equal(payloadFind.envioSucesso.responseBody.TotalPerPages);
        });
    });

    it("Validar retorno - Export", () => {
        FinancialCycle.postExport().should(response => {
            expect(response.status).to.equal(payloadExport.envioSucesso.statusCode);
            expect(response.headers.pragma).to.equal(payloadExport.envioSucesso.responseHeaders.pragma);
            expect(response.body.TypeDescription).to.equal(payloadExport.envioSucesso.responseBody.TypeDescription);
        });
    });

    it("Validar retorno - Locked", () => {
        FinancialCycle.postLocked(payloadLocked.envioSucesso.sendBody).should(response => {
            expect(response.status).to.equal(payloadExport.envioSucesso.statusCode);
            expect(response.headers.pragma).to.equal(payloadLocked.envioSucesso.responseHeaders.pragma);
        });
    });
})