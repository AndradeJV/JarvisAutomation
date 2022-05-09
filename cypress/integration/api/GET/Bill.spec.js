import Bill from "../../../support/requests/Bill";
const payload = require("../../../fixtures/api/Bill/getBill.json");


describe("GET - Endpoint Bill", () => {
    it("Validar CNPJ - Mensagem não encontrado", () => {
        Bill.getList(payload.getList.cnpjNaoEncontrado.cnpj).should(response => {
            expect(response.status).to.equal(404);
            expect(response.body).to.equal(payload.getList.cnpjNaoEncontrado.mensagem);
        });
    });
})