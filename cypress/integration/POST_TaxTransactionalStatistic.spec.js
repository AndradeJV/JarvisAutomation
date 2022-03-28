import TaxTransactionalStatistic from "../requests/TaxTransactionalStatistic";

const payloadFindRanked = require("../fixtures/TaxTransactionalStatistic/postFindRanked.json");
const payloadFindCalculate = require("../fixtures/TaxTransactionalStatistic/postFndCalculate.json");


describe("POST - Endpoint Tax Transactional Static", () => {
    it("Validar retorno - Find Ranked", () => {
       TaxTransactionalStatistic.postFindRanked(payloadFindRanked.envioSucesso.sendBody).should(response => {
            expect(response.status).to.equal(payloadFindRanked.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadFindRanked.envioSucesso.responseBody.Start);
            expect(response.body.TotalPerPages).to.equal(payloadFindRanked.envioSucesso.responseBody.TotalPerPages);
       });
    });

    it("Validar retorno - Find Calculate", () => {
        TaxTransactionalStatistic.postFindCalculate(payloadFindCalculate.envioSucesso.sendBody).should(response => {
            if(response.status !== payloadFindCalculate.envioSucesso.statusCode)
                return

            else {
                expect(response.body.TotalFiscalNumberNew).to.equal(payloadFindCalculate.envioSucesso.responseBody.TotalFiscalNumberNew);
                expect(response.body.TotalHeadOfficeInvoiced).to.equal(payloadFindCalculate.envioSucesso.responseBody.TotalHeadOfficeInvoiced);

            }
        });
    });
})