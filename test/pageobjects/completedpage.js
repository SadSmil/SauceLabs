const Completedpagefinish = require("../../elements/complete");

class CompletePage {

    get msg() {
        return $(Completedpagefinish.ConfirmationMsg);
    }

    get menu() {
        return $(Completedpagefinish.menu);
    }

}

module.exports = new CompletePage();