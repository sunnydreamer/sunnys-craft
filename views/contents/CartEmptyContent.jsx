const React = require("react");

class CartEmptyContent extends React.Component {
  render() {
    return (
      <>
        <div className="messageContainer">
          <div className="emptyMessage">Your cart is empty.</div>
          <div className="discoverMoreLink">
            <a href="/">Discover something unique to fill it up</a>
          </div>
        </div>
      </>
    );
  }
}

module.exports = CartEmptyContent;
