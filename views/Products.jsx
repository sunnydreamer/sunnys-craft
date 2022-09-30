const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Products extends React.Component {
  render() {
    const { jewery } = this.props;
    return (
      <DefaultLayout title={"HiHI"}>
        <div className="products">
          {jewery.map((jewery, i) => {
            return (
              <div className="productCard" key={i}>
                <div className="productImgContainer">
                  <img src={jewery.img} alt="" className="productImg" />
                </div>

                <div className="productName">{jewery.name}</div>
                <div className="productPrice">${jewery.price}</div>
                <div className="productSeller">Sell by {jewery.seller}</div>
              </div>
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
