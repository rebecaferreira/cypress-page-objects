import Login from "../support/pages/Login";
import Account from "../support/pages/Account/index";
import Deposit from "../support/pages/Deposit/index";
import Input from "../support/components/Input/index";

describe("Deposit", () => {
  before(() => {
    cy.visit("/");
    Login.loginAs("Customer", "Harry Potter");
    Account.assertLoggedUser("Harry Potter");
  });

  it("Users should be able to deposit into their bank account", () => {
    Account.chooseDepositOperation();
    Input.assertAmount("0");
    Input.insertAmount("50");
    Deposit.clickOnDeposit();
    Account.assertSuccessMsg("Deposit Successful");
    Input.assertAmount("50");
  });
});
