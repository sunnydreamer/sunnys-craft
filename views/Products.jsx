const React = require("react");
const DefaultLayout = require("./layouts/Default");
const DefaultLayoutLog = require("./layouts/DefaultLog");
const ProductsContentUser = require("./contents/ProductsContentUser");
const ProductsContentAdmin = require("./contents/ProductsContentAdmin");

class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { log } = this.props;
    const { isAdmin } = this.props;
    const { title } = this.props;
    const { cart } = this.props;

    if (log === "false") {
      return (
        <DefaultLayout title={title} cart={cart}>
          <ProductsContentUser products={products}></ProductsContentUser>
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayoutLog title={title} isAdmin={isAdmin} cart={cart}>
          <ProductsContentAdmin products={products}></ProductsContentAdmin>
        </DefaultLayoutLog>
      );
    }
  }
}

module.exports = Products;
