import React, {useRef, useEffect} from "react";
import $ from 'jquery'

export function PublicityScrollPanel({ label, items, href }) {
  const ref = useRef(null);
  useEffect(() => {
      const current = ref.current
      $(current).scrollForever({
        continuous: false,
        dir: "top",
        delayTime: 2000,
        num: 2
      });
      return ()=> {
        $(current).off();
      }
  }, [])
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
