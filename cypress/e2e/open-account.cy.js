import Login from "../support/pages/Login";
import Alert from "../support/components/Alert";
import Account from "../support/pages/Account/index";
import OpenAccount from "../support/pages/OpenAccount/index";

describe("Open account", () => {
  before(() => {
    cy.visit("/");
    Login.loginAs("Manager");
  });

  it("Manager should be able to open an account to a customer", () => {
    Account.chooseOpenAccount();
    OpenAccount.selectCustomer("Neville Longbottom");
    OpenAccount.selectCurrency("Pound");
    OpenAccount.clickProcess();
    Alert.assertAlertMsg(
      "Account created successfully with account Number :1016"
    );
  });
});
