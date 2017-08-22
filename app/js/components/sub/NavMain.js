import React from "react";
import { IndexLink, Link } from "react-router";

import NavLink from "./Navlink";
import SiteLogo from "../../../images/brianyoo.svg";

export default class NavMain extends React.Component {


  render() {

    var toggleMenu;

    if( !this.props.collapsed ){
      toggleMenu = " active";
    } else {
      toggleMenu = "";
    }

    return(
      <div id="nav-main" class={"zlayer2" + toggleMenu}>

        <div id="nav-header">
          <button class="mobile-close" onClick={ this.props.childClose }>&times;</button>
        </div>

        <div id="nav-center-logo">
          <object type="image/svg+xml" class="mobile-logo" data={SiteLogo}></object>
        </div>

        <ul id="nav-pre-1">

        </ul>

        <ul id="nav-pre-2" class="social-list">
          <li>
            <a href="https://github.com/byoo100" class="social-github" target="_blank"><span class="screen-text-reader">facebook</span></a>
          </li>
          <li>
            <a href="https://www.instagram.com/bryo_o" class="social-instagram" target="_blank"><span class="screen-text-reader">instagram</span></a>
          </li>
        </ul>

        <ul id="nav-list-1">
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>

        <ul id="nav-list-2">
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <NavLink to="/photography">Photography</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>
    );
  }
}
