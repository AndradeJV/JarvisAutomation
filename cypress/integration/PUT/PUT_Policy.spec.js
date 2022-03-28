import Policy from "../../requests/Policy";
const payloadTaxTransaction = require("../../fixtures/Policy/putTaxTransaction.json");


describe("PUT - Endpoint Tax Transaction", () => {
    it("Validar retorno - Tax Transaction", () => {
        Policy.putTaxTransaction(payloadTaxTransaction.envioSucesso.body).should(response => {
            expect(response.status).to.equal(payloadTaxTransaction.envioSucesso.respostaStatusCodeSuccess);
        });
    });
})