const productelements = require("../../elements/products");

class ProductPage {

    get AddToCartButton() {
        return $(productelements.addToCartButton);
    }

    get RemoveButton() {
        return $(productelements.removeButton);
    }

    get CartBadge() {
        return $(productelements.cartBadge);
    }

    get CartButton() {
        return $(productelements.cartButton);
    }

}

module.exports = new ProductPage();