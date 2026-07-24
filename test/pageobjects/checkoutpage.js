const checkoutelements = require("../../elements/checkout");

class CheckoutPage {

    get CheckOutButton() {
        return $(checkoutelements.checkoutButton);
    }

}

module.exports = new CheckoutPage();