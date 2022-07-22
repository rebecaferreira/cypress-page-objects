class Alert {
  assertAlertMsg(msg) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(msg);
    });
  }
}
export default new Alert();
