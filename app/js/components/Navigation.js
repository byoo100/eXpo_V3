import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";
import { hideNav, showNav, toggleNav } from "../actions/navActions";

//sub
import NavMain from "./Sub/NavMain";

@connect( (store) => {
  return {
    collapsed: store.nav.collapsed,
  };
})

export default class Navigation extends React.Component {

  childClose(e) {
    e.preventDefault();
    this.props.dispatch( hideNav() );
  }


  render() {
    var toggleMenu;

    const nav = this.props;

    if( !nav.collapsed ){
      toggleMenu = " active";
    } else {
      toggleMenu = "";
    }

    return(
      <nav class="site-navigation" role="navigation">
        <div class="nav-container">

          <div class="mobile-title">
            <span class="first-title">Brian</span>
            <span class="last-title">Yoo</span>
          </div>

          <button type="button" class="menu-button" onClick={ () => nav.dispatch(toggleNav()) } >
            <span class="screen-text-reader">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <NavMain collapsed={ nav.collapsed } childClose={ this.childClose.bind(this) } />
        </div>

        <div id="dark-overlay" class={ "zlayer1" + toggleMenu } onClick={ () => nav.dispatch(toggleNav()) }></div>

      </nav>
    );// return
  }// render
}// class
