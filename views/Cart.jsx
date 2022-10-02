const React = require("react");
const DefaultLayout = require("./layouts/Default");
const DefaultLayoutLog = require("./layouts/DefaultLog");
const CartEmptyContent = require("./contents/CartEmptyContent");
const CartContent = require("./contents/CartContent");

class Cart extends React.Component {
  render() {
    const { log, isAdmin, cart, totalPrice } = this.props;

    console.log(cart);
    if (log === "false") {
      if (cart.length === 0) {
        return (
          <DefaultLayout title={"Sunny's Craft"} cart={cart.length}>
            <CartEmptyContent></CartEmptyContent>
          </DefaultLayout>
        );
      } else {
        return (
          <DefaultLayout title={"Sunny's Craft"} cart={cart.length}>
            <CartContent cart={cart} totalPrice={totalPrice}></CartContent>
          </DefaultLayout>
        );
      }
    } else {
      if (cart.length === 0) {
        return (
          <DefaultLayoutLog
            title={"Sunny's Craft"}
            isAdmin={isAdmin}
            cart={cart.length}
          >
            {" "}
            <CartEmptyContent></CartEmptyContent>
          </DefaultLayoutLog>
        );
      } else {
        return (
          <DefaultLayoutLog
            title={"Sunny's Craft"}
            isAdmin={isAdmin}
            cart={cart.length}
          >
            {" "}
            <CartContent cart={cart} totalPrice={totalPrice}></CartContent>
          </DefaultLayoutLog>
        );
      }
    }
  }
}

module.exports = Cart;
