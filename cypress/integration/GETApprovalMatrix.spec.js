import * as list from "../request/ApprovalMatrix/getList";


describe("Get client - Endpoint ApprovalMatrix", () => {
    it("Validar status code", () => {
        list.getList().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Validar texto status code", () => {
        list.getList().should(response => {
            expect(response.statusText).to.equal("OK");
        });
    });
});