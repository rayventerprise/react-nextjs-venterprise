describe('Home Page', () => {
  it('Contact Button Redirects', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="contact-me"]').click()
    cy.url().should('eq', 'http://localhost:3000/contact')
  })

  it('Shows hero content and jumps to projects', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Hey I'm Ray.").should('be.visible')
    cy.contains('button', 'View Work').click()

    cy.url().should('include', '#projects')
    cy.get('#projects').should('be.visible')
    cy.contains('FEATURED PROJECTS').should('be.visible')
  })

  it('Navigates to the about page from the work panel', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'More About Me').click()

    cy.url().should('include', '/about')
    cy.contains('h1', 'Technology').should('be.visible')
  })

  it('Navigates to an individual project page', () => {
    cy.visit('http://localhost:3000/#projects')

    cy.contains('a', 'Amazon').click()
    cy.url().should('include', '/amazon')
    cy.contains('Amplifying Amazon economists.').should('be.visible')
  })
})

describe('Contact Page', () => {
  it('Displays required contact form fields', () => {
    cy.visit('http://localhost:3000/contact')

    cy.get('input[name="name"]').should('have.attr', 'required')
    cy.get('input[name="email"]').should('have.attr', 'required')
    cy.get('input[name="company"]').should('have.attr', 'required')
    cy.get('input[name="notes"]').should('have.attr', 'required')
    cy.contains('button', 'Send It!').should('be.visible')
  })
})
