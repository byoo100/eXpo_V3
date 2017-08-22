import React from "react";
import ReactHtmlParser from 'react-html-parser';

import { Link } from "react-router";


/**
 * Extracts single post for store
 *
 * @param {object}
 * @return {object}
 */
export function filterData(data) {
  if(data.length == 1) {
    var posts = {
      "id": data[0].id,
      "type": data[0].type,
      "slug": data[0].slug,
      "link": data[0].link,
      "date": data[0].meta_content.post_date,
      "author": data[0].meta_content.author,
      "title": data[0].title.rendered,
      "featured": data[0].featured_content,
      "content": data[0].content.rendered,
      "excerpt": data[0].excerpt.rendered,
      "categories": data[0].meta_content.categories,
      "tags": data[0].meta_content.tags,
    };
  }
  return posts;
}

/**
 * Extracts a list of posts for store
 *
 * @param {object}
 * @return {array}
 */
export function filterDataList(data) {
  var posts = [];

  data.map((item, index) => {
    posts[index] = {
      "id": item.id,
      "type": item.type,
      "slug": item.slug,
      "link": item.link,
      "date": item.meta_content.post_date,
      "author": item.meta_content.author,
      "title": item.title.rendered,
      "featured": item.featured_content,
      "content": item.content.rendered,
      "excerpt": item.excerpt.rendered,
      "categories": item.meta_content.categories,
      "tags": item.meta_content.tags,
    }
  });

  return posts;
}


/**
 * Create Image SrcSet
 *
 * @param {array, str}
 * @return <img>
 */
export function imageSrcSet(image, classes) {
  return(
    <img class={classes}
    src={image.main}
    srcSet={image.sm + " 520w, " +
            image.md + " 760w, " +
            image.main + " 1150w, " +
            image.xl + " 1500w"} />
  );
}


/*
 * trimExcerpt
 * returns trimmed excerpt
 */
export function trimExcerpt(string, limit) {

  var strippedString = string.replace(/\<p\>|\<\/p\>|\<a.*?\>|\<\/a\>/gi, '');
  var array = strippedString.split(" ", 30);
  var string = array.join(" ");

  return string;
}


export function setCategories(data) {
  if( data ){
    const cats = data.categories;

    return(
      cats.map((item, index) => (
        <span class="cat-item" key={index}>{ item.name }</span>
      ))
    );
  }
}


export function setTags( data ) {
  if( data ) {
    console.log("HERE HERE");
    console.log(data);

    return(
      data.tags.map((item, index) => (
        <span class="tag-item" key={index}>{ item.name }</span>
      ))
    );
  }
}
