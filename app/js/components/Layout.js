import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";


@connect( (store) => {
  return {
    posts: store.blog.posts,
    media: store.media.media,
    single: store.single.single,
    collapsed: store.nav.collapsed,
  };
})

export default class Layout extends React.Component {

  render() {

    return(
      <main id="mastpage">
        <Header />
          { this.props.children }
        <Footer />
      </main>
    );
  }
}
