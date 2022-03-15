import * as getApprovalMatrix from "../request/ApprovalMatrix/getList";


describe("GET - Endpoint ApprovalMatrix", () => {
    it("Validar status code", () => {
        getApprovalMatrix.getList().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Validar texto status code", () => {
        getApprovalMatrix.getList().should(response => {
            expect(response.statusText).to.equal("OK");
        });
    });
});