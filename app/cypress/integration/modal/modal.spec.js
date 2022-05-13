/// <reference types="cypress" />

context('Modal', () => {
    beforeEach(() => {
        cy.visit('./components/modal.html')
    })

    // it('open modal on display click', () => {
    //     // We use the `cy.get()` command to get all elements that match the selector.
    //     // Then, we use `should` to assert that there are two matched items,
    //     // which are the two default items.
    //     cy.get('.todo-list li').should('have.length', 2)
    //
    //     // We can go even further and check that the default todos each contain
    //     // the correct text. We use the `first` and `last` functions
    //     // to get just the first and last matched elements individually,
    //     // and then perform an assertion with `should`.
    //     cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //     cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    // })

    it('should open modal on display click', () => {
        cy.get('button').contains('Display').click()
    });

    it('should close modal on outside click', () => {
        cy.get('body').click(0, 0);
    });

    it('should have a p2 Lorem Ipsum', () => {
        cy.get('[data-cy=h2-lorem]').contains('Lorem Ipsum')
    })
})