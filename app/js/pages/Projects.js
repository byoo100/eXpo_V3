import React from "react";
import { connect } from "react-redux";

import { fetchProjects, requestProjects } from "../actions/projectsActions";
import { hideNav } from "../actions/navActions";

import CardLayout from "../components/sub/CardLayout";
import Featured from "../components/sub/Featured";
import Loading from "../components/sub/Loading";


@connect( (store) => {
  return {
    posts: store.projects.posts,
    page: store.projects.page,
    fetching: store.projects.fetching,
    single: store.single.single,
    collapsed: store.nav.collapsed,
  };
})

export default class Projects extends React.Component {

  componentWillMount() {
    const { fetching, posts } = this.props;

    this.onloadHideNav();

    if( !fetching && !posts.length ) {
      this.props.dispatch(requestProjects());
      this.props.dispatch(fetchProjects(this.props.page));
    }
  }

  onloadHideNav() {
    this.props.dispatch(hideNav());
    window.scrollTo(0, 0);
  }


  render() {
    const { fetching, posts } = this.props;

    return(
      <div id="page-content" class="projects-index">

        <Loading fetching={fetching}/>

        {
          posts.length ? (
            <div class="projects-wrapper">
              <Featured content={this.props.posts} />
              <CardLayout content={this.props.posts}/>
            </div>
          ) : ""
        }

      </div>
    );
  }
}
