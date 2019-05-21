import React, { Component } from "react";
import styles from "./styles.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Pagination } from './pagination'
import {HallItems} from './hall-items'
import {PublicityScrollPanel} from './scroll-panel'

function getRender(Comp) {
  return function(mountNode, props) {
    ReactDOM.render(<Comp {...props} />, mountNode);
  };
}

export const renderPagination = getRender(Pagination);
export const renderHeader = getRender(Header);
export const renderFooter = getRender(Footer);
export const renderHallItems = getRender(HallItems);
export const renderPublicityScrollPanel = getRender(PublicityScrollPanel);
