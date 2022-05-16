import BusinessManagement from "../../../support/requests/BusinnesManagement";


describe("POST - Endpoint Business Management", () => {
    it("Find tax transactional transactional", () => {
        BusinessManagement.postFindTaxTransactional().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Update Tax Transactional", () => {
        BusinessManagement.postUpdateTaxTransactional().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Find by fiscal number", () => {
        BusinessManagement.postFindByFiscalNumber().should(response => {
            expect(response.status).to.equal(200);
        });
    });
})