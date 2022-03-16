import Store from "../requests/Store";
const payload = require("../fixtures/Store/getStore.json");


describe("GET - Endpoint Store", () => {
    it("Validar requisição - Nova", () => {
        Store.getStore().should(response => {
            expect(response.body[0].Id).to.equal(payload.Nova.Id);
            expect(response.body[0].Name).to.equal(payload.Nova.Name);
        });
    });

    it("Validar requisição - Cliente Base", () => {
        Store.getStore().should(response => {
           expect(response.body[1].Id).to.equal(payload.clienteBase.Id);
           expect(response.body[1].Name).to.equal(payload.clienteBase.Name);
       });
    });

    it("Validar requisição - Termo Pendente", () => {
        Store.getStore().should(response => {
           expect(response.body[2].Id).to.equal(payload.termoPendente.Id);
           expect(response.body[2].Name).to.equal(payload.termoPendente.Name);
       });
    });

    it("Validar requisição - Termo não habilitado", () => {
        Store.getStore().should(response => {
            expect(response.body[3].Id).to.equal(payload.termoNaoHabilitado.Id);
            expect(response.body[3].Name).to.equal(payload.termoNaoHabilitado.Name);
        });
    });
})