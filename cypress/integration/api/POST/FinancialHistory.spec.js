import FinancialHistory from "../../../support/requests/FinancialHistory";
const payloadTransactions = require("../../../fixtures/api/FinancialHistory/postTransactions.json");


describe("POST - Endpoint Financial History",  () => {
    it("Validar retorno sucesso - Transactions", () => {
        FinancialHistory.postTransactions(payloadTransactions.envioSucesso.sendBody).should(response => {
            if(response.status !== payloadTransactions.envioSucesso.statusCode)
                return

            else {
                expect(response.status).to.equal(payloadTransactions.envioSucesso.statusCode);
                expect(response.body.Start).to.equal(payloadTransactions.envioSucesso.responseBody.Start);

            }
        });
    })
});