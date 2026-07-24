const checkoutelements2 = require("../../elements/overview");

class OverviewPage {

    get finishButton() {
        return $(checkoutelements2.FinishButton);
    }

}

module.exports = new OverviewPage();