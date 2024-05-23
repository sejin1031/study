import React from "react";
import Swiper from "swiper";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper: null,
    }
  };

  initSwiper () {
    this.swiper = new Swiper("swiper-container", {
      
    })

    console.log(this.swiper)
  }

  componentDidMount() {
    this.initSwiper();
  }

  render () {
    return (
      <div className="header-container">
        
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-item">123</div>
            <div className="swiper-item">123</div>
          </div>
        </div>

      </div>
    )
  }
}

export default Header;