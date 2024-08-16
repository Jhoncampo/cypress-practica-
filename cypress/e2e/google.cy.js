describe("Prueba de aperturas de Google", () => {
    it("Abre la página de Google correctamente ", () => {
        cy.visit("https://www.google.com")
        cy.title().should("eq","Google")
    })
})