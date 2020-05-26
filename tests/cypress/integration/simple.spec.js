it('makes sure diagrams render', () => {
    cy.visit('/test-diagrams.html')
    cy.get('#a-simple-one + div').toMatchImageSnapshot()
})
