const React = require("react");

class IndexContent extends React.Component {
  render() {
    return (
      <>
        <div className="landingPage">
          <div className="textOver">LET US CRAFT</div>
          <img
            src="https://c.pxhere.com/photos/f0/6a/flatlay_overhead_craft_crafting_paper-1409997.jpg!d"
            alt=""
            id="landingImg"
          />
        </div>
      </>
    );
  }
}

module.exports = IndexContent;
