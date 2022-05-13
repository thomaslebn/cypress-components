describe('To-do', () => {
    beforeEach(() => {
        cy.visit('./components/to-do.html')
    })

    it('can add four new todo items', () => {
        let item1 = 'Learning Cypress'
        cy.get('[data-test=new-todo]').type(`${item1}{enter}`)

        let item2 = 'Learning Jest'
        cy.get('[data-test=new-todo]').type(`${item2}{enter}`)

        let item3 = 'Learning TDD'
        cy.get('[data-test=new-todo]').type(`${item3}{enter}`)

        let item4 = 'Learning Javascript'
        cy.get('[data-test=new-todo]').type(`${item4}{enter}`)

        cy.get('div').contains('Learning Jest').next('button').click()

        cy.get('[class=number-todos]').contains(3)
    })
})
