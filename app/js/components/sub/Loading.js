import React from "react";


export default class Loading extends React.Component {

  render() {

    var loadingStyle = {};

    if( this.props.fetching ){
      loadingStyle = {
        display: "block"
      }
    } else {
      loadingStyle = {
        display: "none"
      }
    }

    return(
      <div class="loading zlayer4" style={ loadingStyle }>
        <svg width="160px"  height="160px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ellipsis" style={{background: 'none'}}>
          <circle cx="84" cy="50" r="0" fill="#3b4368">
            <animate attributeName="r" values="10;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
            <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
          </circle>
          <circle cx="39.3682" cy="50" r="10" fill="#5e6fa3">
            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="-1.5s"></animate>
            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="-1.5s"></animate>
          </circle>
          <circle cx="16" cy="50" r="6.87299" fill="#689cc5">
            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="-0.75s"></animate>
            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="-0.75s"></animate>
          </circle>
          <circle cx="84" cy="50" r="3.12701" fill="#93dbe9">
            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
          </circle>
          <circle cx="73.3682" cy="50" r="10" fill="#3b4368">
            <animate attributeName="r" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
            <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="3s" repeatCount="indefinite" begin="0s"></animate>
          </circle>
        </svg>
      </div>
    );
  }
}
