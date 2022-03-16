import Program from "../requests/Program";
const payload = require("../fixtures/Program/getProgram.json");



describe("GET - Endpoint Program", () => {
    it("Validar status code", () => {
        Program.getProgram().should(response => {
            expect(response.status).to.equal(200);
        });
    });

    it("Validar Id", () => {
        Program.getProgram().should(response => {
            expect(response.body[0].Id).to.equal(payload.maisClientes.Id);
            expect(response.body[1].Id).to.equal(payload.taxaTransacional.Id);
        });
    });

    it("Validar Name", () => {
        Program.getProgram().should(response => {
            expect(response.body[0].Name).to.equal(payload.maisClientes.Name);
            expect(response.body[1].Name).to.equal(payload.taxaTransacional.Name);
        });
    });

    it("Validar ProgramType", () => {
        Program.getProgram().should(response => {
            expect(response.body[0].ProgramType).to.equal(payload.maisClientes.ProgramType);
            expect(response.body[1].ProgramType).to.equal(payload.taxaTransacional.ProgramType);
        });
    });
});