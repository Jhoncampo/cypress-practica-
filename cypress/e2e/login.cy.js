describe("Inicio de sessión", () => {
    it("Visita la página web de inicio de sesión", () => {
        cy.visit("http://localhost/inventario/")
        cy.get('input[name="login_usuario"]').type("Administrador")
        cy.get('input[name="login_clave"]').type("Administrador")
        cy.get('button[type="submit"]').click()

    })
})