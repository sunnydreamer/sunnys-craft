const React = require("react");

class Template extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css" />
            <script src="/js/index.js" defer></script>
          </head>

          <body>
            <div id="logInModal" className="modal">
              {/* log in  */}
              <div className="modal-content" id="login">
                <div className="modal-header">
                  <h2 className="closeBtn">&times;</h2>
                  <h2 className="signinTitle">Sign in</h2>
                </div>
                <div className="modal-body">
                  <form action="/user/login" method="POST">
                    <div className="field input-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onInvalid="InvalidMsg(this);"
                      />
                    </div>
                    <div className="field input-field">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="form-link">
                      <a>Forgot your password? </a>
                    </div>
                    <div className="field ">
                      <input
                        className="button-field"
                        type="submit"
                        value="Sign in"
                      />
                    </div>
                    <div className="form-link">
                      Not a member yet? <a id="registerLink">Register </a>
                    </div>
                  </form>
                </div>
                <div className="line"></div>
                <div className="otherLoginBtns">
                  <div className="otherLoginBtn google">
                    <div className="otherLoginTxt">Continue with Google</div>
                  </div>
                  <div className="otherLoginBtn facebook">
                    <div className="otherLoginTxt">Continue with Facebook</div>
                  </div>
                  <div className="otherLoginBtn apple">
                    <div className="otherLoginTxt">Continue with Apple</div>
                  </div>
                </div>
                <div className="policy">
                  <p>
                    By clicking Sign in or Continue with Google, Facebook, or
                    Apple, you agree to Etsy's Terms of Use and Privacy Policy.
                    Etsy may send you communications; you may change your
                    preferences in your account settings. We'll never post
                    without your permission.
                  </p>
                </div>
              </div>

              {/* register */}
              <div className="modal-content" id="register">
                <div className="modal-header">
                  <h2 className="closeBtn">&times;</h2>
                  <h2 className="signinTitle">Register</h2>
                </div>
                <div className="modal-body">
                  <form action="/user/create" method="POST">
                    <div className="field input-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onInvalid="InvalidMsg(this);"
                        autoComplete="off"
                      />
                    </div>
                    <div className="field input-field">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        autoComplete="off"
                      />
                    </div>

                    <div className="field ">
                      <input
                        className="button-field"
                        type="submit"
                        value="Register"
                      />
                    </div>
                    <div className="form-link">
                      Already a member ? <a id="signInLink">Sign in </a>
                    </div>
                  </form>
                </div>
                <div className="line"></div>
                <div className="otherLoginBtns">
                  <div className="otherLoginBtn google">
                    <div className="otherLoginTxt">Continue with Google</div>
                  </div>
                  <div className="otherLoginBtn facebook">
                    <div className="otherLoginTxt">Continue with Facebook</div>
                  </div>
                  <div className="otherLoginBtn apple">
                    <div className="otherLoginTxt">Continue with Apple</div>
                  </div>
                </div>
                <div className="policy">
                  <p>
                    By clicking Sign in or Continue with Google, Facebook, or
                    Apple, you agree to Etsy's Terms of Use and Privacy Policy.
                    Etsy may send you communications; you may change your
                    preferences in your account settings. We'll never post
                    without your permission.
                  </p>
                </div>
              </div>
            </div>

            <header>
              <div className="topBar">
                <div className="logo">
                  <img
                    src="https://clipground.com/images/carson-dellosa-sun-clipart-4.png"
                    alt=""
                    className="logoImg"
                  />
                </div>
                <div className="brand">
                  <a href="/">Sunny's Craft</a>{" "}
                </div>
                <div className="search">
                  <form action="" className="search-bar">
                    <input
                      type="text"
                      placeholder="Search for anything"
                      name="q"
                    />
                    <button type=" submit">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
                        alt=""
                        className="searchIcon"
                      />
                    </button>
                  </form>
                </div>
                <div className="signInBtn">
                  <a>Sign in</a>{" "}
                </div>
                <a href="/cart">
                  <div className="cart">
                    <img
                      src="https://game-icons.net/icons/000000/transparent/1x1/delapouite/shopping-cart.png"
                      alt=""
                      className="cartImg"
                    />
                    <div className="cartNum">({this.props.cart})</div>
                  </div>
                </a>
              </div>

              <nav className="nav">
                <div className="navItem">
                  <a href="/jewelry">Jewelry & Accessories</a>
                </div>
                <div className="navItem">
                  <a href="/clothing">Clothing & Shoes</a>
                </div>
                <div className="navItem">Home & Living</div>
                <div className="navItem">Wedding & Party</div>
                <div className="navItem">Toys & Entertainment </div>
              </nav>
            </header>

            {this.props.children}
          </body>
        </html>
      </>
    );
  }
}

module.exports = Template;
