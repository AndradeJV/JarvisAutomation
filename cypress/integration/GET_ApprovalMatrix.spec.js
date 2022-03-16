import ApprovalMatrix from "../requests/ApprovalMatrix";


describe("GET - Endpoint ApprovalMatrix", () => {
    it("Validar status code", () => {
        ApprovalMatrix.getList().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Validar texto status code", () => {
        ApprovalMatrix.getList().should(response => {
            expect(response.statusText).to.equal("OK");
        });
    });
});