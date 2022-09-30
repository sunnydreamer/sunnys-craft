const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <DefaultLayout title={"HiHI"}>
        <div className="products">
          {products.map((product, i) => {
            return (
              <>
                {" "}
                <div className="productCard" key={i}>
                  <a href={`/${product.category}/${product._id}`}>
                    <div className="productImgContainer">
                      <img src={product.img} alt="" className="productImg" />
                    </div>

                    <div className="productName">{product.name}</div>
                    <div className="productPrice">${product.price}</div>
                    <div className="productSeller">
                      Sell by {product.seller}
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>

        {/* {jewery.map((jewery, i) => {
          return <h1>{jewery.name}</h1>;
        })} */}
      </DefaultLayout>
    );
  }
}

module.exports = Products;
