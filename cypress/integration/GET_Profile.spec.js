import * as profile from "../request/Profile/getProfile";


describe("GET - Endpoint Profile", () => {
    it("Validar status code", () => {
        profile.getProfile().should(response => {
            expect(response.status).to.equal(200);
        });
    });
})