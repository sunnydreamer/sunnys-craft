const React = require("react");

class TemplateLog extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title></title>
            <link rel="stylesheet" href="/css/app.css" />
            <script src="/js/index.js" defer></script>
          </head>

          <body>
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
                  <a href="/logout">Log out</a>{" "}
                </div>
                <div className="cart">
                  <img
                    src="http://www.pngplay.com/wp-content/uploads/1/Shopping-Cart-PNG-Royalty-Free-Photo.png"
                    alt=""
                    className="cartImg"
                  />
                </div>
              </div>

              <nav className="nav">
                <div className="navItem">
                  <a href="/jewery&accessories">Jewery & Accessories</a>
                </div>
                <div className="navItem">
                  <a href="/clothing&shoes">Clothing & Shoes</a>
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

module.exports = TemplateLog;
