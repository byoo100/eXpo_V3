import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";
import _ from "underscore";

import * as action from "../actions/basicActions";
import { fetchSingle, requestSingle } from "../actions/singleActions";
import { hideNav } from "../actions/navActions";

import Loading from "../components/sub/Loading";

const Entities = require('html-entities').AllHtmlEntities;
const html = new Entities();



@connect( (store) => {
  return {
    single: store.single.single,
    fetching: store.single.fetching,
    collapsed: store.nav.collapsed,
  };
})

export default class Single extends React.Component {

  componentWillMount() {
    this.onloadHideNav();
    this.setSingleProps();
  }

  onloadHideNav() {
    this.props.dispatch(hideNav());
    window.scrollTo(0, 0);
  }

  setSingleProps() {
    if (!this.props.single) {
      const pathName = this.props.location.pathname;
      let posttype = '';

      if( pathName.indexOf('blog/') > 0 ){ posttype = 'posts'; }
      else if( pathName.indexOf('media/') > 0 ){ posttype = 'post-media'; }
      else if( pathName.indexOf('projects/') > 0 ){ posttype = 'post-projects'; }

      this.props.dispatch( requestSingle() );
      this.props.dispatch( fetchSingle(posttype, this.props.params.articleSlug) );
    }
  }

  setFeaturedVideo() {
    if(this.props.single) {
      const video = this.props.single.featured.video;
      let description = "";

      return(
        video.map((item, index) => (
          description = item.description ? (
            <div class="video-description">
              { ReactHtmlParser( html.decode(item.description) ) }
            </div>
          ) : "",

          <div class="featured-item" key={index}>

            <div class="video-link">
              { ReactHtmlParser(item.link) }
            </div>

            { description }
          </div>
        ))
      );
    }
  }


  setFeaturedImage(image) {
    return(
      <div class="featured-item">
        { action.imageSrcSet(image, "featured-image") }
      </div>
    );
  }


  render() {
    const { fetching, single } = this.props;
    let cats = "", tags = "", featuredVideos = "", featuredImage = "";
    var posttype = "", printPostType = "";

    if( single ){
      posttype = single.type;

      cats = single.categories ? action.setCategories( single ) : "";

      tags = single.tags ? action.setTags( single ) : "";

      if( single.featured.video.length > 0 ){
        featuredVideos = this.setFeaturedVideo();
      } else if( _.size(single.featured.thumbnail) > 0 ){
        featuredImage = this.setFeaturedImage(single.featured.thumbnail);
      }

      printPostType = (posttype == "post") ? "Article" :
                      (posttype == "post-media") ? "Media" :
                      (posttype == "post-projects") ? "Project" :
                      (posttype == "post-photography") ? "Photography" : "";
    }


    return(
      <div id="page-content" class="blog-index">

        <Loading fetching={fetching}/>

        <article class="single">
          {
            single ? (
              <div class="single-wrapper">

                <h1 class="post-title">{ html.decode(single.title) }</h1>

                <div class="entry-meta">
                  <div class="meta-date">Published <span class="posted-on">{single.date}</span></div>
                  <div class="cat-list">
                    <span class={"post-type color-" + posttype}>{printPostType}</span>
                    { cats }
                  </div>
                </div>

                <div class="featured-content">
                  { featuredVideos }
                  { featuredImage }
                </div>

                <div class="post-content">
                  { single.content ? ReactHtmlParser( html.decode(single.content) ) : "" }
                  <div class="tag-list">{ tags }</div>
                </div>
              </div>
            ) : ""
          }
        </article>
      </div>
    );
  }
}
