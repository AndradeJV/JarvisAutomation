import * as postBusinessManagement from "../request/BusinessManagement/postBusinnesManagement";
const payload = require("../fixtures/BusinessManagement/postBusinessManagement.json");


describe("POST - Endpoint Business Management", () => {
    /*
    it("Fill tax transactional transactional", () => {
        postBusinessManagement.postFillTaxTransactional().should(response => {            
            expect(response.status).to.equal(200);
        });
    });
    */

    it("Find tax transactional transactional", () => {
        postBusinessManagement.postFindTaxTransactional().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Update Tax Transactional", () => {
        postBusinessManagement.postUpdateTaxTransactional().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Fill More Clients", () => {
        postBusinessManagement.postFillMoreClients().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Find by fiscal number", () => {
        postBusinessManagement.postFindByFiscalNumber().should(response => {
            expect(response.status).to.equal(200);
        });
    });
})