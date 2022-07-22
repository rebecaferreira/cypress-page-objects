import Login from "../support/pages/Login";
import Account from "../support/pages/Account/index";
import AddCustomer from "../support/pages/AddCustomer/index";
import Alert from "../support/components/Alert";

describe("Add Customer", () => {
  before(() => {
    cy.visit("/");
    Login.loginAs("Manager");
  });

  it("Manager should be able to add a new customer to the bank", () => {
    Account.chooseAddCustomer();
    AddCustomer.fillRegistrationForm();
    AddCustomer.clickOnAddCustomer();
    Alert.assertAlertMsg("Customer added successfully with customer id :6");
  });
});
