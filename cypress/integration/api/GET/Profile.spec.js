import Profile from "../../../support/requests/Profile";


describe("GET - Endpoint Profile", () => {
    it("Validar status code", () => {
        Profile.getProfile().should(response => {
            expect(response.status).to.equal(200);
        });
    });
})