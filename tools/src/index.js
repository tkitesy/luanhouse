import React, { Component } from "react";
import styles from "./styles.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Pagination } from './pagination'

function getRender(Comp) {
  return function(mountNode, props) {
    ReactDOM.render(<Comp {...props} />, mountNode);
  };
}

export const renderPagination = getRender(Pagination);
export const renderHeader = getRender(Header);
export const renderFooter = getRender(Footer);
