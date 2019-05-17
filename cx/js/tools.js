var tools = (function (exports,React) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/* add css styles here (optional) */\n\n.styles_test__3OKZ1 {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n";
  styleInject(css);

  function Header(_ref) {
    var logoUrl = _ref.logoUrl;

    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        "div",
        { "class": "cnnbfdc-header__top__left" },
        React__default.createElement("img", { src: logoUrl })
      ),
      React__default.createElement(
        "ul",
        { "class": "cnnbfdc-header__top__center" },
        React__default.createElement(
          "li",
          null,
          React__default.createElement(
            "a",
            { href: "../home/index.html" },
            "\u9996\u9875"
          )
        ),
        React__default.createElement(
          "li",
          null,
          React__default.createElement(
            "a",
            { href: "../building/index.html" },
            "\u5546\u54C1\u623F"
          )
        ),
        React__default.createElement(
          "li",
          { "class": "active" },
          React__default.createElement(
            "a",
            { href: "../esf/index.html" },
            "\u4E8C\u624B\u623F"
          )
        ),
        React__default.createElement(
          "li",
          null,
          React__default.createElement(
            "a",
            { href: "../building/index.html" },
            "\u4F4F\u623F\u79DF\u8D41"
          )
        ),
        React__default.createElement(
          "li",
          null,
          React__default.createElement(
            "a",
            { href: "../cx/index.html" },
            "\u4FE1\u7528\u8BC4\u4EF7"
          )
        )
      ),
      React__default.createElement(
        "ul",
        { "class": "cnnbfdc-header__top__right" },
        React__default.createElement(
          "li",
          null,
          React__default.createElement(
            "a",
            { href: "../querytools/index.html" },
            React__default.createElement("i", { "class": "icon-compass" }),
            "\u529E\u4E8B\u5927\u5385"
          )
        )
      )
    );
  }

  function getRender(Comp) {
    return function (mountNode, props) {
      ReactDOM.render(React__default.createElement(Comp, props), mountNode);
    };
  }

  var renderHeader = getRender(Header);

  exports.renderHeader = renderHeader;

  return exports;

}({},React));
//# sourceMappingURL=tools.js.map
