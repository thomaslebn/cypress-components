context('Scroll To Top', () => {
    beforeEach(() => {
        cy.visit('./components/scroll-to-top.html')
    })

    it('should scroll to bottom', () => {
        cy.scrollTo('bottom')
    })

    it('should get the button with up content, click it and go the top', () => {
        cy.scrollTo('bottom').get('button').contains('up').click();
    })
})