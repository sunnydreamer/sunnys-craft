const React = require("react");
const DefaultLayout = require("./layouts/Default");
const DefaultLayoutLog = require("./layouts/DefaultLog");
const ProductsContentUser = require("./contents/ProductsContentUser");

class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { log } = this.props;
    const { isAdmin } = this.props;

    if (log === "false") {
      return (
        <DefaultLayout title={"HiHI"}>
          <ProductsContentUser products={products}></ProductsContentUser>
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayoutLog title={"HiHI"} isAdmin={isAdmin}>
          <ProductsContentUser products={products}></ProductsContentUser>
        </DefaultLayoutLog>
      );
    }
  }
}

module.exports = Products;
