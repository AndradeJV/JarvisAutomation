import * as getBill from "../request/Bill/getList";
const payload = require("../fixtures/Bill/getBill.json");



describe("GET - Endpoint Bill", () => {
    it("Validar CNPJ - Mensagem não encontrado", () => {
        getBill.getListNotFound().should(response => {
            expect(response.status).to.equal(404);
            expect(response.body).to.equal(payload.getList.cnpjNaoEncontrado.mensagem);
        });
    });
})