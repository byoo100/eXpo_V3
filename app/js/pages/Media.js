import React from "react";
import { connect } from "react-redux";

import { fetchMedia, requestMedia } from "../actions/mediaActions";
import { hideNav } from "../actions/navActions";

import CardLayout from "../components/sub/CardLayout";
import Featured from "../components/sub/Featured";
import Loading from "../components/sub/Loading";


@connect( (store) => {
  return {
    posts: store.media.posts,
    page: store.media.page,
    fetching: store.media.fetching,
    single: store.single.single,
    collapsed: store.nav.collapsed,
  };
})

export default class Media extends React.Component {

  componentWillMount() {
    const { fetching, posts } = this.props;

    this.onloadHideNav();

    if( !fetching && !posts.length ) {
      this.props.dispatch(requestMedia());
      this.props.dispatch(fetchMedia(this.props.page));
    }
  }

  onloadHideNav() {
    this.props.dispatch(hideNav());
    window.scrollTo(0, 0);
  }


  render() {
    this.props.dispatch(hideNav());
    window.scrollTo(0, 0);

    const { fetching, posts } = this.props;

    return(
      <div id="page-content" class="media-index">

        <Loading fetching={fetching}/>

        {
          posts.length ? (
            <div class="media-wrapper">
              <Featured content={this.props.posts} />
              <CardLayout content={this.props.posts}/>
            </div>
          ) : ""
        }

      </div>
    );
  }
}
