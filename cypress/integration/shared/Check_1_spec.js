describe("alaskaair.com test: ", () => {
    it("Test", function () {
    cy.log("Hi!I am From Cypress");
    cy.visit("www.alaskaair.com");
    cy.wait(10000);
    });
});
