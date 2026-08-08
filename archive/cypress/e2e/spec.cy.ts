describe('Home Page', () => {
  it('Contact Button Redirects', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="contact-me"]').click()
    cy.url().should('eq', 'http://localhost:3000/contact')
  })
})
