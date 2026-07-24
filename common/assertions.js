// Ensemble des méthodes pour les assertions

const { expect } = require("@wdio/globals");

module.exports = {

    // Vérifie que le texte est égal au texte attendu
    async AssertElementTextEquals(element, expectedText) {
        await element.waitForDisplayed({ timeout: 120000 });

        const actualText = await element.getText();

        expect(actualText).toEqual(expectedText);
    },

    // Vérifie qu'un élément est visible
    async AssertElementTextVisible(element) {
        await element.waitForDisplayed({ timeout: 120000 });

        const isVisible = await element.isDisplayed();

        expect(isVisible).toBe(true);
    }

}