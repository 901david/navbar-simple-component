import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import "./NavigatorCircle.css";
class NavigatorCircleBase extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { position, className } = this.props;
    return (
      <div className={`navigation ${className}`}>
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>
                About
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>
                Settings
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>
                Cart
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>
                Sponsors
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

NavigatorCircleBase.defaultProps = {
  position: "right"
};

NavigatorCircleBase.propTypes = {
  position: PropTypes.oneOf(["left", "right"])
};

const NavigatorCircle = styled(NavigatorCircleBase)`
  background: lightgray;

  // .navigation__checkbox {
  //   display: none;
  // }
  // .navigation__button {
  //   background: rgb(255, 255, 255);
  //   border-radius: 50%;
  //   width: 7rem;
  //   height: 7rem;
  //   position: fixed;
  //   top: 6rem;
  //   right: 6rem;
  //   z-index: 2000;
  //   box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  //   cursor: pointer;
  // }
  // .navigation__background {
  //   background: radial-gradient(rgb(98, 255, 98), rgb(12, 143, 12));
  //   border-radius: 50%;
  //   width: 6rem;
  //   height: 6rem;
  //   position: fixed;
  //   top: 6.5rem;
  //   right: 6.5rem;
  //   z-index: 1000;
  //   transition: all 0.5s ease-in-out;
  // }
  // .navigation__nav {
  //   height: 100vh;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 1500;
  //   opacity: 0;
  //   width: 0;
  //   transition: all 0.6s;
  // }
  // .navigation__list {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   width: 100%;
  //   transform: translate(-50%, -50%);
  //   list-style: none;
  //   text-align: center;
  // }
  // .navigation__item {
  //   margin: 1rem;
  // }
  // .navigation__link:link,
  // .navigation__link:visited {
  //   display: inline-block;
  //   text-transform: uppercase;
  //   color: #fff;
  //   text-decoration: none;
  //   font-weight: 300;
  //   font-size: 3rem;
  //   padding: 1rem 2rem;
  //   background-image: linear-gradient(
  //     120deg,
  //     transparent 0%,
  //     transparent 50%,
  //     #fff 50%
  //   );
  //   background-size: 220%;
  //   transition: all 0.4s;
  // }
  // .navigation__link:hover,
  // .navigation__link:active {
  //   background-position: 100%;
  //   color: #000;
  //   transform: translateX(1rem);
  // }
  // .navigation__link > span {
  //   margin-right: 1rem;
  // }
  // .navigation__checkbox:checked ~ .navigation__background {
  //   transform: scale(80);
  // }
  // .navigation__checkbox:checked ~ .navigation__nav {
  //   width: 100%;
  //   opacity: 1;
  // }
  // .navigation__icon {
  //   margin-top: 3.4rem;
  //   margin-left: 2rem;
  //   top: 0;
  // }
  // .navigation__icon::before,
  // .navigation__icon::after {
  //   content: "";
  //   left: 0;
  //   transform: rotate(0deg);
  //   transition: all 0.2s;
  // }

  // .navigation__icon,
  // .navigation__icon::before,
  // .navigation__icon::after {
  //   width: 3rem;
  //   height: 2px;
  //   background: #000;
  //   display: inline-block;
  //   position: absolute;
  // }

  // .navigation__icon::before {
  //   top: -0.8rem;
  // }
  // .navigation__icon::after {
  //   top: 0.8rem;
  // }
  // .navigation__button:hover .navigation__icon::before {
  //   top: -1rem;
  // }
  // .navigation__button:hover .navigation__icon::after {
  //   top: 1rem;
  // }
  // .navigation__checkbox:checked + .navigation__button .navigation__icon {
  //   background: transparent;
  // }

  // .navigation__checkbox:checked
  //   + .navigation__button
  //   .navigation__icon::before {
  //   transform: rotate(135deg);
  //   top: 0;
  // }

  // .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
  //   transform: rotate(-135deg);
  //   top: 0;
  // }
`;

export default NavigatorCircle;
