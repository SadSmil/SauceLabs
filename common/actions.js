class Actions {

    // Méthode permettant de cliquer sur un élément
    async Click(element) {
        await element.waitForDisplayed({ timeout: 120000 });
        await element.click();
    }

    // Méthode permettant de saisir une valeur dans un champ
    async SetValue(element, value) {
        await element.waitForDisplayed({ timeout: 120000 });
        await element.clearValue();
        await element.setValue(value);
    }

    async ScrollToElement(element) {
        await element.scrollIntoView();
    }    

}

module.exports = new Actions();