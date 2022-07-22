import { ELEMENTS } from "./elements";

class OpenAccount {
  selectCustomer(customer) {
    cy.get(ELEMENTS.userDropdown).select(customer);
  }

  selectCurrency(curr) {
    cy.get(ELEMENTS.currencyDropdown).select(curr);
  }

  clickProcess() {
    cy.contains(ELEMENTS.processBtn).click();
  }
}

export default new OpenAccount();
