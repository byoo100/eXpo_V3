import React from "react";
import { connect } from "react-redux";

import { fetchPosts, requestPosts } from "../actions/blogActions";
import { hideNav } from "../actions/navActions";

import CardLayout from "../components/sub/CardLayout";
import Featured from "../components/sub/Featured";
import Loading from "../components/sub/Loading";


@connect( (store) => {
  return {
    posts: store.blog.posts,
    page: store.blog.page,
    fetching: store.blog.fetching,
    single: store.single.single,
    collapsed: store.nav.collapsed,
  };
})

export default class Blog extends React.Component {

  componentWillMount() {
    const { fetching, posts } = this.props;

    this.onloadHideNav();

    if( !fetching && !posts.length ) {
      this.props.dispatch(requestPosts());
      this.props.dispatch(fetchPosts(this.props.page));
    }
  }

  onloadHideNav() {
    this.props.dispatch(hideNav());
    window.scrollTo(0, 0);
  }


  render() {
    const { fetching, posts } = this.props;

    return(
      <div id="page-content" class="blog-index">

        <Loading fetching={fetching}/>

        {
          posts.length ? (
            <div class="blog-wrapper">
              <Featured content={posts} />
              <CardLayout content={posts}/>
            </div>
          ) : ""
        }

      </div>
    );
  }
}
