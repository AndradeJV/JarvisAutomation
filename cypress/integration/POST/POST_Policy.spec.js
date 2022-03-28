import Policy from "../../requests/Policy";

const payloadFormulaValidator = require("../../fixtures/Policy/postFormulaValidator.json");
const payloadPolicy = require("../../fixtures/Policy/postPolicy.json");
const payloadImport = require("../../fixtures/Policy/postImport.json");
const payloadExport = require("../../fixtures/Policy/postExport.json");


describe("POST - Endpoint Policy", () => {
    it("Validar retorno - Formula validator", () => {
        Policy.postFormulaValidator(payloadFormulaValidator.body).should(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal(payloadFormulaValidator.responseBody);
        });
    });


    it("Validar retorno - Policy", () => {
        Policy.postPolicy(payloadPolicy.envioSucesso.body).should(response => {
            expect(response.status).to.equal(payloadPolicy.envioSucesso.statusCode);
            expect(response.body.Start).to.equal(payloadPolicy.envioSucesso.Start);
            expect(response.body.Policies[0].Unit).to.equal(payloadPolicy.envioSucesso.response.Unit);
        });
    });

    it("Validar retorno - Import", () => {
        Policy.postImport().should(response => {
            expect(response.status).to.equal(payloadImport.responseStatus);
        });
    });

    it("Validar retorno - Export", () => {
        Policy.postExport(payloadExport.envioSucesso.body).should(response => {
            expect(response.status).to.equal(payloadExport.envioSucesso.statusResponse);
        });
    });
})