const React = require("react");

class ProductsContentUser extends React.Component {
  render() {
    return (
      <>
        <nav className="gobackBtn" id="backToHome">
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32766.png"
            alt=""
            className="gobackIcon"
          />
          <a href={"/"}>Go Back</a>
        </nav>

        <div className="products">
          {this.props.products.map((product, i) => {
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
      </>
    );
  }
}

module.exports = ProductsContentUser;
