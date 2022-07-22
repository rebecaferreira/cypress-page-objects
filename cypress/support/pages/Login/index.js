import { ELEMENTS } from "./elements";

class Login {
  loginAs(profile, customer) {
    if (profile === ELEMENTS.customerBtn) {
      cy.contains(profile).click();
      cy.get(ELEMENTS.userSelect).select(customer);
      cy.contains(ELEMENTS.loginBtn).click();
    } else {
      cy.contains(profile).click();
    }
  }
}

export default new Login();
