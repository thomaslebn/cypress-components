context('Smart tag', () => {
    beforeEach(() => {
        cy.visit('./components/smart-tag.html')
    })

    it('should focus the button and show the tag', () => {
        cy.get('button').trigger('mouseover')
        cy.get('[data-cy=tag-description]').should('be.visible');
    })

    it('should not focus the button and not show the tag', () => {
        cy.get('h1').trigger('mouseover');
        cy.get('[data-cy=tag-description]').should('not.be.visible');
    })
})