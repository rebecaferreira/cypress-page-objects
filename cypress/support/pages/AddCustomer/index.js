import { ELEMENTS } from "./elements";

class AddCustomer {
  fillRegistrationForm() {
    cy.get(ELEMENTS.firstName).type("Draco");
    cy.get(ELEMENTS.lastName).type("Malfoy");
    cy.get(ELEMENTS.postCode).type("000000");
  }

  clickOnAddCustomer() {
    cy.get(ELEMENTS.addCustomer).click();
  }
}

export default new AddCustomer();
