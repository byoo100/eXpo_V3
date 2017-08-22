import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import "swiper/dist/js/swiper.min.js";

import { imageSrcSet, trimExcerpt } from "../../actions/basicActions";
import { setSingle } from "../../actions/singleActions";

const Entities = require('html-entities').AllHtmlEntities;
const html = new Entities();




@connect( (store) => {
  return {
    single: store.single.single
  };
})

export default class Featured extends React.Component {

  setSwiperContent(data) {

    var featured = [], count, posttype = "", linkPost = "";

    if(data.length){

     posttype = data[0].type;

     linkPost = (posttype == "post") ? "blog" :
                (posttype == "post-media") ? "media" :
                (posttype == "post-projects") ? "projects" :
                (posttype == "post-photography") ? "photography" : "";

      count = (data.length > 3) ? 3 : data.length;

      for( var i = 0; i < count; i++ ) {

        featured.push(
          <div class="swiper-slide" key={i}>
            <div class="swiper-link">
              <span class={"swiper-tag color-" + posttype}>{ linkPost }</span>
              <span class="swiper-title">
                <Link to={"/" + linkPost + "/" + data[i].slug} onClick={() => this.setSingleStore(data[i])}>
                  { html.decode(data[i].title) }
                </Link>
              </span>
              <span class="swiper-excerpt">
                <Link to={"/" + linkPost + "/" + data[i].slug} onClick={() => this.setSingleStore(data[i])}>
                  { html.decode( trimExcerpt(data[i].excerpt) ) }
                </Link>
              </span>
            </div>
            <div class="swiper-vignette"></div>
            { imageSrcSet(data[i].featured.thumbnail, "swiper-image") }
          </div>
        );
      }
    }
    return featured;
  }


  initSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: '3000',
        shortSwipes: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        autoplayDisableOnInteraction: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      });
  }


  setSingleStore(data) {
    this.props.dispatch(setSingle(data))
  }


  render() {
    const { content } = this.props;
    let swiper = [];

    if( content.length > 0 ){
      swiper = this.setSwiperContent(content);
      setTimeout(() => {this.initSwiper()}, 200);
    }

    return(

      <section id="featured-posts">

        <div class="swiper-container">
            <div class="swiper-wrapper">
              { swiper }
            </div>

            <div class="swiper-pagination"></div>
        </div>

      </section>
    );
  }

}//Swiper
