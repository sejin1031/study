import React from "react";
import "./components.css"

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render () {
    return (
      <div className="nav-container">
        <div className="logo">
          <a href="https://instagram.com">Clonestagram</a>
        </div>

        <ul className="nav-list">
          <li>Search</li>
          <li>People</li>
          <li>Favorite</li>
        </ul>
        
      </div>
    )
  }
}

export default Nav;