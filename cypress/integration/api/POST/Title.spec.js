import Title from "../../../support/requests/Title";

const payloadFindTitle = require("../../../fixtures/api/Title/postFindTitle.json");
const payloadExportTitle = require("../../../fixtures/api/Title/postExportTitle.json");


describe("POST - Endpoint Title", () => {
    it("Validar retorno - Find Title", () => {
        Title.postFindTitle(payloadFindTitle.envioSucesso.envioBody).should(response => {
            expect(response.status).to.equal(payloadFindTitle.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadFindTitle.envioSucesso.responseBody.Start);
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