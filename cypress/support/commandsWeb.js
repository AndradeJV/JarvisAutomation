// Login com usuário padrão
Cypress.Commands.add("loginDefaultAdm", () => {
    cy.get("#mat-input-0").type('idp.dev');
    cy.get("#mat-input-1").type('1GfXM#hZ');
    cy.get("#button-login").click();

    cy.wait(2000);
    cy.contains(".padding-left-40 > div", "Aplicações").should('be.visible');
});

// Espera pelo tempo x em segundos
Cypress.Commands.add("waitForTime", time => {
    const result = time * 1000

    cy.wait(result);
});

// Validar se o texto está visível
Cypress.Commands.add("validationMessageVisible", (css, msg) => {
    cy.contains(css, msg).should('be.visible');
    cy.waitForTime(2);
});

// Validar campo pelo 'have.value'
Cypress.Commands.add("validationCssPerValue", (css, value) => {
    cy.get(css).should('have.value', value);
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


// Aguardar modal de carregamento desaparecer
Cypress.Commands.add("waitLoadingModal", () => {
    const element = cy.get(".brand.with-layout > div > div");
    let count = 0;

    while(element === true || count == 30){
        this.waitForTime(1);
        
        count += 1;

        return;
    }
});

// Esperar elemento em tela
Cypress.Commands.add("expectConditionsCss", css => {
    const element = cy.get(css);
    count = 0;

    while(element === true || count == 30){
        this.waitForTime(1);
        
        count += 1;

        return;
    }
});


// Clicar no elemento
Cypress.Commands.add("clickAnyElement", css => {
    cy.get(css).click();
});