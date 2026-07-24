// Méthodes qui permettent d'accéder aux éléments de la page Login

const loginelements = require("../../elements/login");

class LoginPage {

    get Username() {
        return $(loginelements.username);
    }

    get Password() {
        return $(loginelements.password);
    }

    get LoginButton() {
        return $(loginelements.loginButton);
    }

}

module.exports = new LoginPage();