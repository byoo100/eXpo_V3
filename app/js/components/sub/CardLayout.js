import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router";
import { connect } from "react-redux";

import { setCategories } from "../../actions/basicActions";
import { setSingle } from "../../actions/singleActions";

const Entities = require('html-entities').AllHtmlEntities;
const html = new Entities();



@connect( (store) => {
  return {
    single: store.single.single
  };
})

export default class CardLayout extends React.Component {

  setCardLayout(data) {

    let cardList = [];
    var posttype = "", linkPost = "";

    if(data.length){
      posttype = data[0].type;

      linkPost = (posttype == "post") ? "blog" :
                 (posttype == "post-media") ? "media" :
                 (posttype == "post-projects") ? "projects" :
                 (posttype == "post-photography") ? "photography" : "";

      data.map((item, index) => (

        cardList.push(
          <article key={index} class="card-single">

            <figure class="featured-image">
              <Link to={"/" + linkPost + "/" + item.slug} onClick={() => this.setSingleStore(item)}>
                <img src={item.featured.thumbnail.md} />
              </Link>
            </figure>

            <div class="post-title">
              <Link to={"/" + linkPost + "/" + item.slug} onClick={() => this.setSingleStore(item)}>
                <h1>{ html.decode( item.title )}</h1>
              </Link>
            </div>

            <div class="entry-meta">
              <div class="meta-date"><span class="posted-on">{item.date}</span></div>
              <div class="cat-list">
                <span class={"post-type color-" + posttype}>{ linkPost }</span>
                { setCategories( item ) }
              </div>
            </div>

            <div class="post-excerpt">
              {ReactHtmlParser( html.decode( item.excerpt) )}
            </div>

            <div class="readmore">
              <Link to={"/" + linkPost + "/" + item.slug} onClick={() => this.setSingleStore(item)}>
                Read More
              </Link>
            </div>
          </article>
        )
      ))
    }
    return cardList;
  }

  setSingleStore(data) {
    this.props.dispatch(setSingle(data))
  }


  render() {
    const { content } = this.props;
    let cardLayout = [];

    if( content.length > 0 ){
      const posttype = content[0].type;
      cardLayout = this.setCardLayout(content);
    }

    return(
      <section class="card-layout">
        <div class="card-wrapper">
          { cardLayout }
        </div>
      </section>
    );
  }

}//Swiper
