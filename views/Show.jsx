const React = require("react");
const DefaultLayout = require("./layouts/Default");
const ProductContentUser = require("./contents/ShowContentUser");
const ProductContentAdmin = require("./contents/ShowContentAdmin");
const DefaultLayoutLog = require("./layouts/DefaultLog");

class Show extends React.Component {
  render() {
    const { product, log, isAdmin } = this.props;

    if (log === "false") {
      // Strangers Mode
      return (
        <DefaultLayout title={"HiHI"}>
          <ProductContentUser
            seller={product.seller}
            name={product.name}
            price={product.price}
            img={product.img}
            category={product.category}
          ></ProductContentUser>
        </DefaultLayout>
      );
    } else {
      if (isAdmin === "User") {
        // User Mode
        return (
          <DefaultLayoutLog title={"HiHI"} isAdmin={isAdmin}>
            <ProductContentUser
              seller={product.seller}
              name={product.name}
              price={product.price}
              img={product.img}
              category={product.category}
            ></ProductContentUser>
          </DefaultLayoutLog>
        );
      } else {
        // Admin Mode
        return (
          <DefaultLayoutLog title={"HiHI"} isAdmin={isAdmin}>
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
