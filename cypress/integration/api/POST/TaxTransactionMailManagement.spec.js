import TaxTransactionMailManagement from "../../../support/requests/TaxTransactionMailManagement";

const payloadFind = require("../../../fixtures/api/TaxTransactionMailManagement/postFind.json");


describe("POST - Endpoint Tax Transaction Mail Management", () => {
    it("Validar retorno - Find", () => {
        TaxTransactionMailManagement.postFind(payloadFind.envioSucesso.body).should(response => {
            expect(response.status).to.equal(payloadFind.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadFind.envioSucesso.res.Start);
            expect(response.body.TotalPerPages).to.equal(payloadFind.envioSucesso.res.TotalPerPages);
        });
    });
})