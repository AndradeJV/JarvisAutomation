import Title from "../requests/Title";

const payloadFindTitle = require("../fixtures/Title/postFindTitle.json");
const payloadExportTitle = require("../fixtures/Title/postExportTitle.json");


describe("POST - Endpoint Title", () => {
    it("Validar retorno - Find Title", () => {
        Title.postFindTitle(payloadFindTitle.envioSucesso.envioBody).should(response => {
            expect(response.status).to.equal(payloadFindTitle.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadFindTitle.envioSucesso.responseBody.Start);
            expect(response.body.TaxTransactionalTitle[0].Status).to.equal(payloadFindTitle.envioSucesso.responseBody.TaxTransactionalTitle[0].Status);
        });
    });

    it("Validar retorno - Export Title", () => {
        Title.postExportTitle(payloadExportTitle.envioSucesso.envioBody).should(response => {
            if(response.status === payloadExportTitle.envioSucesso.statusCode){
                expect(response.body.Type).to.equal(payloadExportTitle.envioSucesso.responseBody.Type);
                expect(response.body.Exported).to.equal(payloadExportTitle.envioSucesso.responseBody.Exported);
            }
        });
    });
})