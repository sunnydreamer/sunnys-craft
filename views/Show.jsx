const React = require("react");
const DefaultLayout = require("./layouts/Default");
const ProductContentUser = require("./contents/ShowContentUser");
const ProductContentAdmin = require("./contents/ShowContentAdmin");
const DefaultLayoutLog = require("./layouts/DefaultLog");

class Show extends React.Component {
  render() {
    const { product, log, isAdmin } = this.props;
    const { cart } = this.props;

    if (log === "false") {
      // Strangers Mode
      return (
        <DefaultLayout title={product.name} cart={cart}>
          <ProductContentUser
            seller={product.seller}
            name={product.name}
            price={product.price}
            img={product.img}
            category={product.category}
            id={product._id}
            cart={cart}
          ></ProductContentUser>
        </DefaultLayout>
      );
    } else {
      if (isAdmin === "User") {
        // User Mode
        return (
          <DefaultLayoutLog title={product.name} isAdmin={isAdmin} cart={cart}>
            <ProductContentUser
              seller={product.seller}
              name={product.name}
              price={product.price}
              img={product.img}
              category={product.category}
              id={product._id}
            ></ProductContentUser>
          </DefaultLayoutLog>
        );
      } else {
        // Admin Mode
        return (
          <DefaultLayoutLog title={product.name} isAdmin={isAdmin} cart={cart}>
            <ProductContentAdmin
              seller={product.seller}
              name={product.name}
              price={product.price}
              img={product.img}
              category={product.category}
              id={product._id}
            ></ProductContentAdmin>
          </DefaultLayoutLog>
        );
      }
    }
  }
}

module.exports = Show;
