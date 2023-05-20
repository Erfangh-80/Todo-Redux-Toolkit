describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('button').click();
    cy.get('#name').type('John Doe');
    cy.get('#email').type('johndoe@example.com');
    cy.get('button').click();
    cy.get("#edit").click()
    cy.get('#email').clear().type('johndoe@aaa.com');
    cy.get('button').click();
  });
});


// describe("template spec", () => {
//   it("passes", () => {
    
//   });
// });

  

