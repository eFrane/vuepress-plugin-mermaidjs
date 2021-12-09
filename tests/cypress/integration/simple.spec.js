it('renders diagrams', () => {
    cy.visit('/test-diagrams.html')
    cy.get('#a-simple-one + .mermaid-diagram').toMatchImageSnapshot()
})
