import Policy from "../../../support/requests/Policy";

const payloadListDetail = require("../../../fixtures/api/Policy/getListDetail.json");
const payloadKeyValueList = require("../../../fixtures/api/Policy/getKeyValueList.json");
const payloadTaxTransaction = require("../../../fixtures/api/Policy/getTaxTransaction.json");


describe("GET - Endpoint Policy", () => {
    it("Validar retorno - Detail", () => {
        Policy.getListDetail(payloadListDetail.retornoExito.policyId).should(response => {
            expect(response.status).to.equal(payloadListDetail.retornoExito.statusCode);
        });
    });

    it('Validar retorno - Key Value List', () => {
        Policy.getKeyValueList().should(response => {
            expect(response.status).to.equal(payloadKeyValueList.naoEncontrado.codigo);
            expect(response.body).to.equal(payloadKeyValueList.naoEncontrado.message);
        });
    });

    it("Validar retorno - Tax Transaction", () => {
        Policy.getTaxTransaction(payloadTaxTransaction.sucesso.policyKey).should(response => {
            expect(response.status).to.equal(payloadTaxTransaction.sucesso.statusCode);
            expect(response.body.BaseTax).to.equal(payloadTaxTransaction.sucesso.retorno.BaseTax)
            expect(response.body.Unit).to.equal(payloadTaxTransaction.sucesso.retorno.Unit);
        });
    });
})