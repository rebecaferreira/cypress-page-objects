import { ELEMENTS } from "./elements";

class Deposit {
  clickOnDeposit() {
    cy.get(ELEMENTS.deposit).click();
  }
}

export default new Deposit();
