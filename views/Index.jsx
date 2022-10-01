const React = require("react");
const DefaultLayout = require("./layouts/Default");
const DefaultLayoutLog = require("./layouts/DefaultLog");
const IndexContent = require("./contents/IndexContent");

class Index extends React.Component {
  render() {
    const { log } = this.props;
    const { isAdmin } = this.props;
    const { cart } = this.props;
    console.log(log);
    if (log === "false") {
      return (
        <DefaultLayout title={"Sunny's Craft"} cart={cart}>
          <IndexContent></IndexContent>
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayoutLog title={"Sunny's Craft"} isAdmin={isAdmin} cart={cart}>
          <IndexContent></IndexContent>
        </DefaultLayoutLog>
      );
    }
  }
}

module.exports = Index;
