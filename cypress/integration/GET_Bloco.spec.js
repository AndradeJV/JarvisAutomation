import Bloco from "../requests/Bloco";
const payload = require("../fixtures/Bloco/getBloco.json");


describe("GET - Endpoint Bloco", () => {
    it('Validar retorno API ',  () => {
        Bloco.getBloco().should(response => {
            expect(response.status).to.equal(200);
            expect(response.body.Nome).to.equal(payload.retornoSucesso.Nome);
            expect(response.body.Titulo1).to.equal(payload.retornoSucesso.Titulo1);
            expect(response.body.Titulo2).to.equal(payload.retornoSucesso.Titulo2);
            expect(response.body.Temas).to.equal(payload.retornoSucesso.Temas);
        });
    });

    it("Validar retorno erro API", () => {
       Bloco.getBlocoERROR().should(response => {
           expect(response.status).to.equal(400);
           expect(response.body.Message).to.equal(payload.retornoErro.Message);
           expect(response.body.MessageDetail).to.equal(payload.retornoErro.MessageDetail);
       });
    });
})