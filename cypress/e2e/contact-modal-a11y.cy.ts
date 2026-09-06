// Regression tests for the contact modal's keyboard/AT behaviour.
//
// The modal portals into the DOM on every page and stays mounted while closed
// so it can animate. It previously did that with opacity alone, which left its
// form fields focusable: keyboard users tabbed from the footer into an
// invisible form, and the wrapper's aria-hidden ended up over focusable
// content (an ARIA violation). It's now hidden with visibility, which removes
// it from both the tab order and the accessibility tree.

describe("Contact modal accessibility", () => {
  it("keeps the closed modal out of the tab order", () => {
    cy.visit("/");
    cy.get('[role="dialog"]').should("not.be.visible");
    // `:visible` is Cypress's proxy for "can actually be reached" — it accounts
    // for visibility: hidden, which is what removes these from tab order.
    cy.get('[role="dialog"]')
      .find("input, textarea, button, a[href]")
      .filter(":visible")
      .should("have.length", 0);
  });

  it("exposes the fields once opened, and focuses the first one", () => {
    cy.visit("/");
    cy.contains("button", "Let's Talk").click();
    cy.get('[role="dialog"]').should("be.visible");
    cy.get('[role="dialog"]')
      .find("input, textarea, button")
      .filter(":visible")
      .should("have.length.greaterThan", 0);
    cy.focused().should("have.attr", "name", "name");
  });

  it("closes on Escape and returns focus to the trigger", () => {
    cy.visit("/");
    cy.contains("button", "Let's Talk").click();
    cy.get('[role="dialog"]').should("be.visible");

    cy.get("body").type("{esc}");
    cy.get('[role="dialog"]').should("not.be.visible");
    // Focus must land back on the button that opened the dialog, not on body.
    cy.focused().should("contain.text", "Let's Talk");
  });

  it("traps Tab inside the dialog while open", () => {
    cy.visit("/");
    cy.contains("button", "Let's Talk").click();
    cy.get('[role="dialog"]').should("be.visible");

    // Walk past the end of the dialog's focusables; focus must stay inside.
    for (let i = 0; i < 12; i += 1) {
      cy.focused().trigger("keydown", { key: "Tab", bubbles: true });
    }
    cy.focused().closest('[role="dialog"]').should("have.length", 1);
  });
});
