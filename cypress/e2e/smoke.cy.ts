describe("Portfolio smoke tests", () => {
  it("loads the home page hero", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hey, I'm");
    cy.get("nav").should("be.visible");
  });

  it("navigates to the About page", () => {
    cy.visit("/");
    cy.get("header").contains("a", "About").click();
    cy.location("pathname").should("eq", "/about");
    cy.contains("h1", "About").should("be.visible");
  });

  it("renders both project pages", () => {
    cy.visit("/amazon");
    cy.contains("Amplifying").should("be.visible");
    cy.visit("/pizzamico");
    cy.contains("Meet Pizzamico").should("be.visible");
  });

  it("opens the contact modal from Let's Talk", () => {
    cy.visit("/");
    cy.contains("button", "Let's Talk").click();
    // The modal auto-focuses its first field when it opens.
    cy.focused().should("have.attr", "name", "name");
    cy.contains("Let's talk about your project.").should("exist");
  });

  it("opens a project image in the lightbox", () => {
    cy.visit("/pizzamico");
    // The enlarged image is only rendered while the lightbox is open, so the
    // Cart screen goes from one instance (thumbnail) to two (thumb + lightbox).
    cy.get('img[alt="Pizzamico Cart screen"]').should("have.length", 1);
    cy.get('button[aria-label="Expand image"]').eq(1).click();
    cy.get('img[alt="Pizzamico Cart screen"]').should("have.length", 2);
  });
});
