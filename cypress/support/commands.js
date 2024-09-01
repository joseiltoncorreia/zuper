// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('origemDestino', (tipoTrecho, aeroporto) => {
    cy.get(`label:contains("${tipoTrecho}") + div > input`).type(aeroporto)
})

Cypress.Commands.add('nomeAeroporto', (ciglaAeroporto) => {
    cy.get(`span[data-zt-value="${ciglaAeroporto}"]`).click()
})

Cypress.Commands.add('dataIdaVolta', (data) => {
    cy.get(`span[data-zt-value="${data}"]`).click()
})

Cypress.Commands.add('resultadoDaBusca', (tipoVoo, voosOrigemDestino) => {
    cy.get(`article:has(h3.summary_option:contains("${tipoVoo}")):has(p.filter_option:contains("${voosOrigemDestino}"))`)
        .should('be.visible')
})

Cypress.Commands.add('numeroDeAdultos', (adultos) => {
    cy.get('span[data-zt="passengersConfigAddAdult"]').then(($elemento) => {
        for (let i = 0; i < adultos; i++) {
            cy.wrap($elemento).click()
        }
    })
})

Cypress.Commands.add('numeroDeCriancas', (criancas) => {
    cy.get('span[data-zt="passengersConfigAddChild"]').then(($elemento) => {
        for (let i = 0; i < criancas; i++) {
            cy.wrap($elemento).click()
        }
    })
})

Cypress.Commands.add('numeroDeBebes', (bebes) => {
    cy.get('span[data-zt="passengersConfigAddInfant"]').then(($elemento) => {
        for (let i = 0; i < bebes; i++) {
            cy.wrap($elemento).click()
        }
    })
})