const checkout2 = require("../../elements/checkout2");
const checkoutelements2 = require("../../elements/checkout2");

class CheckoutPageInfos {

    get firstNameInput() {
        return $(checkoutelements2.FirstName);
    }

    get lastNameInput() {
        return $(checkoutelements2.LastName);
    }

    get zipCodeInput() {
        return $(checkoutelements2.ZipCode);
    }

    get ContinueButton(){
        return $(checkoutelements2.ContinueButton);
    }

    async fill(fn, ln,zip) {
    await $(checkout2.FirstName).setValue(fn);
    await $(checkout2.LastName).setValue(ln);
    await $(checkout2.ZipCode).setValue(zip);

}
}

module.exports = new CheckoutPageInfos();