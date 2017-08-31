import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import store from "./store";

// Stylesheet
import "./sass/style.scss";
import "swiper/dist/css/swiper.css";


// Components
import Layout from "./js/components/Layout";

// Pages
import About from "./js/pages/About";
import Blog from "./js/pages/Blog";
import Media from "./js/pages/Media";
import Photography from "./js/pages/Photography";
import Projects from "./js/pages/Projects";
import Single from "./js/pages/Single";

const app = document.getElementById('app');



const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Blog } />
      <Route path="/blog/:articleSlug" component={ Single } />

      <Route path="/about" component={ About } />

      <Route path="/media" component={ Media } />
      <Route path="/media/:articleSlug" component={ Single } />

      <Route path="/photography" component={ Photography } />

      <Route path="/projects" component={ Projects } />
      <Route path="/projects/:articleSlug" component={ Single } />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>, app);
