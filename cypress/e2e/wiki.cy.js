describe("Probando Wikipedia", () => {
  it("passed", () => {
    cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada")
    cy.url().should("include", "wikipedia")
    
    //cy.get('a[title="Estación de La Sagrera"] > .mw-ui-button').click()
    cy.viewport('macbook-16')
    cy.get('.cdx-text-input__input').type("cyprees")
    cy.get('.cdx-search-input > .cdx-button').click()
  })
})