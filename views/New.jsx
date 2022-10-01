const React = require("react");
const DefaultLayoutLog = require("./layouts/DefaultLog");

class New extends React.Component {
  render() {
    const { catagory } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayoutLog title={"Add New Product"} isAdmin="Admin" cart={cart}>
        <nav className="gobackBtn" id="backToHome">
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32766.png"
            alt=""
            className="gobackIcon"
          />
          <a href={`/${catagory}`}>Go Back</a>
        </nav>
        <div className="pageTitle">Add New Product</div>
        <form action={`/${catagory}/new`} method="post" className="editForm">
          <div className="inputItem">
            <div className="inputName">Name</div>
            <input type="text" name="name" required />
          </div>

          <div className="inputItem">
            <div className="inputName">Price</div>
            <input type="text" name="price" required />
          </div>

          <div className="inputItem">
            <div className="inputName">Seller</div>
            <input type="text" name="seller" required />
          </div>

          <div className="inputItem">
            <div className="inputName"> Image</div>
            <input type="text" name="img" required />
          </div>

          <input id="editConfirm" type="submit" value="Add" />
          <a href={`/${catagory}`} className="cancel">
            Cancel
          </a>
        </form>
      </DefaultLayoutLog>
    );
  }
}

module.exports = New;
