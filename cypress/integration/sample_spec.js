describe("Test phoneBook", () => {
  it("Visits phoneBook", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Add new contact");
  });
  it("should show an error, when empty contact is added", () => {
    cy.contains("button", "add").click();
    cy.get("div[class*='Error_error__']");
  });

  it("should add a contact", () => {
    cy.get("input[name='firstName']").type("Ron");
    cy.get("input[name='lastName']").type("Weasley");
    cy.get("input[name='phoneNumber']").type("666");
    cy.contains("button", "add").click();
  });
  it("should show added contact in contact list", () => {
    cy.get("table tbody td").contains("Ron");
    cy.get("table tbody td + td").contains("Weasley");
  });
  it("should have a delete button", () => {
    cy.get("a[class*='ContactList_delete__']");
  });
  it("should delete contact", () => {
    cy.get("table tbody").contains("Weasley");
    cy.get("a[class*='ContactList_delete__']").click();
    cy.get("table tbody").contains("Weasley").should("not.exist");
  });
});
