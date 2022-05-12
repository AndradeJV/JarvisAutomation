Cypress.Commands.add("loginDefaultAdm", () => {
    cy.get("#mat-input-0").type('idp.dev');
    cy.get("#mat-input-1").type('1GfXM#hZ');
    cy.get("#button-login").click();

    cy.wait(2000);
    cy.contains(".padding-left-40 > div", "Aplicações").should('be.visible');
});

// Capturar texto com cypress
Cypress.Commands.add("captureText", (css) => {
    let text;

    cy.get(css)
        .then(($el) => {
            text = $el.text();

            cy.log(text);
        });

    return text;
});