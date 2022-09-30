const React = require("react");

class ShowContentUser extends React.Component {
  render() {
    return (
      <>
        <div className="showContent">
          <div className="showLeft">
            <nav className="gobackBtn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/32/32766.png"
                alt=""
                className="gobackIcon"
              />
              <a href={`/${this.props.category}`}>Go Back</a>
            </nav>
            <div className="showImg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                alt=""
                className="showArrowLeft"
              />
              <div className="mainPicContainer">
                <img src={`${this.props.img}`} alt="" className="showImgLink" />
              </div>

              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                alt=""
                className="showArrowRight"
              />
            </div>
            {/* <div className="showReviews">
                    I got the 6mm 18 it looks great and is great quality. I like my
                    chain a little short but it's not tight around my neck this chain
                    is very aesthetic and very good for the price I got it at I have
                    gotten many compliments about my chain I would buy again shipping
                    could have been better tho it took like 7 days to deliver which is
                    not bad Length: 18 Inches Width: 6 mm
                  </div> */}
          </div>

          <div className="showRight">
            <div className="showSeller">{this.props.seller}</div>
            <div className="showName">{this.props.name}</div>
            <div className="showPrice">${this.props.price}</div>
            <form
              action={`/${this.props.category}/${this.props.id}/edit`}
              className="submitBtn"
            >
              <input id="editBtn" type="submit" value="Edit" />
            </form>
            <form
              action={`/${this.props.category}/${this.props.id}?_method=DELETE`}
              method="POST"
              className="submitBtn"
            >
              <input id="deleteBtn" type="submit" value="Delete" />
            </form>

            <div className="showDesc">
              <div className="descTitle">Detail</div>
              <div className="descContent">
                <ul>
                  <li> Handmade item</li>
                  <li> Materials: Stainless steel</li>

                  <li> Closure: Lobster claw</li>
                  <li> Made to Order</li>
                </ul>
              </div>
              <div className="descTitle">Description</div>
              <div className="descContent">
                Our top-quality heavy stainless steel necklace will provide a
                sleek look to any set of apparel. We use Eco-friendly materials
                that are resistant to rust, corrosion, and tarnishing. We also
                added 3 layers of IP Plating to provide the best quality
                color-preserving. The necklace is rolling making it comfortable
                and stylish. Stainless steel with IP Plating allows for a silver
                shine that will both stay consistent and reflective. The chain
                is also recyclable and durable.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

module.exports = ShowContentUser;
