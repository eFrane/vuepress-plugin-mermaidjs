it('renders diagrams', () => {
    cy.visit('/')
    cy.get('#a-simple-one + .mermaid-diagram').toMatchImageSnapshot()
})
