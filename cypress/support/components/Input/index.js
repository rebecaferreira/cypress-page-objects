import { ELEMENTS } from "./elements";

class Input {
  insertAmount(amount) {
    cy.get(ELEMENTS.amountInput).type(amount);
  }

  assertAmount(balance) {
    cy.get(ELEMENTS.balance).should("have.text", balance);
  }
}

export default new Input();
