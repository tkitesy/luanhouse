import React from "react";

export function HouseCard({
  href,
  number,
  area,
  listCount,
  structure,
  communityName,
  sqm,
  floor,
  postDate,
  totalPrice,
  mortgageState = "",
  sqmPrice
}) {
  return (
    <div class="views-row">
      <a href={href}>
        <div class="house-information ">
          <div class="house-information__select-icon" />
          <div class="house-information__title">
            <span class="house-information__title__number">
              房源核验码：{number}
            </span>
            <span class="house-information__title__area">{area}</span>
          </div>
          <div class="house-information__details">
            <div class="house-information__agencies">
              <div class="listing-count">
                由 <strong>{listCount}</strong> 家机构挂牌
              </div>
            </div>
            <div class="house-information__area">
              <h2 class="house-information__area__community-name">
                {communityName}
              </h2>
              <div class="house-information__area__sqm">
                <span>约 </span>
                <strong>{sqm}</strong>
                <span> 平米</span>
              </div>
            </div>
            <div class="house-information__detail">
              <div class="field-house-information-detail">
                <ul class="house-information__detail__list">
                  <li>
                    <i class="icons icons--structure" />
                    <span>{structure}</span>
                  </li>
                  <li>
                    <i class="icons icons--floor" />
                    <span>共 {floor} 层</span>
                  </li>
                  <li>
                    <i class="icons icons--direction" />
                    <span class="mortgage-state">{mortgageState}</span>
                  </li>
                </ul>
              </div>
              <div class="field-post-date">
                <div class="house-post-date">{postDate}</div>
              </div>
            </div>
          </div>
          <div class="house-information__price">
            <div class="house-information__price__total">
              <strong>{totalPrice}</strong>
              <span> 万</span>
            </div>
            <div class="house-information__price__sqm">
              平均 {sqmPrice} 万元/平方米
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
