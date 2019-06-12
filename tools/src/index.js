import React, { Component } from "react";
import styles from "./styles.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { Pagination } from "./pagination";
import { HallItems } from "./hall-items";
import { PublicityScrollPanel, RefundScrollPanel, DevelopScrollPanel, LicenseScrollPanel } from "./scroll-panel";
import { HouseCard } from "./house-card";
import { GenericTable } from './table'

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
export const renderHouseCards = getRender(({ houseInfos = [] }) => {
  return houseInfos.map(houseInfo => (
    <HouseCard key={houseInfo.href} {...houseInfo} />
  ));
});
export const renderRefundScrollPanel = getRender(RefundScrollPanel);
export const renderDevelopScrollPanel = getRender(DevelopScrollPanel);
export const renderLicenseScrollPanel = getRender(LicenseScrollPanel);

export const renderGenericTable = getRender(GenericTable);
