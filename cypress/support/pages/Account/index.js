import { ELEMENTS } from "./elements";

class Account {
  assertLoggedUser(user) {
    cy.get(ELEMENTS.userName).should("have.text", user);
  }

  chooseDepositOperation() {
    cy.contains(ELEMENTS.depositTab).click();
  }

  chooseWithdrawOperation() {
    cy.get(ELEMENTS.withdrawTab).click();
  }

  assertMsg(msg) {
    cy.get(ELEMENTS.textLabel).should("have.text", msg);
  }

  chooseAddCustomer() {
    cy.get(ELEMENTS.addCustomerTab).click();
  }

  chooseOpenAccount() {
    cy.get(ELEMENTS.openAccountTab).click();
  }
}

export default new Account();
