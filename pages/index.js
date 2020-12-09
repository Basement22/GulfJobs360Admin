import React, { Component } from "react";
import Router from "next/router";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/auth/login");
  };

  render() {
    return <div />;
  }
}
