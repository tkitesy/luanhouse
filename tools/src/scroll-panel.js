import React, { useRef, useEffect } from "react";
import $ from "jquery";

function useScroolForever() {
  const ref = useRef(null);
  useEffect(() => {
    const current = ref.current;
    $(current).scrollForever({
      continuous: false,
      dir: "top",
      delayTime: 2000,
      num: 2
    });
    return () => {
      $(current).off();
    };
  }, []);
  return ref;
}

export function PublicityScrollPanel({ label, items, href }) {
  const ref = useScroolForever();
  return (
    <div class="publicty-box">
      <div class="publicty-box__title">
        <h4>{label}</h4>
        <a href={href}>更多</a>
      </div>
      <div class="hall-publicity__content" ref={ref}>
        <ul>
          {items.map(item => {
            const { label, href, time } = item;
            return (
              <li ke={href}>
                <a href={href}>
                  <span>{label}</span>
                  <span class="span-right">{time}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function RefundScrollPanel({ items = [], moreHref }) {
  const ref = useScroolForever();
  return (
    <React.Fragment>
      <div class="home-box__title">
        <div class="home-box__title__left index_title">
          <div class="index_title_left">
            <h4>累计合同备案撤销量</h4>
          </div>
          <div class="index_title_right">
            <a href={moreHref}>更多&gt;&gt;</a>
          </div>
        </div>
      </div>
      <div
        class="home-box__center refund-publicity__content"
        style={{ overflow: "hidden", height: "330px" }}
        ref={ref}
      >
        <ul>
          {items.map(item => (
            <li>
              <dl>
                <dt>{item.label}</dt>
                <dd>
                  <span>累计合同撤销数：{item.count}</span>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export function DevelopScrollPanel({ moreHref, items = [] }) {
  const ref = useScroolForever();
  return (
    <React.Fragment>
      <div class="home-box__title">
        <div class="home-box__title__left index_title">
          <div class="index_title_left">
            <h4>成交记录</h4>
          </div>
          <div class="index_title_right">
            <a href="contract.html">更多&gt;&gt;</a>
          </div>
        </div>
      </div>
      <div
        class="home-box__center develop-publicity__content"
        style={{ overflow: "hidden", height: "330px" }}
        ref={ref}
      >
        <ul>
          {items.map(item => (
            <li>
              <dl>
                <dt>{item.label}</dt>
                <dd>
                  <span style={{float: "left"}}>{item.num}</span>
                  <span style={{float: "right"}}>{item.date}</span>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export function LicenseScrollPanel({ moreHref, items = [] }) {
  const ref = useScroolForever();
  return (
    <React.Fragment>
      <div class="home-box__title">
        <div class="home-box__title__left index_title">
          <div class="index_title_left">
            <h4>非独家委托转自行成交量</h4>
          </div>
          <div class="index_title_right">
            <a href={moreHref}>更多&gt;&gt;</a>
          </div>
        </div>
      </div>
      <div
        class="home-box__center license-publicity__content"
        style={{ overflow: "hidden", height: "330px" }}
        ref={ref}
      >
        <ul>
          {items.map(item => (
            <li>
              <dl>
                <dt>{item.label}</dt>
                <dd>
                  <span style={{float: "left"}}>
                    累计转自行成交数：{item.count}
                  </span>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
