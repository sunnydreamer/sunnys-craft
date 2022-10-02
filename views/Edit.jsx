const React = require("react");
const DefaultLayoutLog = require("./layouts/DefaultLog");

class Edit extends React.Component {
  render() {
    const { product, isAdmin } = this.props;
    const { cart } = this.props;
    console.log(product);

    return (
      <DefaultLayoutLog title={"Edit"} isAdmin={isAdmin} cart={cart.length}>
        <nav className="gobackBtn" id="backToHome">
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32766.png"
            alt=""
            className="gobackIcon"
          />
          <a href={`/${product.category}/${product._id}`}>Go Back</a>
        </nav>
        <div className="pageTitle">Edit</div>
        <form
          action={`/${product.category}/${product._id}?_method=PUT`}
          method="post"
          className="editForm"
        >
          <div className="inputItem">
            <div className="inputName">Name</div>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              required
            />
          </div>

          <div className="inputItem">
            <div className="inputName">Price</div>
            <input
              type="text"
              name="price"
              defaultValue={product.price}
              required
            />
          </div>

          <div className="inputItem">
            <div className="inputName">Seller</div>
            <input
              type="text"
              name="seller"
              defaultValue={product.seller}
              required
            />
          </div>

          <div className="inputItem">
            <div className="inputName"> Image</div>
            <input type="text" name="img" defaultValue={product.img} required />
          </div>

          <input id="editConfirm" type="submit" value="Save Change" />
          <a href={`/${product.category}/${product._id}`} className="cancel">
            Cancel
          </a>
        </form>
      </DefaultLayoutLog>
    );
  }
}

module.exports = Edit;
