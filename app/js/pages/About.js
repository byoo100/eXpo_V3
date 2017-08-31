import React from "react";
import { connect } from "react-redux";
import LazyLoad from 'react-lazyload';

import { hideNav } from "../actions/navActions";




@connect( (store) => {
  return {
    collapsed: store.nav.collapsed,
  };
})
export default class About extends React.Component {

  componentWillMount() {

    if( !this.props.collapsed){
      this.props.dispatch(hideNav());
      window.scrollTo(0, 0);
    }
  }


  render() {

    return(
      <div id="page-content" class="single-page">

        <section id="about-web" class="page-section">
          <LazyLoad><div class="about-container">

            <div class="web-text">
              <div class="web-text-wrap">
                <h3>Web Development</h3>
                <p>
                  Currently I've been operating in the frontend. My goal is to eventually become a full stack developer.
                </p>
                <p>
                  The focus for this site is to combine ReactJS, Redux, Babel ES6, Webpack and Wordpress REST API.
                  The files can be viewed from the <a href="https://github.com/byoo100/eXpo_V3" target="_blank">github repository</a>.
                </p>
                <ul>
                  <li>React and Redux is the View Layer.</li>
                  <li>Babel ES6 cleans up the code.</li>
                  <li>Webpack compiles the files.</li>
                  <li>Wordpress is used as the CMS.</li>
                  <li>The REST API is used to retrieve the content.</li>
                </ul>
                <p>
                  When working with Wordpress, I tend to use <a href="https://underscores.me/" target="_blank">underscores.me</a>.
                  It is a skeletal framework that provides only the essential needs to run a wordpress site; everything else needs to be added and styled.
                </p>
              </div>
            </div>

            <div class="web-featured">

              <div class="icon">
                <span class="icon-image react"/>
                <span class="icon-name">React</span>
              </div>

              <div class="icon">
                <span class="icon-image redux"/>
                <span class="icon-name">Redux</span>
              </div>

              <div class="icon">
                <span class="icon-image wordpress"/>
                <span class="icon-name">Wordpress</span>
              </div>

              <div class="icon">
                <span class="icon-image webpack"/>
                <span class="icon-name">Webpack</span>
              </div>

              <div class="icon">
                <span class="icon-image github"/>
                <span class="icon-name">Github</span>
              </div>

              <div class="icon">
                <span class="icon-image babel"/>
                <span class="icon-name">Babel</span>
              </div>

              <div class="icon">
                <span class="icon-image swiper"/>
                <span class="icon-name">Swiper</span>
              </div>

              <div class="icon">
                <span class="icon-image acf"/>
                <span class="icon-name">Advanced Custom Fields</span>
              </div>

              <div class="icon">
                <span class="icon-image atom"/>
                <span class="icon-name">Atom</span>
              </div>

            </div>

          </div></LazyLoad>
        </section>



        <section id="about-video" class="page-section">
          <LazyLoad><div class="about-container">

            <div class="video-featured">
              <div className="video-featured-wrap">
                <img class="video-image" src="./images/camera-305-compressed.png"/>

                <ul class="video-icons">
                  <li class="icon adobe-premiere"></li>
                  <li class="icon adobe-aftereffects"></li>
                  <li class="icon adobe-audition"></li>
                  <li class="icon wirecast"></li>
                </ul>
              </div>
            </div>

            <div class="video-text">
              <div class="video-text-wrap">
                <h3>Media</h3>
                <p>
                  The cameras I am familiar with are Canon XF305, XF100, XLH1s, and XHA1.
                  These cameras were used for broadcasting and/or filming live events.
                </p>
                <p>
                  I've been a camera assistant, camera operator, switcher, and an assistant technical director for multi-camera events.
                </p>
              </div>
            </div>

          </div></LazyLoad>
        </section>



        <section id="about-dslr" class="page-section">
          <LazyLoad><div class="about-container">

            <div class="dslr-text">
              <div class="dslr-text-wrap">
                <h3>DSLR Cameras</h3>
                <p>
                  The cameras that I've used are Nikon D610, Canon 6D and T2i rebel.
                  I a photography enthusiast. My favorite is portrait photography.
                </p>
                <p>
                  To be able to bring out the best features of a person, to be able to control every aspect of a scene and to adapt to all types intangibles, makes the whole process very difficult.
                  I would like to be a part of a full set and see all the moving pieces work together.
                </p>
              </div>
            </div>

            <div class="dslr-featured">
              <div className="dslr-featured-wrap">
                <img class="dslr-image" src="./images/camera-nikon-compressed.png"/>

                <ul class="dslr-icons">
                  <li class="icon adobe-photoshop"></li>
                  <li class="icon adobe-lightroom"></li>
                  <li class="icon adobe-illustrator"></li>
                </ul>
              </div>
            </div>

          </div></LazyLoad>
        </section>

      </div>
    );
  }
}
