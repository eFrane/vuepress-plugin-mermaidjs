it('renders diagrams', () => {
    cy.visit('/test-diagrams.html')
    cy.get('#a-simple-one + div').toMatchImageSnapshot()
})
