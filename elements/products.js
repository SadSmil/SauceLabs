class Products {

    addToCartButton = 'android=new UiSelector().text("ADD TO CART").instance(0)';

    removeButton = 'android=new UiSelector().text("REMOVE")';

    cartBadge = 'android=new UiSelector().text("1")';

    cartButton = 'android=new UiSelector().className("android.widget.ImageView").instance(3)';

}

module.exports = new Products();