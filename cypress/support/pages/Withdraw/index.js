import { ELEMENTS } from "./elements";

class Withdrawl {
  clickOnWithdraw() {
    cy.get(ELEMENTS.withdraw).click();
  }
}

export default new Withdrawl();
