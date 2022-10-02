const React = require("react");

class CartContent extends React.Component {
  render() {
    return (
      <>
        <div className="messageContainer">
          <div className="emptyMessage">
            {this.props.cart.length} items in your cart
          </div>
          <div className="discoverMoreLink">
            <a href="/">Keep shopping</a>
          </div>
        </div>
        <form action="#" className="cartContent" method="POST">
          <div className="cartLeft">
            <ul>
              {this.props.cart.map((product, i) => {
                return (
                  <>
                    <div className="cartItem" key={i}>
                      <div className="cartImgContainer">
                        <img
                          src={`${product.img}`}
                          alt=""
                          className="cartProductImg"
                        />
                      </div>
                      <div className="cartProductInfo">
                        <div className="cartProductName">{product.name}</div>

                        <div className="cartBtns">
                          <div className="cartBtn">Save for later</div>
                          <div className="cartBtn">
                            <a href={`/cart/${product._id}/remove`}>Remove</a>{" "}
                          </div>
                        </div>

                        <textarea
                          name="note"
                          rows="4"
                          cols="50"
                          placeholder="Add a note to properLetter(optional)"
                          className="note"
                        ></textarea>
                      </div>
                      <div className="cartProductPrice">${product.price}</div>
                    </div>

                    <div className="lineForCart"></div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="cartRight">
            <div className="payment">
              <p>How you'll pay:</p>
              <input type="radio" id="visa" name="payment" value="Visa" />
              <label for="visa">
                <img
                  src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
                  alt=""
                  class="paymentImg"
                />
              </label>
              <br />
              <input type="radio" id="paypal" name="payment" value="PayPal" />
              <label for="paypal">
                <img
                  src="https://s3.amazonaws.com/media-p.slid.es/uploads/414316/images/5289926/2000px-Google_Pay__GPay__Logo.svg.png"
                  alt=""
                  className="paymentImg"
                  id="paypal"
                />
              </label>
              <br />
              <input type="radio" id="klarna" name="payment" value="Klarna" />
              <label for="klarna">
                <img
                  src="
                  https://assets.progressiveparts.com/uploads/20190606115206/klarna_logo_pink-1000x223.png"
                  alt=""
                  className="paymentImg"
                />
              </label>

              <div className="totalPrice">
                <div className="totalPriceText">Item(s) total</div>
                <div className="totalPriceNum">${this.props.totalPrice}</div>
              </div>
              <div className="shipping">Get shipping cost</div>

              <input id="buyBtn" type="submit" value="Buy" />
              <div className="tax">* Additional duties and taxes may apply</div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

module.exports = CartContent;
