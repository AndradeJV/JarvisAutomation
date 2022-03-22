import BusinessManagement from "../requests/BusinnesManagement";
import Helpers from "../support/Helpers";

const payload = require("../fixtures/BusinessManagement/postBusinessManagement.json");


describe("POST - Endpoint Business Management", () => {
    it("Find tax transactional transactional", () => {
        BusinessManagement.postFindTaxTransactional().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Update Tax Transactional", () => {
        BusinessManagement.postUpdateTaxTransactional().should(response => {
            Helpers.waitForTime(5);
            expect(response.status).to.equal(200);
        });
    });

    it("Fill More Clients", () => {
        BusinessManagement.postFillMoreClients().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Find by fiscal number", () => {
        BusinessManagement.postFindByFiscalNumber().should(response => {
            expect(response.status).to.equal(200);
        });
    });
})