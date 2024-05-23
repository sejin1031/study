import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Feed from "./components/Feed";
import "./Main.css"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render () {
    return (
      <div className="main-container">
        <div className="sub-container">
          <Nav />
        </div>
        <div className="sub-container">
          <Header />
          <Feed />
        </div>
      </div>
    )
  }
}

export default Main;