describe('My HTML/JS Tests', () => {
  it('get at least 2 products in devises.html', () => {
    //partir de index.html
    cy.visit("http://localhost:3000/index.html")
    //cliquer sur le lien comportant 'devises'
    cy.contains('devises').click()
    cy.wait(50)
    // Should be on a new URL which includes '/commande'
    cy.url().should('include', '/devises')
    // à compléter

    cy.get('#btn_get_add').trigger("click")

    cy.get("#tb")
    .find("tr")
    .then((row) => {
      //row.length will give you the row count
      cy.log(row.length);
    });

  })

  })







