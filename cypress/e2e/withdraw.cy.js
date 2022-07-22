import Login from "../support/pages/Login";
import Account from "../support/pages/Account/index";
import Withdraw from "../support/pages/Withdraw/index";
import Input from "../support/components/Input/index";

describe("Withdraw", () => {
  before(() => {
    cy.visit("/");
    Login.loginAs("Customer", "Harry Potter");
    Account.assertLoggedUser("Harry Potter");
  });

  it("Users should not be able to withdraw from their bank account if they have no balance", () => {
    Account.chooseWithdrawOperation();
    Input.insertAmount("50");
    Withdraw.clickOnWithdraw();
    Account.assertMsg("Transaction Failed. You can not withdraw amount more than the balance.");
  });
});
