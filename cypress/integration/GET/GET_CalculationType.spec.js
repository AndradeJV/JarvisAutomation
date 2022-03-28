import CalculationType from "../../requests/CalculationType";


describe("GET - Endpoint Calculation Type", () =>{
    it('Validar resposta body',  () => {
        CalculationType.getList().should(respnse => {
           expect(respnse.status).to.equal(200);
        });
    });
})