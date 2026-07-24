const { checkParams } = require("appium/driver");
const actions = require("../../common/actions");
const assertions = require("../../common/assertions");
const loginpage = require("../pageobjects/loginpage");
const productpage = require("../pageobjects/productpage");
const checkoutpage = require("../pageobjects/checkoutpage");
const checkout2 = require("../pageobjects/checkout2");
const overview = require("../../elements/overview");
const overviewpage = require("../pageobjects/overviewpage");
const completedpage = require("../pageobjects/completedpage");
const allure = require("@wdio/allure-reporter").default;



describe("Login Swag Labs", () => {

    it("Connexion avec un utilisateur valide", async () => {

        await allure.step("Saisir le username", async () => {
            await actions.SetValue(loginpage.Username, "standard_user");
            await actions.SetValue(loginpage.Password, "secret_sauce");
            await actions.Click(loginpage.LoginButton);
            await actions.Click(productpage.AddToCartButton);
            await assertions.AssertElementTextEquals(productpage.CartBadge,"1");
            await assertions.AssertElementTextVisible(productpage.RemoveButton);
            await actions.Click(productpage.CartButton);
            await actions.Click(checkoutpage.CheckOutButton);
            await checkout2.fill("Amal","SS","91120");
            await actions.Click(checkout2.ContinueButton);
            await actions.ScrollToElement(overviewpage.finishButton);
            await actions.Click(overviewpage.finishButton);
            await assertions.AssertElementTextEquals(completedpage.msg,"THANK YOU FOR YOU ORDER");
            await actions.Click(completedpage.menu);
        });

    });

});