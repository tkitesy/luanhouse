import React from "react";

export function Header({logoUrl}) {
  return (
    <React.Fragment>
      <div class="cnnbfdc-header__top__left">
        <img src={logoUrl} />
      </div>
      <ul class="cnnbfdc-header__top__center">
        <li>
          <a href="../home/index.html">首页</a>
        </li>
        <li>
          <a href="../building/index.html">商品房</a>
        </li>
        <li>
          <a href="../esf/index.html">二手房</a>
        </li>
        <li>
          <a href="../building/index.html">住房租赁</a>
        </li>
        <li>
          <a href="../cx/index.html">信用评价</a>
        </li>
      </ul>
      <ul class="cnnbfdc-header__top__right">
        <li>
          <a href="../querytools/index.html">
            <i class="icon-compass" />办事大厅
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
