import React from "react";

function HallItem({ groupName, items }) {
  return (
    <React.Fragment>
      <h4>{groupName}</h4>
      <div class="item-box__items">
        {items.map(({ label, imgUrl, href }) => {
          return (
            <div key={href} class="item-box__item">
              <a href={href} target="_blank">
                <img src={imgUrl} alt={label} />
                <div class="txt">
                  <span>{label}</span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export function HallItems({ groups }) {
  return (
    <React.Fragment>
      {groups.map(group => {
        return <HallItem key={group.name} {...group} />;
      })}
    </React.Fragment>
  );
}
