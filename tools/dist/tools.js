(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('jquery'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'jquery', 'react-dom'], factory) :
  (factory((global.tools = {}),global.React,global.$,global.ReactDOM));
}(this, (function (exports,React,$,ReactDOM$1) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  ReactDOM$1 = ReactDOM$1 && ReactDOM$1.hasOwnProperty('default') ? ReactDOM$1['default'] : ReactDOM$1;

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
          null,
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

  function Footer() {
    var tabs = React.useRef();
    var content = React.useRef();
    React.useEffect(function () {
      $(tabs.current).find("a").click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        var i = $(tabs.current).find(".bottom-navigation__item").index($(this).parent());

        $(this).parent().addClass("active").siblings().removeClass("active");

        $(content.current).find(".bottom-navigation__list").removeClass("active").eq(i).addClass("active");
      });
    }, []);
    return React__default.createElement(
      "div",
      { "class": "block block-block first last odd", id: "block-block-2" },
      React__default.createElement(
        "div",
        { "class": "bottom-navigation layout-center jquery-once-1-processed" },
        React__default.createElement(
          "ul",
          { "class": "bottom-navigation__list clearfix" },
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//esf.cnnbfdc.com/about/website" },
              "\u5E73\u53F0\u4ECB\u7ECD"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//esf.cnnbfdc.com/about" },
              "\u5173\u4E8E\u6211\u4EEC"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//esf.cnnbfdc.com/about/contactus" },
              "\u8054\u7CFB\u6211\u4EEC"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//esf.cnnbfdc.com/about/privacy" },
              "\u9690\u79C1\u58F0\u660E"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//esf.cnnbfdc.com/about/map" },
              "\u7F51\u7AD9\u5730\u56FE"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//www.cnnbfdc.com/page/notice/clf.html", target: "__blank" },
              "\u4E1A\u52A1\u5E73\u53F0\u767B\u5F55"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//www.cnnbfdc.com/home/newshome" },
              "\u623F\u4EA7\u65B0\u95FB"
            )
          ),
          React__default.createElement(
            "li",
            { "class": "bottom-navigation__item" },
            React__default.createElement(
              "a",
              { href: "//www.cnnbfdc.com/download" },
              "\u4E0B\u8F7D\u4E2D\u5FC3"
            )
          )
        ),
        React__default.createElement(
          "div",
          { "class": "bottom-navigation__tabs", ref: tabs },
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item active" },
              React__default.createElement(
                "a",
                { href: "#" },
                "\u56FD\u5BB6\u90E8\u59D4\u5385\u7F51\u7AD9"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "#" },
                "\u516D\u5B89\u5E02\u653F\u5E9C\u90E8\u95E8\u7F51\u7AD9"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "#" },
                "\u516D\u5B89\u5E02\u7ECF\u7EAA\u673A\u6784\u7F51\u7AD9"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "#" },
                "\u516D\u5B89\u5E02\u623F\u5730\u4EA7\u5F00\u53D1\u5546\u7F51\u7AD9"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "#" },
                "\u516D\u5B89\u5E02\u623F\u5730\u4EA7\u4FE1\u606F\u670D\u52A1\u7F51\u7AD9"
              )
            )
          )
        ),
        React__default.createElement(
          "div",
          { "class": "bottom-navigation__tab-content", ref: content },
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list active clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.gov.cn/", target: "_blank" },
                "\u4E2D\u592E\u653F\u5E9C\u95E8\u6237\u7F51\u7AD9"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.chinatax.gov.cn/", target: "_blank" },
                "\u56FD\u5BB6\u7A0E\u52A1\u603B\u5C40"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.realestate.cei.gov.cn/", target: "_blank" },
                "\u4E2D\u56FD\u623F\u5730\u4EA7\u4FE1\u606F\u7F51"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.wyzg.org/", target: "_blank" },
                "\u4E2D\u56FD\u623F\u5730\u4EA7\u884C\u4E1A\u534F"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.mohurd.gov.cn/", target: "_blank" },
                "\u4F4F\u5EFA\u90E8"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.pbc.gov.cn/", target: "_blank" },
                "\u4EBA\u6C11\u94F6\u884C"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.sdpc.gov.cn/", target: "_blank" },
                "\u4E2D\u56FD\u53D1\u6539\u59D4\u5458\u4F1A"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.zjjs.com.cn/", target: "_blank" },
                "\u6D59\u6C5F\u7701\u5EFA\u8BBE\u5385"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.mlr.gov.cn/", target: "_blank" },
                "\u56FD\u571F\u8D44\u6E90\u90E8"
              )
            )
          ),
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.ningbo.gov.cn/", target: "_blank" },
                "\u516D\u5B89\u653F\u5E9C\u7F51"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nbdpc.gov.cn/", target: "_blank" },
                "\u4E2D\u56FD\u623F\u5730\u4EA7\u884C\u4E1A\u534F"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nblr.gov.cn/", target: "_blank" },
                "\u5E02\u56FD\u571F\u8D44\u6E90\u5C40"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nbplan.gov.cn/", target: "_blank" },
                "\u516D\u5B89\u5E02\u89C4\u5212\u5C40"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://nb.wenming.cn/", target: "_blank" },
                "\u516D\u5B89\u6587\u660E\u7F51"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nbcs.gov.cn/", target: "_blank" },
                "\u5E02\u8D22\u7A0E\u5C40"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nbjs.gov.cn/", target: "_blank" },
                "\u516D\u5B89\u5E02\u4F4F\u623F\u548C\u57CE\u4E61\u5EFA\u8BBE\u59D4\u5458\u4F1A"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nbgjj.com/", target: "_blank" },
                "\u516D\u5B89\u5E02\u4F4F\u623F\u516C\u79EF\u91D1\u7BA1\u7406\u4E2D\u5FC3"
              )
            )
          ),
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "##" },
                "\u6682\u65E0 "
              )
            )
          ),
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "##" },
                " \u6682\u65E0 "
              )
            )
          ),
          React__default.createElement(
            "ul",
            { "class": "bottom-navigation__list clearfix" },
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.xinhuanet.com/house/", target: "_blank" },
                "\u65B0\u534E\u7F51\u623F\u4EA7"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.nb-fx.cn/", target: "_blank" },
                "\u516D\u5B89\u5E02\u623F\u5730\u4EA7\u4E1A\u534F\u4F1A"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://nb.house.sina.com.cn/", target: "_blank" },
                "\u65B0\u6D6A\u4E50\u5C45"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://house.cnool.net/", target: "_blank" },
                "\u4E1C\u65B9\u70ED\u7EBF\u623F\u4EA7\u7F51"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://house.focus.cn/", target: "_blank" },
                "\u641C\u72D0\u7126\u70B9\u623F\u4EA7"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://nb.soufun.com/", target: "_blank" },
                "\u641C\u623F\u7F51\u516D\u5B89"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.ihoome.com/", target: "_blank" },
                "\u7231\u5BB6\u7F51"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://nb.house.qq.com/", target: "_blank" },
                "\u817E\u8BAF\u623F\u4EA7"
              )
            ),
            React__default.createElement(
              "li",
              { "class": "bottom-navigation__item" },
              React__default.createElement(
                "a",
                { href: "http://www.china-crb.cn/", target: "_blank" },
                "\u4E2D\u56FD\u623F\u5730\u4EA7\u7F51"
              )
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        { "class": "bottom" },
        React__default.createElement(
          "div",
          { "class": "layout-center" },
          "Copyright@2001-2017 CNNBFDC.COM All Rights Reserved \u6D59ICP\u590705082368\u53F7"
        )
      )
    );
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var PageView_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var PageView = function PageView(props) {
    var pageClassName = props.pageClassName;
    var pageLinkClassName = props.pageLinkClassName;

    var onClick = props.onClick;
    var href = props.href;
    var ariaLabel = props.ariaLabel || 'Page ' + props.page + (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
    var ariaCurrent = null;

    if (props.selected) {
      ariaCurrent = 'page';

      ariaLabel = props.ariaLabel || 'Page ' + props.page + ' is your current page';

      if (typeof pageClassName !== 'undefined') {
        pageClassName = pageClassName + ' ' + props.activeClassName;
      } else {
        pageClassName = props.activeClassName;
      }

      if (typeof pageLinkClassName !== 'undefined') {
        if (typeof props.activeLinkClassName !== 'undefined') {
          pageLinkClassName = pageLinkClassName + ' ' + props.activeLinkClassName;
        }
      } else {
        pageLinkClassName = props.activeLinkClassName;
      }
    }

    return _react2.default.createElement(
      'li',
      { className: pageClassName },
      _react2.default.createElement(
        'a',
        {
          onClick: onClick,
          role: 'button',
          className: pageLinkClassName,
          href: href,
          tabIndex: '0',
          'aria-label': ariaLabel,
          'aria-current': ariaCurrent,
          onKeyPress: onClick
        },
        props.page
      )
    );
  };

  PageView.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    selected: _propTypes2.default.bool.isRequired,
    pageClassName: _propTypes2.default.string,
    pageLinkClassName: _propTypes2.default.string,
    activeClassName: _propTypes2.default.string,
    activeLinkClassName: _propTypes2.default.string,
    extraAriaContext: _propTypes2.default.string,
    href: _propTypes2.default.string,
    ariaLabel: _propTypes2.default.string,
    page: _propTypes2.default.number.isRequired
  };

  exports.default = PageView;

  });

  unwrapExports(PageView_1);

  var BreakView_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var BreakView = function BreakView(props) {
    var breakLabel = props.breakLabel,
        breakClassName = props.breakClassName,
        breakLinkClassName = props.breakLinkClassName,
        onClick = props.onClick;

    var className = breakClassName || 'break';

    return _react2.default.createElement(
      'li',
      { className: className },
      _react2.default.createElement(
        'a',
        {
          className: breakLinkClassName,
          onClick: onClick,
          role: 'button',
          tabIndex: '0',
          onKeyPress: onClick
        },
        breakLabel
      )
    );
  };

  BreakView.propTypes = {
    breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    breakClassName: _propTypes2.default.string,
    breakLinkClassName: _propTypes2.default.string,
    onClick: _propTypes2.default.func.isRequired
  };

  exports.default = BreakView;

  });

  unwrapExports(BreakView_1);

  var PaginationBoxView_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _PageView2 = _interopRequireDefault(PageView_1);



  var _BreakView2 = _interopRequireDefault(BreakView_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var PaginationBoxView = function (_Component) {
    _inherits(PaginationBoxView, _Component);

    function PaginationBoxView(props) {
      _classCallCheck(this, PaginationBoxView);

      var _this = _possibleConstructorReturn(this, (PaginationBoxView.__proto__ || Object.getPrototypeOf(PaginationBoxView)).call(this, props));

      _this.handlePreviousPage = function (evt) {
        var selected = _this.state.selected;

        evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
        if (selected > 0) {
          _this.handlePageSelected(selected - 1, evt);
        }
      };

      _this.handleNextPage = function (evt) {
        var selected = _this.state.selected;
        var pageCount = _this.props.pageCount;


        evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
        if (selected < pageCount - 1) {
          _this.handlePageSelected(selected + 1, evt);
        }
      };

      _this.handlePageSelected = function (selected, evt) {
        evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

        if (_this.state.selected === selected) return;

        _this.setState({ selected: selected });

        // Call the callback with the new selected item:
        _this.callCallback(selected);
      };

      _this.handleBreakClick = function (index, evt) {
        evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

        var selected = _this.state.selected;


        _this.handlePageSelected(selected < index ? _this.getForwardJump() : _this.getBackwardJump(), evt);
      };

      _this.callCallback = function (selectedItem) {
        if (typeof _this.props.onPageChange !== 'undefined' && typeof _this.props.onPageChange === 'function') {
          _this.props.onPageChange({ selected: selectedItem });
        }
      };

      _this.pagination = function () {
        var items = [];
        var _this$props = _this.props,
            pageRangeDisplayed = _this$props.pageRangeDisplayed,
            pageCount = _this$props.pageCount,
            marginPagesDisplayed = _this$props.marginPagesDisplayed,
            breakLabel = _this$props.breakLabel,
            breakClassName = _this$props.breakClassName,
            breakLinkClassName = _this$props.breakLinkClassName;
        var selected = _this.state.selected;


        if (pageCount <= pageRangeDisplayed) {
          for (var index = 0; index < pageCount; index++) {
            items.push(_this.getPageElement(index));
          }
        } else {
          var leftSide = pageRangeDisplayed / 2;
          var rightSide = pageRangeDisplayed - leftSide;

          // If the selected page index is on the default right side of the pagination,
          // we consider that the new right side is made up of it (= only one break element).
          // If the selected page index is on the default left side of the pagination,
          // we consider that the new left side is made up of it (= only one break element).
          if (selected > pageCount - pageRangeDisplayed / 2) {
            rightSide = pageCount - selected;
            leftSide = pageRangeDisplayed - rightSide;
          } else if (selected < pageRangeDisplayed / 2) {
            leftSide = selected;
            rightSide = pageRangeDisplayed - leftSide;
          }

          var _index = void 0;
          var page = void 0;
          var breakView = void 0;
          var createPageView = function createPageView(index) {
            return _this.getPageElement(index);
          };

          for (_index = 0; _index < pageCount; _index++) {
            page = _index + 1;

            // If the page index is lower than the margin defined,
            // the page has to be displayed on the left side of
            // the pagination.
            if (page <= marginPagesDisplayed) {
              items.push(createPageView(_index));
              continue;
            }

            // If the page index is greater than the page count
            // minus the margin defined, the page has to be
            // displayed on the right side of the pagination.
            if (page > pageCount - marginPagesDisplayed) {
              items.push(createPageView(_index));
              continue;
            }

            // If the page index is near the selected page index
            // and inside the defined range (pageRangeDisplayed)
            // we have to display it (it will create the center
            // part of the pagination).
            if (_index >= selected - leftSide && _index <= selected + rightSide) {
              items.push(createPageView(_index));
              continue;
            }

            // If the page index doesn't meet any of the conditions above,
            // we check if the last item of the current "items" array
            // is a break element. If not, we add a break element, else,
            // we do nothing (because we don't want to display the page).
            if (breakLabel && items[items.length - 1] !== breakView) {
              breakView = _react2.default.createElement(_BreakView2.default, {
                key: _index,
                breakLabel: breakLabel,
                breakClassName: breakClassName,
                breakLinkClassName: breakLinkClassName,
                onClick: _this.handleBreakClick.bind(null, _index)
              });
              items.push(breakView);
            }
          }
        }

        return items;
      };

      var initialSelected = void 0;
      if (props.initialPage) {
        initialSelected = props.initialPage;
      } else if (props.forcePage) {
        initialSelected = props.forcePage;
      } else {
        initialSelected = 0;
      }

      _this.state = {
        selected: initialSelected
      };
      return _this;
    }

    _createClass(PaginationBoxView, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            initialPage = _props.initialPage,
            disableInitialCallback = _props.disableInitialCallback,
            extraAriaContext = _props.extraAriaContext;
        // Call the callback with the initialPage item:

        if (typeof initialPage !== 'undefined' && !disableInitialCallback) {
          this.callCallback(initialPage);
        }

        if (extraAriaContext) {
          console.warn('DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.');
        }
      }
    }, {
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (typeof nextProps.forcePage !== 'undefined' && this.props.forcePage !== nextProps.forcePage) {
          this.setState({ selected: nextProps.forcePage });
        }
      }
    }, {
      key: 'getForwardJump',
      value: function getForwardJump() {
        var selected = this.state.selected;
        var _props2 = this.props,
            pageCount = _props2.pageCount,
            pageRangeDisplayed = _props2.pageRangeDisplayed;


        var forwardJump = selected + pageRangeDisplayed;
        return forwardJump >= pageCount ? pageCount - 1 : forwardJump;
      }
    }, {
      key: 'getBackwardJump',
      value: function getBackwardJump() {
        var selected = this.state.selected;
        var pageRangeDisplayed = this.props.pageRangeDisplayed;


        var backwardJump = selected - pageRangeDisplayed;
        return backwardJump < 0 ? 0 : backwardJump;
      }
    }, {
      key: 'hrefBuilder',
      value: function hrefBuilder(pageIndex) {
        var _props3 = this.props,
            hrefBuilder = _props3.hrefBuilder,
            pageCount = _props3.pageCount;

        if (hrefBuilder && pageIndex !== this.state.selected && pageIndex >= 0 && pageIndex < pageCount) {
          return hrefBuilder(pageIndex + 1);
        }
      }
    }, {
      key: 'ariaLabelBuilder',
      value: function ariaLabelBuilder(pageIndex) {
        var selected = pageIndex === this.state.selected;
        if (this.props.ariaLabelBuilder && pageIndex >= 0 && pageIndex < this.props.pageCount) {
          var label = this.props.ariaLabelBuilder(pageIndex + 1, selected);
          // DEPRECATED: The extraAriaContext prop was used to add additional context
          // to the aria-label. Users should now use the ariaLabelBuilder instead.
          if (this.props.extraAriaContext && !selected) {
            label = label + ' ' + this.props.extraAriaContext;
          }
          return label;
        }
      }
    }, {
      key: 'getPageElement',
      value: function getPageElement(index) {
        var selected = this.state.selected;
        var _props4 = this.props,
            pageClassName = _props4.pageClassName,
            pageLinkClassName = _props4.pageLinkClassName,
            activeClassName = _props4.activeClassName,
            activeLinkClassName = _props4.activeLinkClassName,
            extraAriaContext = _props4.extraAriaContext;


        return _react2.default.createElement(_PageView2.default, {
          key: index,
          onClick: this.handlePageSelected.bind(null, index),
          selected: selected === index,
          pageClassName: pageClassName,
          pageLinkClassName: pageLinkClassName,
          activeClassName: activeClassName,
          activeLinkClassName: activeLinkClassName,
          extraAriaContext: extraAriaContext,
          href: this.hrefBuilder(index),
          ariaLabel: this.ariaLabelBuilder(index),
          page: index + 1
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props,
            disabledClassName = _props5.disabledClassName,
            previousClassName = _props5.previousClassName,
            nextClassName = _props5.nextClassName,
            pageCount = _props5.pageCount,
            containerClassName = _props5.containerClassName,
            previousLinkClassName = _props5.previousLinkClassName,
            previousLabel = _props5.previousLabel,
            nextLinkClassName = _props5.nextLinkClassName,
            nextLabel = _props5.nextLabel;
        var selected = this.state.selected;


        var previousClasses = previousClassName + (selected === 0 ? ' ' + disabledClassName : '');
        var nextClasses = nextClassName + (selected === pageCount - 1 ? ' ' + disabledClassName : '');

        var previousAriaDisabled = selected === 0 ? 'true' : 'false';
        var nextAriaDisabled = selected === pageCount - 1 ? 'true' : 'false';

        return _react2.default.createElement(
          'ul',
          { className: containerClassName },
          _react2.default.createElement(
            'li',
            { className: previousClasses },
            _react2.default.createElement(
              'a',
              {
                onClick: this.handlePreviousPage,
                className: previousLinkClassName,
                href: this.hrefBuilder(selected - 1),
                tabIndex: '0',
                role: 'button',
                onKeyPress: this.handlePreviousPage,
                'aria-disabled': previousAriaDisabled
              },
              previousLabel
            )
          ),
          this.pagination(),
          _react2.default.createElement(
            'li',
            { className: nextClasses },
            _react2.default.createElement(
              'a',
              {
                onClick: this.handleNextPage,
                className: nextLinkClassName,
                href: this.hrefBuilder(selected + 1),
                tabIndex: '0',
                role: 'button',
                onKeyPress: this.handleNextPage,
                'aria-disabled': nextAriaDisabled
              },
              nextLabel
            )
          )
        );
      }
    }]);

    return PaginationBoxView;
  }(React__default.Component);

  PaginationBoxView.propTypes = {
    pageCount: _propTypes2.default.number.isRequired,
    pageRangeDisplayed: _propTypes2.default.number.isRequired,
    marginPagesDisplayed: _propTypes2.default.number.isRequired,
    previousLabel: _propTypes2.default.node,
    nextLabel: _propTypes2.default.node,
    breakLabel: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    hrefBuilder: _propTypes2.default.func,
    onPageChange: _propTypes2.default.func,
    initialPage: _propTypes2.default.number,
    forcePage: _propTypes2.default.number,
    disableInitialCallback: _propTypes2.default.bool,
    containerClassName: _propTypes2.default.string,
    pageClassName: _propTypes2.default.string,
    pageLinkClassName: _propTypes2.default.string,
    activeClassName: _propTypes2.default.string,
    activeLinkClassName: _propTypes2.default.string,
    previousClassName: _propTypes2.default.string,
    nextClassName: _propTypes2.default.string,
    previousLinkClassName: _propTypes2.default.string,
    nextLinkClassName: _propTypes2.default.string,
    disabledClassName: _propTypes2.default.string,
    breakClassName: _propTypes2.default.string,
    breakLinkClassName: _propTypes2.default.string,
    extraAriaContext: _propTypes2.default.string,
    ariaLabelBuilder: _propTypes2.default.func
  };
  PaginationBoxView.defaultProps = {
    pageCount: 10,
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 3,
    activeClassName: 'selected',
    previousClassName: 'previous',
    nextClassName: 'next',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    breakLabel: '...',
    disabledClassName: 'disabled',
    disableInitialCallback: false
  };
  exports.default = PaginationBoxView;

  });

  unwrapExports(PaginationBoxView_1);

  var dist = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _PaginationBoxView2 = _interopRequireDefault(PaginationBoxView_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _PaginationBoxView2.default;

  });

  var ReactPaginate = unwrapExports(dist);

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  function Pagination(_ref) {
      var pageCount = _ref.pageCount,
          onPageChange = _ref.onPageChange,
          rest = objectWithoutProperties(_ref, ["pageCount", "onPageChange"]);

      return React__default.createElement(ReactPaginate, _extends({
          previousLabel: '上一页',
          nextLabel: '下一页',
          breakLabel: '...',
          breakClassName: 'PagedList-ellipses',
          pageCount: pageCount,
          marginPagesDisplayed: 2,
          pageRangeDisplayed: 5,
          onPageChange: onPageChange,
          containerClassName: 'pagination',
          subContainerClassName: 'pagination',
          activeClassName: 'active'
      }, rest));
  }

  function HallItem(_ref) {
    var groupName = _ref.groupName,
        items = _ref.items;

    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        "h4",
        null,
        groupName
      ),
      React__default.createElement(
        "div",
        { "class": "item-box__items" },
        items.map(function (_ref2) {
          var label = _ref2.label,
              imgUrl = _ref2.imgUrl,
              href = _ref2.href,
              color = _ref2.color;

          return React__default.createElement(
            "div",
            { key: href, "class": "item-box__item transparent" },
            React__default.createElement(
              "a",
              { href: href, target: "_blank" },
              React__default.createElement("img", { src: imgUrl, "class": "servicehall " + (color || ''), alt: label }),
              React__default.createElement(
                "div",
                { "class": "txt" },
                React__default.createElement(
                  "span",
                  null,
                  label
                )
              )
            )
          );
        })
      )
    );
  }

  function HallItems(_ref3) {
    var groups = _ref3.groups;

    return React__default.createElement(
      React__default.Fragment,
      null,
      groups.map(function (group) {
        return React__default.createElement(HallItem, _extends({ key: group.name }, group));
      })
    );
  }

  function useScroolForever() {
    var ref = React.useRef(null);
    React.useEffect(function () {
      var current = ref.current;
      $(current).scrollForever({
        continuous: false,
        dir: "top",
        delayTime: 2000,
        num: 2
      });
      return function () {
        $(current).off();
      };
    }, []);
    return ref;
  }

  function PublicityScrollPanel(_ref) {
    var label = _ref.label,
        items = _ref.items,
        href = _ref.href;

    var ref = useScroolForever();
    return React__default.createElement(
      "div",
      { "class": "publicty-box" },
      React__default.createElement(
        "div",
        { "class": "publicty-box__title" },
        React__default.createElement(
          "h4",
          null,
          label
        ),
        React__default.createElement(
          "a",
          { href: href },
          "\u66F4\u591A"
        )
      ),
      React__default.createElement(
        "div",
        { "class": "hall-publicity__content", ref: ref },
        React__default.createElement(
          "ul",
          null,
          items.map(function (item) {
            var label = item.label,
                href = item.href,
                time = item.time;

            return React__default.createElement(
              "li",
              { ke: href },
              React__default.createElement(
                "a",
                { href: href },
                React__default.createElement(
                  "span",
                  null,
                  label
                ),
                React__default.createElement(
                  "span",
                  { "class": "span-right" },
                  time
                )
              )
            );
          })
        )
      )
    );
  }

  function RefundScrollPanel(_ref2) {
    var _ref2$items = _ref2.items,
        items = _ref2$items === undefined ? [] : _ref2$items,
        moreHref = _ref2.moreHref;

    var ref = useScroolForever();
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        "div",
        { "class": "home-box__title" },
        React__default.createElement(
          "div",
          { "class": "home-box__title__left index_title" },
          React__default.createElement(
            "div",
            { "class": "index_title_left" },
            React__default.createElement(
              "h4",
              null,
              "\u7D2F\u8BA1\u5408\u540C\u5907\u6848\u64A4\u9500\u91CF"
            )
          ),
          React__default.createElement(
            "div",
            { "class": "index_title_right" },
            React__default.createElement(
              "a",
              { href: moreHref },
              "\u66F4\u591A>>"
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        {
          "class": "home-box__center refund-publicity__content",
          style: { overflow: "hidden", height: "330px" },
          ref: ref
        },
        React__default.createElement(
          "ul",
          null,
          items.map(function (item) {
            return React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "dl",
                null,
                React__default.createElement(
                  "dt",
                  null,
                  item.label
                ),
                React__default.createElement(
                  "dd",
                  null,
                  React__default.createElement(
                    "span",
                    null,
                    "\u7D2F\u8BA1\u5408\u540C\u64A4\u9500\u6570\uFF1A",
                    item.count
                  )
                )
              )
            );
          })
        )
      )
    );
  }

  function DevelopScrollPanel(_ref3) {
    var moreHref = _ref3.moreHref,
        _ref3$items = _ref3.items,
        items = _ref3$items === undefined ? [] : _ref3$items;

    var ref = useScroolForever();
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        "div",
        { "class": "home-box__title" },
        React__default.createElement(
          "div",
          { "class": "home-box__title__left index_title" },
          React__default.createElement(
            "div",
            { "class": "index_title_left" },
            React__default.createElement(
              "h4",
              null,
              "\u6210\u4EA4\u8BB0\u5F55"
            )
          ),
          React__default.createElement(
            "div",
            { "class": "index_title_right" },
            React__default.createElement(
              "a",
              { href: "contract.html" },
              "\u66F4\u591A>>"
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        {
          "class": "home-box__center develop-publicity__content",
          style: { overflow: "hidden", height: "330px" },
          ref: ref
        },
        React__default.createElement(
          "ul",
          null,
          items.map(function (item) {
            return React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "dl",
                null,
                React__default.createElement(
                  "dt",
                  null,
                  item.label
                ),
                React__default.createElement(
                  "dd",
                  null,
                  React__default.createElement(
                    "span",
                    { style: { float: "left" } },
                    item.num
                  ),
                  React__default.createElement(
                    "span",
                    { style: { float: "right" } },
                    item.date
                  )
                )
              )
            );
          })
        )
      )
    );
  }

  function LicenseScrollPanel(_ref4) {
    var moreHref = _ref4.moreHref,
        _ref4$items = _ref4.items,
        items = _ref4$items === undefined ? [] : _ref4$items;

    var ref = useScroolForever();
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        "div",
        { "class": "home-box__title" },
        React__default.createElement(
          "div",
          { "class": "home-box__title__left index_title" },
          React__default.createElement(
            "div",
            { "class": "index_title_left" },
            React__default.createElement(
              "h4",
              null,
              "\u975E\u72EC\u5BB6\u59D4\u6258\u8F6C\u81EA\u884C\u6210\u4EA4\u91CF"
            )
          ),
          React__default.createElement(
            "div",
            { "class": "index_title_right" },
            React__default.createElement(
              "a",
              { href: moreHref },
              "\u66F4\u591A>>"
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        {
          "class": "home-box__center license-publicity__content",
          style: { overflow: "hidden", height: "330px" },
          ref: ref
        },
        React__default.createElement(
          "ul",
          null,
          items.map(function (item) {
            return React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "dl",
                null,
                React__default.createElement(
                  "dt",
                  null,
                  item.label
                ),
                React__default.createElement(
                  "dd",
                  null,
                  React__default.createElement(
                    "span",
                    { style: { float: "left" } },
                    "\u7D2F\u8BA1\u8F6C\u81EA\u884C\u6210\u4EA4\u6570\uFF1A",
                    item.count
                  )
                )
              )
            );
          })
        )
      )
    );
  }

  function HouseCard(_ref) {
    var href = _ref.href,
        number = _ref.number,
        area = _ref.area,
        listCount = _ref.listCount,
        structure = _ref.structure,
        communityName = _ref.communityName,
        sqm = _ref.sqm,
        floor = _ref.floor,
        postDate = _ref.postDate,
        totalPrice = _ref.totalPrice,
        _ref$mortgageState = _ref.mortgageState,
        mortgageState = _ref$mortgageState === undefined ? "" : _ref$mortgageState,
        sqmPrice = _ref.sqmPrice;

    return React__default.createElement(
      "div",
      { "class": "views-row" },
      React__default.createElement(
        "a",
        { href: href },
        React__default.createElement(
          "div",
          { "class": "house-information " },
          React__default.createElement("div", { "class": "house-information__select-icon" }),
          React__default.createElement(
            "div",
            { "class": "house-information__title" },
            React__default.createElement(
              "span",
              { "class": "house-information__title__number" },
              "\u623F\u6E90\u6838\u9A8C\u7801\uFF1A",
              number
            ),
            React__default.createElement(
              "span",
              { "class": "house-information__title__area" },
              area
            )
          ),
          React__default.createElement(
            "div",
            { "class": "house-information__details" },
            React__default.createElement(
              "div",
              { "class": "house-information__agencies" },
              React__default.createElement(
                "div",
                { "class": "listing-count" },
                "\u7531 ",
                React__default.createElement(
                  "strong",
                  null,
                  listCount
                ),
                " \u5BB6\u673A\u6784\u6302\u724C"
              )
            ),
            React__default.createElement(
              "div",
              { "class": "house-information__area" },
              React__default.createElement(
                "h2",
                { "class": "house-information__area__community-name" },
                communityName
              ),
              React__default.createElement(
                "div",
                { "class": "house-information__area__sqm" },
                React__default.createElement(
                  "span",
                  null,
                  "\u7EA6 "
                ),
                React__default.createElement(
                  "strong",
                  null,
                  sqm
                ),
                React__default.createElement(
                  "span",
                  null,
                  " \u5E73\u7C73"
                )
              )
            ),
            React__default.createElement(
              "div",
              { "class": "house-information__detail" },
              React__default.createElement(
                "div",
                { "class": "field-house-information-detail" },
                React__default.createElement(
                  "ul",
                  { "class": "house-information__detail__list" },
                  React__default.createElement(
                    "li",
                    null,
                    React__default.createElement("i", { "class": "icons icons--structure" }),
                    React__default.createElement(
                      "span",
                      null,
                      structure
                    )
                  ),
                  React__default.createElement(
                    "li",
                    null,
                    React__default.createElement("i", { "class": "icons icons--floor" }),
                    React__default.createElement(
                      "span",
                      null,
                      "\u5171 ",
                      floor,
                      " \u5C42"
                    )
                  ),
                  React__default.createElement(
                    "li",
                    null,
                    React__default.createElement("i", { "class": "icons icons--direction" }),
                    React__default.createElement(
                      "span",
                      { "class": "mortgage-state" },
                      mortgageState
                    )
                  )
                )
              ),
              React__default.createElement(
                "div",
                { "class": "field-post-date" },
                React__default.createElement(
                  "div",
                  { "class": "house-post-date" },
                  postDate
                )
              )
            )
          ),
          React__default.createElement(
            "div",
            { "class": "house-information__price" },
            React__default.createElement(
              "div",
              { "class": "house-information__price__total" },
              React__default.createElement(
                "strong",
                null,
                totalPrice
              ),
              React__default.createElement(
                "span",
                null,
                " \u4E07"
              )
            ),
            React__default.createElement(
              "div",
              { "class": "house-information__price__sqm" },
              "\u5E73\u5747 ",
              sqmPrice,
              " \u4E07\u5143/\u5E73\u65B9\u7C73"
            )
          )
        )
      )
    );
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _library = true;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'pure',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var assign = _core.Object.assign;

  var assign$1 = createCommonjsModule(function (module) {
  module.exports = { "default": assign, __esModule: true };
  });

  unwrapExports(assign$1);

  var _extends$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _assign2 = _interopRequireDefault(assign$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  });

  var _extends$2 = unwrapExports(_extends$1);

  var classCallCheck$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  });

  var _classCallCheck = unwrapExports(classCallCheck$1);

  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  _export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

  var $Object = _core.Object;
  var defineProperty$1 = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };

  var defineProperty$2 = createCommonjsModule(function (module) {
  module.exports = { "default": defineProperty$1, __esModule: true };
  });

  unwrapExports(defineProperty$2);

  var createClass$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty$2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  });

  var _createClass = unwrapExports(createClass$1);

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _redefine = _hide;

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  var TO_STRING_TAG = _wks('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = _iterators.Array;
  }

  var f$3 = _wks;

  var _wksExt = {
  	f: f$3
  };

  var iterator = _wksExt.f('iterator');

  var iterator$1 = createCommonjsModule(function (module) {
  module.exports = { "default": iterator, __esModule: true };
  });

  unwrapExports(iterator$1);

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');


  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var defineProperty$4 = _objectDp.f;
  var _wksDefine = function (name) {
    var $Symbol = _core.Symbol || (_core.Symbol = {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4($Symbol, name, { value: _wksExt.f(name) });
  };

  // all enumerable object keys, includes symbols



  var _enumKeys = function (it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$4
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
  	f: f$5
  };

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$6
  };

  // ECMAScript 6 symbols shim





  var META = _meta.KEY;



















  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function';
  var QObject = _global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function () { return dP$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
  } : dP$1;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);
    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$1(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };
      if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return _has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!_isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  _setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  _setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  _setToStringTag(_global.JSON, 'JSON', true);

  _wksDefine('asyncIterator');

  _wksDefine('observable');

  var symbol = _core.Symbol;

  var symbol$1 = createCommonjsModule(function (module) {
  module.exports = { "default": symbol, __esModule: true };
  });

  unwrapExports(symbol$1);

  var _typeof_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _iterator2 = _interopRequireDefault(iterator$1);



  var _symbol2 = _interopRequireDefault(symbol$1);

  var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };
  });

  unwrapExports(_typeof_1);

  var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };
  });

  var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn$1);

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

  // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

  var setPrototypeOf = _core.Object.setPrototypeOf;

  var setPrototypeOf$1 = createCommonjsModule(function (module) {
  module.exports = { "default": setPrototypeOf, __esModule: true };
  });

  unwrapExports(setPrototypeOf$1);

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  _export(_export.S, 'Object', { create: _objectCreate });

  var $Object$1 = _core.Object;
  var create = function create(P, D) {
    return $Object$1.create(P, D);
  };

  var create$1 = createCommonjsModule(function (module) {
  module.exports = { "default": create, __esModule: true };
  });

  unwrapExports(create$1);

  var inherits$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



  var _create2 = _interopRequireDefault(create$1);



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }

    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  });

  var _inherits = unwrapExports(inherits$1);

  //

  var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
      return !!ret;
    }

    if (objA === objB) {
      return true;
    }

    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];

      if (!bHasOwnProperty(key)) {
        return false;
      }

      var valueA = objA[key];
      var valueB = objB[key];

      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

      if (ret === false || (ret === void 0 && valueA !== valueB)) {
        return false;
      }
    }

    return true;
  };

  var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function returnFalse() {
    return false;
  }

  function returnTrue() {
    return true;
  }

  function EventBaseObject() {
    this.timeStamp = Date.now();
    this.target = undefined;
    this.currentTarget = undefined;
  }

  EventBaseObject.prototype = {
    isEventObject: 1,

    constructor: EventBaseObject,

    isDefaultPrevented: returnFalse,

    isPropagationStopped: returnFalse,

    isImmediatePropagationStopped: returnFalse,

    preventDefault: function preventDefault() {
      this.isDefaultPrevented = returnTrue;
    },

    stopPropagation: function stopPropagation() {
      this.isPropagationStopped = returnTrue;
    },

    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = returnTrue;
      // fixed 1.2
      // call stopPropagation implicitly
      this.stopPropagation();
    },

    halt: function halt(immediate) {
      if (immediate) {
        this.stopImmediatePropagation();
      } else {
        this.stopPropagation();
      }
      this.preventDefault();
    }
  };

  exports["default"] = EventBaseObject;
  module.exports = exports["default"];
  });

  unwrapExports(EventBaseObject_1);

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty$1.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var EventObject = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



  var _objectAssign2 = _interopRequireDefault(objectAssign);

  var TRUE = true;
  var FALSE = false;
  var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

  function isNullOrUndefined(w) {
    return w === null || w === undefined;
  }

  var eventNormalizers = [{
    reg: /^key/,
    props: ['char', 'charCode', 'key', 'keyCode', 'which'],
    fix: function fix(event, nativeEvent) {
      if (isNullOrUndefined(event.which)) {
        event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
      }

      // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
      if (event.metaKey === undefined) {
        event.metaKey = event.ctrlKey;
      }
    }
  }, {
    reg: /^touch/,
    props: ['touches', 'changedTouches', 'targetTouches']
  }, {
    reg: /^hashchange$/,
    props: ['newURL', 'oldURL']
  }, {
    reg: /^gesturechange$/i,
    props: ['rotation', 'scale']
  }, {
    reg: /^(mousewheel|DOMMouseScroll)$/,
    props: [],
    fix: function fix(event, nativeEvent) {
      var deltaX = undefined;
      var deltaY = undefined;
      var delta = undefined;
      var wheelDelta = nativeEvent.wheelDelta;
      var axis = nativeEvent.axis;
      var wheelDeltaY = nativeEvent.wheelDeltaY;
      var wheelDeltaX = nativeEvent.wheelDeltaX;
      var detail = nativeEvent.detail;

      // ie/webkit
      if (wheelDelta) {
        delta = wheelDelta / 120;
      }

      // gecko
      if (detail) {
        // press control e.detail == 1 else e.detail == 3
        delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
      }

      // Gecko
      if (axis !== undefined) {
        if (axis === event.HORIZONTAL_AXIS) {
          deltaY = 0;
          deltaX = 0 - delta;
        } else if (axis === event.VERTICAL_AXIS) {
          deltaX = 0;
          deltaY = delta;
        }
      }

      // Webkit
      if (wheelDeltaY !== undefined) {
        deltaY = wheelDeltaY / 120;
      }
      if (wheelDeltaX !== undefined) {
        deltaX = -1 * wheelDeltaX / 120;
      }

      // 默认 deltaY (ie)
      if (!deltaX && !deltaY) {
        deltaY = delta;
      }

      if (deltaX !== undefined) {
        /**
         * deltaX of mousewheel event
         * @property deltaX
         * @member Event.DomEvent.Object
         */
        event.deltaX = deltaX;
      }

      if (deltaY !== undefined) {
        /**
         * deltaY of mousewheel event
         * @property deltaY
         * @member Event.DomEvent.Object
         */
        event.deltaY = deltaY;
      }

      if (delta !== undefined) {
        /**
         * delta of mousewheel event
         * @property delta
         * @member Event.DomEvent.Object
         */
        event.delta = delta;
      }
    }
  }, {
    reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
    props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
    fix: function fix(event, nativeEvent) {
      var eventDoc = undefined;
      var doc = undefined;
      var body = undefined;
      var target = event.target;
      var button = nativeEvent.button;

      // Calculate pageX/Y if missing and clientX/Y available
      if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
        eventDoc = target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      }

      // which for click: 1 === left; 2 === middle; 3 === right
      // do not use button
      if (!event.which && button !== undefined) {
        if (button & 1) {
          event.which = 1;
        } else if (button & 2) {
          event.which = 3;
        } else if (button & 4) {
          event.which = 2;
        } else {
          event.which = 0;
        }
      }

      // add relatedTarget, if necessary
      if (!event.relatedTarget && event.fromElement) {
        event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
      }

      return event;
    }
  }];

  function retTrue() {
    return TRUE;
  }

  function retFalse() {
    return FALSE;
  }

  function DomEventObject(nativeEvent) {
    var type = nativeEvent.type;

    var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

    _EventBaseObject2['default'].call(this);

    this.nativeEvent = nativeEvent;

    // in case dom event has been mark as default prevented by lower dom node
    var isDefaultPrevented = retFalse;
    if ('defaultPrevented' in nativeEvent) {
      isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
    } else if ('getPreventDefault' in nativeEvent) {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
      isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
    } else if ('returnValue' in nativeEvent) {
      isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
    }

    this.isDefaultPrevented = isDefaultPrevented;

    var fixFns = [];
    var fixFn = undefined;
    var l = undefined;
    var prop = undefined;
    var props = commonProps.concat();

    eventNormalizers.forEach(function (normalizer) {
      if (type.match(normalizer.reg)) {
        props = props.concat(normalizer.props);
        if (normalizer.fix) {
          fixFns.push(normalizer.fix);
        }
      }
    });

    l = props.length;

    // clone properties of the original event object
    while (l) {
      prop = props[--l];
      this[prop] = nativeEvent[prop];
    }

    // fix target property, if necessary
    if (!this.target && isNative) {
      this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
    }

    // check if target is a text node (safari)
    if (this.target && this.target.nodeType === 3) {
      this.target = this.target.parentNode;
    }

    l = fixFns.length;

    while (l) {
      fixFn = fixFns[--l];
      fixFn(this, nativeEvent);
    }

    this.timeStamp = nativeEvent.timeStamp || Date.now();
  }

  var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

  (0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
    constructor: DomEventObject,

    preventDefault: function preventDefault() {
      var e = this.nativeEvent;

      // if preventDefault exists run it on the original event
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        // otherwise set the returnValue property of the original event to FALSE (IE)
        e.returnValue = FALSE;
      }

      EventBaseObjectProto.preventDefault.call(this);
    },

    stopPropagation: function stopPropagation() {
      var e = this.nativeEvent;

      // if stopPropagation exists run it on the original event
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        // otherwise set the cancelBubble property of the original event to TRUE (IE)
        e.cancelBubble = TRUE;
      }

      EventBaseObjectProto.stopPropagation.call(this);
    }
  });

  exports['default'] = DomEventObject;
  module.exports = exports['default'];
  });

  unwrapExports(EventObject);

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = addEventListener;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



  var _EventObject2 = _interopRequireDefault(EventObject);

  function addEventListener(target, eventType, callback, option) {
    function wrapCallback(e) {
      var ne = new _EventObject2['default'](e);
      callback.call(target, ne);
    }

    if (target.addEventListener) {
      var _ret = (function () {
        var useCapture = false;
        if (typeof option === 'object') {
          useCapture = option.capture || false;
        } else if (typeof option === 'boolean') {
          useCapture = option;
        }

        target.addEventListener(eventType, wrapCallback, option || false);

        return {
          v: {
            remove: function remove() {
              target.removeEventListener(eventType, wrapCallback, useCapture);
            }
          }
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, wrapCallback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, wrapCallback);
        }
      };
    }
  }

  module.exports = exports['default'];
  });

  var addDOMEventListener = unwrapExports(lib);

  function addEventListenerWrap(target, eventType, cb, option) {
    /* eslint camelcase: 2 */
    var callback = ReactDOM$1.unstable_batchedUpdates ? function run(e) {
      ReactDOM$1.unstable_batchedUpdates(cb, e);
    } : cb;
    return addDOMEventListener(target, eventType, callback, option);
  }

  var PropTypes = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.storeShape = undefined;



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var storeShape = exports.storeShape = _propTypes2.default.shape({
    subscribe: _propTypes2.default.func.isRequired,
    setState: _propTypes2.default.func.isRequired,
    getState: _propTypes2.default.func.isRequired
  });
  });

  unwrapExports(PropTypes);
  var PropTypes_1 = PropTypes.storeShape;

  var Provider_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _react2 = _interopRequireDefault(React__default);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      _classCallCheck(this, Provider);

      return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          miniStore: this.props.store
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.Children.only(this.props.children);
      }
    }]);

    return Provider;
  }(React__default.Component);

  Provider.propTypes = {
    store: PropTypes.storeShape.isRequired
  };
  Provider.childContextTypes = {
    miniStore: PropTypes.storeShape.isRequired
  };
  exports.default = Provider;
  });

  unwrapExports(Provider_1);

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };

  var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
  };

  var defineProperty$5 = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols$1) {
              keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try { // Avoid failures from read-only properties
                      defineProperty$5(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }

          return targetComponent;
      }

      return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component;
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name;
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      );
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        );
      }

      prototype.componentWillUpdate = componentWillUpdate;

      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot;

        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    polyfill: polyfill
  });

  var connect_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  exports.default = connect;



  var _react2 = _interopRequireDefault(React__default);



  var _shallowequal2 = _interopRequireDefault(shallowequal);



  var _hoistNonReactStatics2 = _interopRequireDefault(hoistNonReactStatics_cjs);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  function isStateless(Component) {
    return !Component.prototype.render;
  }

  var defaultMapStateToProps = function defaultMapStateToProps() {
    return {};
  };

  function connect(mapStateToProps) {
    var shouldSubscribe = !!mapStateToProps;
    var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;

    return function wrapWithConnect(WrappedComponent) {
      var Connect = function (_Component) {
        _inherits(Connect, _Component);

        _createClass(Connect, null, [{
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(props, prevState) {
            // using ownProps
            if (mapStateToProps && mapStateToProps.length === 2 && props !== prevState.props) {
              return {
                subscribed: finnalMapStateToProps(prevState.store.getState(), props),
                props: props
              };
            }
            return { props: props };
          }
        }]);

        function Connect(props, context) {
          _classCallCheck(this, Connect);

          var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));

          _this.handleChange = function () {
            if (!_this.unsubscribe) {
              return;
            }
            var nextState = finnalMapStateToProps(_this.store.getState(), _this.props);
            _this.setState({ subscribed: nextState });
          };

          _this.store = context.miniStore;
          _this.state = {
            subscribed: finnalMapStateToProps(_this.store.getState(), props),
            store: _this.store,
            props: props
          };
          return _this;
        }

        _createClass(Connect, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.trySubscribe();
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.tryUnsubscribe();
          }
        }, {
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state.subscribed, nextState.subscribed);
          }
        }, {
          key: 'trySubscribe',
          value: function trySubscribe() {
            if (shouldSubscribe) {
              this.unsubscribe = this.store.subscribe(this.handleChange);
              this.handleChange();
            }
          }
        }, {
          key: 'tryUnsubscribe',
          value: function tryUnsubscribe() {
            if (this.unsubscribe) {
              this.unsubscribe();
              this.unsubscribe = null;
            }
          }
        }, {
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            return this.wrappedInstance;
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var props = _extends({}, this.props, this.state.subscribed, {
              store: this.store
            });

            if (!isStateless(WrappedComponent)) {
              props = _extends({}, props, {
                ref: function ref(c) {
                  return _this2.wrappedInstance = c;
                }
              });
            }

            return _react2.default.createElement(WrappedComponent, props);
          }
        }]);

        return Connect;
      }(React__default.Component);

      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
      Connect.contextTypes = {
        miniStore: PropTypes.storeShape.isRequired
      };


      (0, reactLifecyclesCompat_es.polyfill)(Connect);

      return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
    };
  }
  });

  unwrapExports(connect_1);

  var create_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.default = create;
  function create(initialState) {
    var state = initialState;
    var listeners = [];

    function setState(partial) {
      state = _extends({}, state, partial);
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    }

    function getState() {
      return state;
    }

    function subscribe(listener) {
      listeners.push(listener);

      return function unsubscribe() {
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }

    return {
      setState: setState,
      getState: getState,
      subscribe: subscribe
    };
  }
  });

  unwrapExports(create_1);

  var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.create = exports.connect = exports.Provider = undefined;



  var _Provider3 = _interopRequireDefault(Provider_1);



  var _connect3 = _interopRequireDefault(connect_1);



  var _create3 = _interopRequireDefault(create_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.Provider = _Provider3.default;
  exports.connect = _connect3.default;
  exports.create = _create3.default;
  });

  unwrapExports(lib$1);
  var lib_1 = lib$1.create;
  var lib_2 = lib$1.connect;
  var lib_3 = lib$1.Provider;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$2.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var Map = _getNative(_root, 'Map');

  var _Map = Map;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$4.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  var defineProperty$6 = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty$6;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq_1(object[key], value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignMergeValue = assignMergeValue;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = _createBaseFor();

  var _baseFor = baseFor;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /** Built-in value references. */
  var Uint8Array = _root.Uint8Array;

  var _Uint8Array = Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike_1(value) && isArrayLike_1(value);
  }

  var isArrayLikeObject_1 = isArrayLikeObject;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$7 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$7.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /**
   * Gets the value at `key`, unless `key` is "__proto__".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  var _safeGet = safeGet;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$8.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$8.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$9.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$9.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$a.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return _copyObject(value, keysIn_1(value));
  }

  var toPlainObject_1 = toPlainObject;

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = _safeGet(object, key),
        srcValue = _safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      _assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray_1(srcValue),
          isBuff = !isArr && isBuffer_1(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_1(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject_1(objValue)) {
          newValue = _copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = _cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = _cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
        newValue = objValue;
        if (isArguments_1(objValue)) {
          newValue = toPlainObject_1(objValue);
        }
        else if (!isObject_1(objValue) || isFunction_1(objValue)) {
          newValue = _initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    _assignMergeValue(object, key, newValue);
  }

  var _baseMergeDeep = baseMergeDeep;

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    _baseFor(source, function(srcValue, key) {
      if (isObject_1(srcValue)) {
        stack || (stack = new _Stack);
        _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        _assignMergeValue(object, key, newValue);
      }
    }, keysIn_1);
  }

  var _baseMerge = baseMerge;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
    return _defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return _baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner;

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = _createAssigner(function(object, source, srcIndex) {
    _baseMerge(object, source, srcIndex);
  });

  var merge_1 = merge;

  var indexOf = [].indexOf;

  var indexof = function(arr, obj){
    if (indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };

  var componentIndexof = function(arr, obj){
    if (arr.indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };

  /**
   * Module dependencies.
   */

  try {
    var index$1 = indexof;
  } catch (err) {
    var index$1 = componentIndexof;
  }

  /**
   * Whitespace regexp.
   */

  var re = /\s+/;

  /**
   * toString reference.
   */

  var toString$2 = Object.prototype.toString;

  /**
   * Wrap `el` in a `ClassList`.
   *
   * @param {Element} el
   * @return {ClassList}
   * @api public
   */

  var componentClasses = function(el){
    return new ClassList(el);
  };

  /**
   * Initialize a new ClassList for `el`.
   *
   * @param {Element} el
   * @api private
   */

  function ClassList(el) {
    if (!el || !el.nodeType) {
      throw new Error('A DOM element reference is required');
    }
    this.el = el;
    this.list = el.classList;
  }

  /**
   * Add class `name` if not already present.
   *
   * @param {String} name
   * @return {ClassList}
   * @api public
   */

  ClassList.prototype.add = function(name){
    // classList
    if (this.list) {
      this.list.add(name);
      return this;
    }

    // fallback
    var arr = this.array();
    var i = index$1(arr, name);
    if (!~i) arr.push(name);
    this.el.className = arr.join(' ');
    return this;
  };

  /**
   * Remove class `name` when present, or
   * pass a regular expression to remove
   * any which match.
   *
   * @param {String|RegExp} name
   * @return {ClassList}
   * @api public
   */

  ClassList.prototype.remove = function(name){
    if ('[object RegExp]' == toString$2.call(name)) {
      return this.removeMatching(name);
    }

    // classList
    if (this.list) {
      this.list.remove(name);
      return this;
    }

    // fallback
    var arr = this.array();
    var i = index$1(arr, name);
    if (~i) arr.splice(i, 1);
    this.el.className = arr.join(' ');
    return this;
  };

  /**
   * Remove all classes matching `re`.
   *
   * @param {RegExp} re
   * @return {ClassList}
   * @api private
   */

  ClassList.prototype.removeMatching = function(re){
    var arr = this.array();
    for (var i = 0; i < arr.length; i++) {
      if (re.test(arr[i])) {
        this.remove(arr[i]);
      }
    }
    return this;
  };

  /**
   * Toggle class `name`, can force state via `force`.
   *
   * For browsers that support classList, but do not support `force` yet,
   * the mistake will be detected and corrected.
   *
   * @param {String} name
   * @param {Boolean} force
   * @return {ClassList}
   * @api public
   */

  ClassList.prototype.toggle = function(name, force){
    // classList
    if (this.list) {
      if ("undefined" !== typeof force) {
        if (force !== this.list.toggle(name, force)) {
          this.list.toggle(name); // toggle again to correct
        }
      } else {
        this.list.toggle(name);
      }
      return this;
    }

    // fallback
    if ("undefined" !== typeof force) {
      if (!force) {
        this.remove(name);
      } else {
        this.add(name);
      }
    } else {
      if (this.has(name)) {
        this.remove(name);
      } else {
        this.add(name);
      }
    }

    return this;
  };

  /**
   * Return an array of classes.
   *
   * @return {Array}
   * @api public
   */

  ClassList.prototype.array = function(){
    var className = this.el.getAttribute('class') || '';
    var str = className.replace(/^\s+|\s+$/g, '');
    var arr = str.split(re);
    if ('' === arr[0]) arr.shift();
    return arr;
  };

  /**
   * Check if class `name` is present.
   *
   * @param {String} name
   * @return {ClassList}
   * @api public
   */

  ClassList.prototype.has =
  ClassList.prototype.contains = function(name){
    return this.list
      ? this.list.contains(name)
      : !! ~index$1(this.array(), name);
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var warning = function() {};

  var warning_1 = warning;

  var scrollbarVerticalSize = void 0;
  var scrollbarHorizontalSize = void 0;

  // Measure scrollbar width for padding body during modal show/hide
  var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
  };

  // This const is used for colgroup.col internal props. And should not provides to user.
  var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';

  function measureScrollbar() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vertical';

    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return 0;
    }
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
      return scrollbarVerticalSize;
    } else if (!isVertical && scrollbarHorizontalSize) {
      return scrollbarHorizontalSize;
    }
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
      scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    });
    // Append related overflow style
    if (isVertical) {
      scrollDiv.style.overflowY = 'scroll';
    } else {
      scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    var size = 0;
    if (isVertical) {
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      scrollbarVerticalSize = size;
    } else {
      size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
      scrollbarHorizontalSize = size;
    }

    document.body.removeChild(scrollDiv);
    return size;
  }

  function debounce(func, wait, immediate) {
    var timeout = void 0;
    function debounceFunc() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var context = this;
      // https://fb.me/react-event-pooling
      if (args[0] && args[0].persist) {
        args[0].persist();
      }
      var later = function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    }
    debounceFunc.cancel = function cancel() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    return debounceFunc;
  }

  var warned = {};
  function warningOnce(condition, format, args) {
    if (!warned[format]) {
      warning_1(condition, format, args);
      warned[format] = !condition;
    }
  }

  function remove(array, item) {
    var index = array.indexOf(item);
    var front = array.slice(0, index);
    var last = array.slice(index + 1, array.length);
    return front.concat(last);
  }

  /**
   * Returns only data- and aria- key/value pairs
   * @param {object} props
   */
  function getDataAndAriaProps(props) {
    return Object.keys(props).reduce(function (memo, key) {
      if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
        memo[key] = props[key];
      }
      return memo;
    }, {});
  }

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var from_1 = _core.Array.from;

  var from_1$1 = createCommonjsModule(function (module) {
  module.exports = { "default": from_1, __esModule: true };
  });

  unwrapExports(from_1$1);

  var toConsumableArray$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _from2 = _interopRequireDefault(from_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  };
  });

  var _toConsumableArray = unwrapExports(toConsumableArray$1);

  var ColumnManager = function () {
    function ColumnManager(columns, elements) {
      _classCallCheck(this, ColumnManager);

      this._cached = {};

      this.columns = columns || this.normalize(elements);
    }

    _createClass(ColumnManager, [{
      key: 'isAnyColumnsFixed',
      value: function isAnyColumnsFixed() {
        var _this = this;

        return this._cache('isAnyColumnsFixed', function () {
          return _this.columns.some(function (column) {
            return !!column.fixed;
          });
        });
      }
    }, {
      key: 'isAnyColumnsLeftFixed',
      value: function isAnyColumnsLeftFixed() {
        var _this2 = this;

        return this._cache('isAnyColumnsLeftFixed', function () {
          return _this2.columns.some(function (column) {
            return column.fixed === 'left' || column.fixed === true;
          });
        });
      }
    }, {
      key: 'isAnyColumnsRightFixed',
      value: function isAnyColumnsRightFixed() {
        var _this3 = this;

        return this._cache('isAnyColumnsRightFixed', function () {
          return _this3.columns.some(function (column) {
            return column.fixed === 'right';
          });
        });
      }
    }, {
      key: 'leftColumns',
      value: function leftColumns() {
        var _this4 = this;

        return this._cache('leftColumns', function () {
          return _this4.groupedColumns().filter(function (column) {
            return column.fixed === 'left' || column.fixed === true;
          });
        });
      }
    }, {
      key: 'rightColumns',
      value: function rightColumns() {
        var _this5 = this;

        return this._cache('rightColumns', function () {
          return _this5.groupedColumns().filter(function (column) {
            return column.fixed === 'right';
          });
        });
      }
    }, {
      key: 'leafColumns',
      value: function leafColumns() {
        var _this6 = this;

        return this._cache('leafColumns', function () {
          return _this6._leafColumns(_this6.columns);
        });
      }
    }, {
      key: 'leftLeafColumns',
      value: function leftLeafColumns() {
        var _this7 = this;

        return this._cache('leftLeafColumns', function () {
          return _this7._leafColumns(_this7.leftColumns());
        });
      }
    }, {
      key: 'rightLeafColumns',
      value: function rightLeafColumns() {
        var _this8 = this;

        return this._cache('rightLeafColumns', function () {
          return _this8._leafColumns(_this8.rightColumns());
        });
      }

      // add appropriate rowspan and colspan to column

    }, {
      key: 'groupedColumns',
      value: function groupedColumns() {
        var _this9 = this;

        return this._cache('groupedColumns', function () {
          var _groupColumns = function _groupColumns(columns) {
            var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

            // track how many rows we got
            rows[currentRow] = rows[currentRow] || [];
            var grouped = [];
            var setRowSpan = function setRowSpan(column) {
              var rowSpan = rows.length - currentRow;
              if (column && !column.children && // parent columns are supposed to be one row
              rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
                column.rowSpan = rowSpan;
              }
            };
            columns.forEach(function (column, index) {
              var newColumn = _extends$2({}, column);
              rows[currentRow].push(newColumn);
              parentColumn.colSpan = parentColumn.colSpan || 0;
              if (newColumn.children && newColumn.children.length > 0) {
                newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows);
                parentColumn.colSpan += newColumn.colSpan;
              } else {
                parentColumn.colSpan++;
              }
              // update rowspan to all same row columns
              for (var i = 0; i < rows[currentRow].length - 1; ++i) {
                setRowSpan(rows[currentRow][i]);
              }
              // last column, update rowspan immediately
              if (index + 1 === columns.length) {
                setRowSpan(newColumn);
              }
              grouped.push(newColumn);
            });
            return grouped;
          };
          return _groupColumns(_this9.columns);
        });
      }
    }, {
      key: 'normalize',
      value: function normalize(elements) {
        var _this10 = this;

        var columns = [];
        React__default.Children.forEach(elements, function (element) {
          if (!React__default.isValidElement(element)) {
            return;
          }
          var column = _extends$2({}, element.props);
          if (element.key) {
            column.key = element.key;
          }
          if (element.type.isTableColumnGroup) {
            column.children = _this10.normalize(column.children);
          }
          columns.push(column);
        });
        return columns;
      }
    }, {
      key: 'reset',
      value: function reset(columns, elements) {
        this.columns = columns || this.normalize(elements);
        this._cached = {};
      }
    }, {
      key: '_cache',
      value: function _cache(name, fn) {
        if (name in this._cached) {
          return this._cached[name];
        }
        this._cached[name] = fn();
        return this._cached[name];
      }
    }, {
      key: '_leafColumns',
      value: function _leafColumns(columns) {
        var _this11 = this;

        var leafColumns = [];
        columns.forEach(function (column) {
          if (!column.children) {
            leafColumns.push(column);
          } else {
            leafColumns.push.apply(leafColumns, _toConsumableArray(_this11._leafColumns(column.children)));
          }
        });
        return leafColumns;
      }
    }]);

    return ColumnManager;
  }();

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function ColGroup(props, _ref) {
    var table = _ref.table;
    var _table$props = table.props,
        prefixCls = _table$props.prefixCls,
        expandIconAsCell = _table$props.expandIconAsCell;
    var fixed = props.fixed;


    var cols = [];

    if (expandIconAsCell && fixed !== 'right') {
      cols.push(React__default.createElement('col', { className: prefixCls + '-expand-icon-col', key: 'rc-table-expand-icon-col' }));
    }

    var leafColumns = void 0;

    if (fixed === 'left') {
      leafColumns = table.columnManager.leftLeafColumns();
    } else if (fixed === 'right') {
      leafColumns = table.columnManager.rightLeafColumns();
    } else {
      leafColumns = table.columnManager.leafColumns();
    }
    cols = cols.concat(leafColumns.map(function (_ref2) {
      var key = _ref2.key,
          dataIndex = _ref2.dataIndex,
          width = _ref2.width,
          additionalProps = _ref2[INTERNAL_COL_DEFINE];

      var mergedKey = key !== undefined ? key : dataIndex;
      return React__default.createElement('col', _extends$2({ key: mergedKey, style: { width: width, minWidth: width } }, additionalProps));
    }));

    return React__default.createElement(
      'colgroup',
      null,
      cols
    );
  }

  ColGroup.propTypes = {
    fixed: propTypes.string
  };

  ColGroup.contextTypes = {
    table: propTypes.any
  };

  var defineProperty$7 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty$2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (obj, key, value) {
    if (key in obj) {
      (0, _defineProperty2.default)(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };
  });

  var _defineProperty$1 = unwrapExports(defineProperty$7);

  var objectWithoutProperties$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };
  });

  var _objectWithoutProperties = unwrapExports(objectWithoutProperties$1);

  function TableHeaderRow(_ref) {
    var row = _ref.row,
        index$$1 = _ref.index,
        height = _ref.height,
        components = _ref.components,
        onHeaderRow = _ref.onHeaderRow,
        prefixCls = _ref.prefixCls;

    var HeaderRow = components.header.row;
    var HeaderCell = components.header.cell;
    var rowProps = onHeaderRow(row.map(function (cell) {
      return cell.column;
    }), index$$1);
    var customStyle = rowProps ? rowProps.style : {};
    var style = _extends$2({ height: height }, customStyle);

    return React__default.createElement(
      HeaderRow,
      _extends$2({}, rowProps, { style: style }),
      row.map(function (cell, i) {
        var column = cell.column,
            cellProps = _objectWithoutProperties(cell, ['column']);

        var customProps = column.onHeaderCell ? column.onHeaderCell(column) : {};
        if (column.align) {
          customProps.style = _extends$2({}, customProps.style, { textAlign: column.align });
          customProps.className = classnames(customProps.className, column.className, _defineProperty$1({}, prefixCls + '-align-' + column.align, !!column.align));
        }
        return React__default.createElement(HeaderCell, _extends$2({}, cellProps, customProps, { key: column.key || column.dataIndex || i }));
      })
    );
  }

  TableHeaderRow.propTypes = {
    row: propTypes.array,
    index: propTypes.number,
    height: propTypes.oneOfType([propTypes.string, propTypes.number]),
    components: propTypes.any,
    onHeaderRow: propTypes.func,
    prefixCls: propTypes.string
  };

  function getRowHeight(state, props) {
    var fixedColumnsHeadRowsHeight = state.fixedColumnsHeadRowsHeight;
    var columns = props.columns,
        rows = props.rows,
        fixed = props.fixed;

    var headerHeight = fixedColumnsHeadRowsHeight[0];

    if (!fixed) {
      return null;
    }

    if (headerHeight && columns) {
      if (headerHeight === 'auto') {
        return 'auto';
      }
      return headerHeight / rows.length;
    }
    return null;
  }

  var TableHeaderRow$1 = lib_2(function (state, props) {
    return {
      height: getRowHeight(state, props)
    };
  })(TableHeaderRow);

  function getHeaderRows(columns) {
    var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var rows = arguments[2];

    rows = rows || [];
    rows[currentRow] = rows[currentRow] || [];

    columns.forEach(function (column) {
      if (column.rowSpan && rows.length < column.rowSpan) {
        while (rows.length < column.rowSpan) {
          rows.push([]);
        }
      }
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column: column
      };
      if (column.children) {
        getHeaderRows(column.children, currentRow + 1, rows);
      }
      if ('colSpan' in column) {
        cell.colSpan = column.colSpan;
      }
      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }
      if (cell.colSpan !== 0) {
        rows[currentRow].push(cell);
      }
    });
    return rows.filter(function (row) {
      return row.length > 0;
    });
  }

  function TableHeader(props, _ref) {
    var table = _ref.table;
    var components = table.components;
    var _table$props = table.props,
        prefixCls = _table$props.prefixCls,
        showHeader = _table$props.showHeader,
        onHeaderRow = _table$props.onHeaderRow;
    var expander = props.expander,
        columns = props.columns,
        fixed = props.fixed;


    if (!showHeader) {
      return null;
    }

    var rows = getHeaderRows(columns);

    expander.renderExpandIndentCell(rows, fixed);

    var HeaderWrapper = components.header.wrapper;

    return React__default.createElement(
      HeaderWrapper,
      { className: prefixCls + '-thead' },
      rows.map(function (row, index) {
        return React__default.createElement(TableHeaderRow$1, {
          prefixCls: prefixCls,
          key: index,
          index: index,
          fixed: fixed,
          columns: columns,
          rows: rows,
          row: row,
          components: components,
          onHeaderRow: onHeaderRow
        });
      })
    );
  }

  TableHeader.propTypes = {
    fixed: propTypes.string,
    columns: propTypes.array.isRequired,
    expander: propTypes.object.isRequired,
    onHeaderRow: propTypes.func
  };

  TableHeader.contextTypes = {
    table: propTypes.any
  };

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol$1;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol_1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || _MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = _MapCache;

  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize_1(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = _memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }
    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$3(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString$3;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }
    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = _castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get$1;

  function isInvalidRenderCellText(text) {
    return text && !React__default.isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
  }

  var TableCell = function (_React$Component) {
    _inherits(TableCell, _React$Component);

    function TableCell() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TableCell);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableCell.__proto__ || Object.getPrototypeOf(TableCell)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
        var _this$props = _this.props,
            record = _this$props.record,
            onCellClick = _this$props.column.onCellClick;

        if (onCellClick) {
          onCellClick(record, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TableCell, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            record = _props.record,
            indentSize = _props.indentSize,
            prefixCls = _props.prefixCls,
            indent = _props.indent,
            index = _props.index,
            expandIcon = _props.expandIcon,
            column = _props.column,
            BodyCell = _props.component;
        var dataIndex = column.dataIndex,
            render = column.render,
            _column$className = column.className,
            className = _column$className === undefined ? '' : _column$className;

        // We should return undefined if no dataIndex is specified, but in order to
        // be compatible with object-path's behavior, we return the record object instead.

        var text = void 0;
        if (typeof dataIndex === 'number') {
          text = get_1(record, dataIndex);
        } else if (!dataIndex || dataIndex.length === 0) {
          text = record;
        } else {
          text = get_1(record, dataIndex);
        }
        var tdProps = {};
        var colSpan = void 0;
        var rowSpan = void 0;

        if (render) {
          text = render(text, record, index);
          if (isInvalidRenderCellText(text)) {
            tdProps = text.props || tdProps;
            colSpan = tdProps.colSpan;
            rowSpan = tdProps.rowSpan;
            text = text.children;
          }
        }

        if (column.onCell) {
          tdProps = _extends$2({}, tdProps, column.onCell(record, index));
        }

        // Fix https://github.com/ant-design/ant-design/issues/1202
        if (isInvalidRenderCellText(text)) {
          text = null;
        }

        var indentText = expandIcon ? React__default.createElement('span', {
          style: { paddingLeft: indentSize * indent + 'px' },
          className: prefixCls + '-indent indent-level-' + indent
        }) : null;

        if (rowSpan === 0 || colSpan === 0) {
          return null;
        }

        if (column.align) {
          tdProps.style = _extends$2({}, tdProps.style, { textAlign: column.align });
        }

        return React__default.createElement(
          BodyCell,
          _extends$2({ className: className, onClick: this.handleClick }, tdProps),
          indentText,
          expandIcon,
          text
        );
      }
    }]);

    return TableCell;
  }(React__default.Component);

  TableCell.propTypes = {
    record: propTypes.object,
    prefixCls: propTypes.string,
    index: propTypes.number,
    indent: propTypes.number,
    indentSize: propTypes.number,
    column: propTypes.object,
    expandIcon: propTypes.node,
    component: propTypes.any
  };

  var TableRow = function (_React$Component) {
    _inherits(TableRow, _React$Component);

    function TableRow(props) {
      _classCallCheck(this, TableRow);

      var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

      _this.onTriggerEvent = function (rowPropFunc, legacyFunc, additionalFunc) {
        var _this$props = _this.props,
            record = _this$props.record,
            index$$1 = _this$props.index;


        return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Additional function like trigger `this.onHover` to handle self logic
          if (additionalFunc) {
            additionalFunc();
          }

          // [Legacy] Some legacy function like `onRowClick`.
          var event = args[0];

          if (legacyFunc) {
            legacyFunc(record, index$$1, event);
          }

          // Pass to the function from `onRow`
          if (rowPropFunc) {
            rowPropFunc.apply(undefined, args);
          }
        };
      };

      _this.onMouseEnter = function () {
        var _this$props2 = _this.props,
            onHover = _this$props2.onHover,
            rowKey = _this$props2.rowKey;

        onHover(true, rowKey);
      };

      _this.onMouseLeave = function () {
        var _this$props3 = _this.props,
            onHover = _this$props3.onHover,
            rowKey = _this$props3.rowKey;

        onHover(false, rowKey);
      };

      _this.shouldRender = props.visible;

      _this.state = {};
      return _this;
    }

    _createClass(TableRow, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.state.shouldRender) {
          this.saveRowRef();
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !!(this.props.visible || nextProps.visible);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.state.shouldRender && !this.rowRef) {
          this.saveRowRef();
        }
      }
    }, {
      key: 'setExpandedRowHeight',
      value: function setExpandedRowHeight() {
        var _props = this.props,
            store = _props.store,
            rowKey = _props.rowKey;

        var _store$getState = store.getState(),
            expandedRowsHeight = _store$getState.expandedRowsHeight;

        var height = this.rowRef.getBoundingClientRect().height;
        expandedRowsHeight = _extends$2({}, expandedRowsHeight, _defineProperty$1({}, rowKey, height));
        store.setState({ expandedRowsHeight: expandedRowsHeight });
      }
    }, {
      key: 'setRowHeight',
      value: function setRowHeight() {
        var _props2 = this.props,
            store = _props2.store,
            rowKey = _props2.rowKey;

        var _store$getState2 = store.getState(),
            fixedColumnsBodyRowsHeight = _store$getState2.fixedColumnsBodyRowsHeight;

        var height = this.rowRef.getBoundingClientRect().height;
        store.setState({
          fixedColumnsBodyRowsHeight: _extends$2({}, fixedColumnsBodyRowsHeight, _defineProperty$1({}, rowKey, height))
        });
      }
    }, {
      key: 'getStyle',
      value: function getStyle() {
        var _props3 = this.props,
            height = _props3.height,
            visible = _props3.visible;


        if (height && height !== this.style.height) {
          this.style = _extends$2({}, this.style, { height: height });
        }

        if (!visible && !this.style.display) {
          this.style = _extends$2({}, this.style, { display: 'none' });
        }

        return this.style;
      }
    }, {
      key: 'saveRowRef',
      value: function saveRowRef() {
        this.rowRef = ReactDOM$1.findDOMNode(this);

        var _props4 = this.props,
            isAnyColumnsFixed = _props4.isAnyColumnsFixed,
            fixed = _props4.fixed,
            expandedRow = _props4.expandedRow,
            ancestorKeys = _props4.ancestorKeys;


        if (!isAnyColumnsFixed) {
          return;
        }

        if (!fixed && expandedRow) {
          this.setExpandedRowHeight();
        }

        if (!fixed && ancestorKeys.length >= 0) {
          this.setRowHeight();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (!this.state.shouldRender) {
          return null;
        }

        var _props5 = this.props,
            prefixCls = _props5.prefixCls,
            columns = _props5.columns,
            record = _props5.record,
            rowKey = _props5.rowKey,
            index$$1 = _props5.index,
            onRow = _props5.onRow,
            indent = _props5.indent,
            indentSize = _props5.indentSize,
            hovered = _props5.hovered,
            height = _props5.height,
            visible = _props5.visible,
            components = _props5.components,
            hasExpandIcon = _props5.hasExpandIcon,
            renderExpandIcon = _props5.renderExpandIcon,
            renderExpandIconCell = _props5.renderExpandIconCell,
            onRowClick = _props5.onRowClick,
            onRowDoubleClick = _props5.onRowDoubleClick,
            onRowMouseEnter = _props5.onRowMouseEnter,
            onRowMouseLeave = _props5.onRowMouseLeave,
            onRowContextMenu = _props5.onRowContextMenu;


        var BodyRow = components.body.row;
        var BodyCell = components.body.cell;

        var className = this.props.className;


        if (hovered) {
          className += ' ' + prefixCls + '-hover';
        }

        var cells = [];

        renderExpandIconCell(cells);

        for (var i = 0; i < columns.length; i++) {
          var column = columns[i];

          warningOnce(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[onCell] instead.');

          cells.push(React__default.createElement(TableCell, {
            prefixCls: prefixCls,
            record: record,
            indentSize: indentSize,
            indent: indent,
            index: index$$1,
            column: column,
            key: column.key || column.dataIndex,
            expandIcon: hasExpandIcon(i) && renderExpandIcon(),
            component: BodyCell
          }));
        }

        var _ref = onRow(record, index$$1) || {},
            customClassName = _ref.className,
            customStyle = _ref.style,
            rowProps = _objectWithoutProperties(_ref, ['className', 'style']);

        var style = { height: height };

        if (!visible) {
          style.display = 'none';
        }

        style = _extends$2({}, style, customStyle);

        var rowClassName = classnames(prefixCls, className, prefixCls + '-level-' + indent, customClassName);

        return React__default.createElement(
          BodyRow,
          _extends$2({}, rowProps, {
            onClick: this.onTriggerEvent(rowProps.onClick, onRowClick),
            onDoubleClick: this.onTriggerEvent(rowProps.onDoubleClick, onRowDoubleClick),
            onMouseEnter: this.onTriggerEvent(rowProps.onMouseEnter, onRowMouseEnter, this.onMouseEnter),
            onMouseLeave: this.onTriggerEvent(rowProps.onMouseLeave, onRowMouseLeave, this.onMouseLeave),
            onContextMenu: this.onTriggerEvent(rowProps.onContextMenu, onRowContextMenu),
            className: rowClassName,
            style: style,
            'data-row-key': rowKey
          }),
          cells
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.visible || !prevState.visible && nextProps.visible) {
          return {
            shouldRender: true,
            visible: nextProps.visible
          };
        }
        return {
          visible: nextProps.visible
        };
      }
    }]);

    return TableRow;
  }(React__default.Component);

  TableRow.propTypes = {
    onRow: propTypes.func,
    onRowClick: propTypes.func,
    onRowDoubleClick: propTypes.func,
    onRowContextMenu: propTypes.func,
    onRowMouseEnter: propTypes.func,
    onRowMouseLeave: propTypes.func,
    record: propTypes.object,
    prefixCls: propTypes.string,
    onHover: propTypes.func,
    columns: propTypes.array,
    height: propTypes.oneOfType([propTypes.string, propTypes.number]),
    index: propTypes.number,
    rowKey: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    className: propTypes.string,
    indent: propTypes.number,
    indentSize: propTypes.number,
    hasExpandIcon: propTypes.func,
    hovered: propTypes.bool.isRequired,
    visible: propTypes.bool.isRequired,
    store: propTypes.object.isRequired,
    fixed: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    renderExpandIcon: propTypes.func,
    renderExpandIconCell: propTypes.func,
    components: propTypes.any,
    expandedRow: propTypes.bool,
    isAnyColumnsFixed: propTypes.bool,
    ancestorKeys: propTypes.array.isRequired
  };
  TableRow.defaultProps = {
    onRow: function onRow() {},
    onHover: function onHover() {},
    hasExpandIcon: function hasExpandIcon() {},
    renderExpandIcon: function renderExpandIcon() {},
    renderExpandIconCell: function renderExpandIconCell() {}
  };


  function getRowHeight$1(state, props) {
    var expandedRowsHeight = state.expandedRowsHeight,
        fixedColumnsBodyRowsHeight = state.fixedColumnsBodyRowsHeight;
    var fixed = props.fixed,
        rowKey = props.rowKey;


    if (!fixed) {
      return null;
    }

    if (expandedRowsHeight[rowKey]) {
      return expandedRowsHeight[rowKey];
    }

    if (fixedColumnsBodyRowsHeight[rowKey]) {
      return fixedColumnsBodyRowsHeight[rowKey];
    }

    return null;
  }

  polyfill(TableRow);

  var TableRow$1 = lib_2(function (state, props) {
    var currentHoverKey = state.currentHoverKey,
        expandedRowKeys = state.expandedRowKeys;
    var rowKey = props.rowKey,
        ancestorKeys = props.ancestorKeys;

    var visible = ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
      return ~expandedRowKeys.indexOf(k);
    });

    return {
      visible: visible,
      hovered: currentHoverKey === rowKey,
      height: getRowHeight$1(state, props)
    };
  })(TableRow);

  var ExpandIcon = function (_React$Component) {
    _inherits(ExpandIcon, _React$Component);

    function ExpandIcon() {
      _classCallCheck(this, ExpandIcon);

      return _possibleConstructorReturn(this, (ExpandIcon.__proto__ || Object.getPrototypeOf(ExpandIcon)).apply(this, arguments));
    }

    _createClass(ExpandIcon, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !shallowequal(nextProps, this.props);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            expandable = _props.expandable,
            prefixCls = _props.prefixCls,
            onExpand = _props.onExpand,
            needIndentSpaced = _props.needIndentSpaced,
            expanded = _props.expanded,
            record = _props.record;

        if (expandable) {
          var expandClassName = expanded ? 'expanded' : 'collapsed';
          return React__default.createElement('span', {
            className: prefixCls + '-expand-icon ' + prefixCls + '-' + expandClassName,
            onClick: function onClick(e) {
              return onExpand(record, e);
            }
          });
        } else if (needIndentSpaced) {
          return React__default.createElement('span', { className: prefixCls + '-expand-icon ' + prefixCls + '-spaced' });
        }
        return null;
      }
    }]);

    return ExpandIcon;
  }(React__default.Component);

  ExpandIcon.propTypes = {
    record: propTypes.object,
    prefixCls: propTypes.string,
    expandable: propTypes.any,
    expanded: propTypes.bool,
    needIndentSpaced: propTypes.bool,
    onExpand: propTypes.func
  };

  var ExpandableRow = function (_React$Component) {
    _inherits(ExpandableRow, _React$Component);

    function ExpandableRow() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ExpandableRow);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExpandableRow.__proto__ || Object.getPrototypeOf(ExpandableRow)).call.apply(_ref, [this].concat(args))), _this), _this.hasExpandIcon = function (columnIndex) {
        var expandRowByClick = _this.props.expandRowByClick;

        return !_this.expandIconAsCell && !expandRowByClick && columnIndex === _this.expandIconColumnIndex;
      }, _this.handleExpandChange = function (record, event) {
        var _this$props = _this.props,
            onExpandedChange = _this$props.onExpandedChange,
            expanded = _this$props.expanded,
            rowKey = _this$props.rowKey;

        if (_this.expandable) {
          onExpandedChange(!expanded, record, event, rowKey);
        }
      }, _this.handleRowClick = function (record, index$$1, event) {
        var _this$props2 = _this.props,
            expandRowByClick = _this$props2.expandRowByClick,
            onRowClick = _this$props2.onRowClick;

        if (expandRowByClick) {
          _this.handleExpandChange(record, event);
        }
        if (onRowClick) {
          onRowClick(record, index$$1, event);
        }
      }, _this.renderExpandIcon = function () {
        var _this$props3 = _this.props,
            prefixCls = _this$props3.prefixCls,
            expanded = _this$props3.expanded,
            record = _this$props3.record,
            needIndentSpaced = _this$props3.needIndentSpaced,
            expandIcon = _this$props3.expandIcon;


        if (expandIcon) {
          return expandIcon({
            prefixCls: prefixCls,
            expanded: expanded,
            record: record,
            needIndentSpaced: needIndentSpaced,
            expandable: _this.expandable,
            onExpand: _this.handleExpandChange
          });
        }

        return React__default.createElement(ExpandIcon, {
          expandable: _this.expandable,
          prefixCls: prefixCls,
          onExpand: _this.handleExpandChange,
          needIndentSpaced: needIndentSpaced,
          expanded: expanded,
          record: record
        });
      }, _this.renderExpandIconCell = function (cells) {
        if (!_this.expandIconAsCell) {
          return;
        }
        var prefixCls = _this.props.prefixCls;


        cells.push(React__default.createElement(
          'td',
          { className: prefixCls + '-expand-icon-cell', key: 'rc-table-expand-icon-cell' },
          _this.renderExpandIcon()
        ));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ExpandableRow, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.handleDestroy();
      }
    }, {
      key: 'handleDestroy',
      value: function handleDestroy() {
        var _props = this.props,
            onExpandedChange = _props.onExpandedChange,
            rowKey = _props.rowKey,
            record = _props.record;

        if (this.expandable) {
          onExpandedChange(false, record, null, rowKey, true);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            childrenColumnName = _props2.childrenColumnName,
            expandedRowRender = _props2.expandedRowRender,
            indentSize = _props2.indentSize,
            record = _props2.record,
            fixed = _props2.fixed,
            expanded = _props2.expanded;


        this.expandIconAsCell = fixed !== 'right' ? this.props.expandIconAsCell : false;
        this.expandIconColumnIndex = fixed !== 'right' ? this.props.expandIconColumnIndex : -1;
        var childrenData = record[childrenColumnName];
        this.expandable = !!(childrenData || expandedRowRender);

        var expandableRowProps = {
          indentSize: indentSize,
          expanded: expanded, // not used in TableRow, but it's required to re-render TableRow when `expanded` changes
          onRowClick: this.handleRowClick,
          hasExpandIcon: this.hasExpandIcon,
          renderExpandIcon: this.renderExpandIcon,
          renderExpandIconCell: this.renderExpandIconCell
        };

        return this.props.children(expandableRowProps);
      }
    }]);

    return ExpandableRow;
  }(React__default.Component);

  ExpandableRow.propTypes = {
    prefixCls: propTypes.string.isRequired,
    rowKey: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    fixed: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    record: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
    indentSize: propTypes.number,
    needIndentSpaced: propTypes.bool.isRequired,
    expandRowByClick: propTypes.bool,
    expanded: propTypes.bool.isRequired,
    expandIconAsCell: propTypes.bool,
    expandIconColumnIndex: propTypes.number,
    childrenColumnName: propTypes.string,
    expandedRowRender: propTypes.func,
    expandIcon: propTypes.func,
    onExpandedChange: propTypes.func.isRequired,
    onRowClick: propTypes.func,
    children: propTypes.func.isRequired
  };


  var ExpandableRow$1 = lib_2(function (_ref2, _ref3) {
    var expandedRowKeys = _ref2.expandedRowKeys;
    var rowKey = _ref3.rowKey;
    return {
      expanded: !!~expandedRowKeys.indexOf(rowKey)
    };
  })(ExpandableRow);

  var BaseTable = function (_React$Component) {
    _inherits(BaseTable, _React$Component);

    function BaseTable() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, BaseTable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseTable.__proto__ || Object.getPrototypeOf(BaseTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleRowHover = function (isHover, key) {
        _this.props.store.setState({
          currentHoverKey: isHover ? key : null
        });
      }, _this.renderRows = function (renderData, indent) {
        var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var table = _this.context.table;
        var columnManager = table.columnManager,
            components = table.components;
        var _table$props = table.props,
            prefixCls = _table$props.prefixCls,
            childrenColumnName = _table$props.childrenColumnName,
            rowClassName = _table$props.rowClassName,
            rowRef = _table$props.rowRef,
            onRowClick = _table$props.onRowClick,
            onRowDoubleClick = _table$props.onRowDoubleClick,
            onRowContextMenu = _table$props.onRowContextMenu,
            onRowMouseEnter = _table$props.onRowMouseEnter,
            onRowMouseLeave = _table$props.onRowMouseLeave,
            onRow = _table$props.onRow;
        var _this$props = _this.props,
            getRowKey = _this$props.getRowKey,
            fixed = _this$props.fixed,
            expander = _this$props.expander,
            isAnyColumnsFixed = _this$props.isAnyColumnsFixed;


        var rows = [];

        var _loop = function _loop(i) {
          var record = renderData[i];
          var key = getRowKey(record, i);
          var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);

          var onHoverProps = {};
          if (columnManager.isAnyColumnsFixed()) {
            onHoverProps.onHover = _this.handleRowHover;
          }

          var leafColumns = void 0;
          if (fixed === 'left') {
            leafColumns = columnManager.leftLeafColumns();
          } else if (fixed === 'right') {
            leafColumns = columnManager.rightLeafColumns();
          } else {
            leafColumns = _this.getColumns(columnManager.leafColumns());
          }

          var rowPrefixCls = prefixCls + '-row';

          var row = React__default.createElement(
            ExpandableRow$1,
            _extends$2({}, expander.props, {
              fixed: fixed,
              index: i,
              prefixCls: rowPrefixCls,
              record: record,
              key: key,
              rowKey: key,
              onRowClick: onRowClick,
              needIndentSpaced: expander.needIndentSpaced,
              onExpandedChange: expander.handleExpandChange
            }),
            function (expandableRow) {
              return (// eslint-disable-line
                React__default.createElement(TableRow$1, _extends$2({
                  fixed: fixed,
                  indent: indent,
                  className: className,
                  record: record,
                  index: i,
                  prefixCls: rowPrefixCls,
                  childrenColumnName: childrenColumnName,
                  columns: leafColumns,
                  onRow: onRow,
                  onRowDoubleClick: onRowDoubleClick,
                  onRowContextMenu: onRowContextMenu,
                  onRowMouseEnter: onRowMouseEnter,
                  onRowMouseLeave: onRowMouseLeave
                }, onHoverProps, {
                  rowKey: key,
                  ancestorKeys: ancestorKeys,
                  ref: rowRef(record, i, indent),
                  components: components,
                  isAnyColumnsFixed: isAnyColumnsFixed
                }, expandableRow))
              );
            }
          );

          rows.push(row);

          expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
        };

        for (var i = 0; i < renderData.length; i++) {
          _loop(i);
        }
        return rows;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BaseTable, [{
      key: 'getColumns',
      value: function getColumns(cols) {
        var _props = this.props,
            _props$columns = _props.columns,
            columns = _props$columns === undefined ? [] : _props$columns,
            fixed = _props.fixed;
        var table = this.context.table;
        var prefixCls = table.props.prefixCls;

        return (cols || columns).map(function (column) {
          return _extends$2({}, column, {
            className: !!column.fixed && !fixed ? classnames(prefixCls + '-fixed-columns-in-body', column.className) : column.className
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var table = this.context.table;
        var components = table.components;
        var _table$props2 = table.props,
            prefixCls = _table$props2.prefixCls,
            scroll = _table$props2.scroll,
            data = _table$props2.data,
            getBodyWrapper = _table$props2.getBodyWrapper;
        var _props2 = this.props,
            expander = _props2.expander,
            tableClassName = _props2.tableClassName,
            hasHead = _props2.hasHead,
            hasBody = _props2.hasBody,
            fixed = _props2.fixed;

        var tableStyle = {};

        if (!fixed && scroll.x) {
          // not set width, then use content fixed width
          if (scroll.x === true) {
            tableStyle.tableLayout = 'fixed';
          } else {
            tableStyle.width = scroll.x;
          }
        }

        var Table = hasBody ? components.table : 'table';
        var BodyWrapper = components.body.wrapper;

        var body = void 0;
        if (hasBody) {
          body = React__default.createElement(
            BodyWrapper,
            { className: prefixCls + '-tbody' },
            this.renderRows(data, 0)
          );
          if (getBodyWrapper) {
            body = getBodyWrapper(body);
          }
        }

        var columns = this.getColumns();

        return React__default.createElement(
          Table,
          { className: tableClassName, style: tableStyle, key: 'table' },
          React__default.createElement(ColGroup, { columns: columns, fixed: fixed }),
          hasHead && React__default.createElement(TableHeader, { expander: expander, columns: columns, fixed: fixed }),
          body
        );
      }
    }]);

    return BaseTable;
  }(React__default.Component);

  BaseTable.propTypes = {
    fixed: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    columns: propTypes.array.isRequired,
    tableClassName: propTypes.string.isRequired,
    hasHead: propTypes.bool.isRequired,
    hasBody: propTypes.bool.isRequired,
    store: propTypes.object.isRequired,
    expander: propTypes.object.isRequired,
    getRowKey: propTypes.func,
    isAnyColumnsFixed: propTypes.bool
  };
  BaseTable.contextTypes = {
    table: propTypes.any
  };


  var BaseTable$1 = lib_2()(BaseTable);

  function HeadTable(props, _ref) {
    var table = _ref.table;
    var _table$props = table.props,
        prefixCls = _table$props.prefixCls,
        scroll = _table$props.scroll,
        showHeader = _table$props.showHeader;
    var columns = props.columns,
        fixed = props.fixed,
        tableClassName = props.tableClassName,
        handleBodyScrollLeft = props.handleBodyScrollLeft,
        expander = props.expander;
    var saveRef = table.saveRef;
    var useFixedHeader = table.props.useFixedHeader;

    var headStyle = {};

    if (scroll.y) {
      useFixedHeader = true;
      // Add negative margin bottom for scroll bar overflow bug
      var scrollbarWidth = measureScrollbar('horizontal');
      if (scrollbarWidth > 0 && !fixed) {
        headStyle.marginBottom = '-' + scrollbarWidth + 'px';
        headStyle.paddingBottom = '0px';
      }
    }

    if (!useFixedHeader || !showHeader) {
      return null;
    }

    return React__default.createElement(
      'div',
      {
        key: 'headTable',
        ref: fixed ? null : saveRef('headTable'),
        className: prefixCls + '-header',
        style: headStyle,
        onScroll: handleBodyScrollLeft
      },
      React__default.createElement(BaseTable$1, {
        tableClassName: tableClassName,
        hasHead: true,
        hasBody: false,
        fixed: fixed,
        columns: columns,
        expander: expander
      })
    );
  }

  HeadTable.propTypes = {
    fixed: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    columns: propTypes.array.isRequired,
    tableClassName: propTypes.string.isRequired,
    handleBodyScrollLeft: propTypes.func.isRequired,
    expander: propTypes.object.isRequired
  };

  HeadTable.contextTypes = {
    table: propTypes.any
  };

  function BodyTable(props, _ref) {
    var table = _ref.table;
    var _table$props = table.props,
        prefixCls = _table$props.prefixCls,
        scroll = _table$props.scroll;
    var columns = props.columns,
        fixed = props.fixed,
        tableClassName = props.tableClassName,
        getRowKey = props.getRowKey,
        handleBodyScroll = props.handleBodyScroll,
        handleWheel = props.handleWheel,
        expander = props.expander,
        isAnyColumnsFixed = props.isAnyColumnsFixed;
    var saveRef = table.saveRef;
    var useFixedHeader = table.props.useFixedHeader;

    var bodyStyle = _extends$2({}, table.props.bodyStyle);
    var innerBodyStyle = {};

    if (scroll.x || fixed) {
      bodyStyle.overflowX = bodyStyle.overflowX || 'scroll';
      // Fix weird webkit render bug
      // https://github.com/ant-design/ant-design/issues/7783
      bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
    }

    if (scroll.y) {
      // maxHeight will make fixed-Table scrolling not working
      // so we only set maxHeight to body-Table here
      if (fixed) {
        innerBodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
        innerBodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
      } else {
        bodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
      }
      bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
      useFixedHeader = true;

      // Add negative margin bottom for scroll bar overflow bug
      var scrollbarWidth = measureScrollbar();
      if (scrollbarWidth > 0 && fixed) {
        bodyStyle.marginBottom = '-' + scrollbarWidth + 'px';
        bodyStyle.paddingBottom = '0px';
      }
    }

    var baseTable = React__default.createElement(BaseTable$1, {
      tableClassName: tableClassName,
      hasHead: !useFixedHeader,
      hasBody: true,
      fixed: fixed,
      columns: columns,
      expander: expander,
      getRowKey: getRowKey,
      isAnyColumnsFixed: isAnyColumnsFixed
    });

    if (fixed && columns.length) {
      var refName = void 0;
      if (columns[0].fixed === 'left' || columns[0].fixed === true) {
        refName = 'fixedColumnsBodyLeft';
      } else if (columns[0].fixed === 'right') {
        refName = 'fixedColumnsBodyRight';
      }
      delete bodyStyle.overflowX;
      delete bodyStyle.overflowY;
      return React__default.createElement(
        'div',
        { key: 'bodyTable', className: prefixCls + '-body-outer', style: _extends$2({}, bodyStyle) },
        React__default.createElement(
          'div',
          {
            className: prefixCls + '-body-inner',
            style: innerBodyStyle,
            ref: saveRef(refName),
            onWheel: handleWheel,
            onScroll: handleBodyScroll
          },
          baseTable
        )
      );
    }

    return React__default.createElement(
      'div',
      {
        key: 'bodyTable',
        className: prefixCls + '-body',
        style: bodyStyle,
        ref: saveRef('bodyTable'),
        onWheel: handleWheel,
        onScroll: handleBodyScroll
      },
      baseTable
    );
  }

  BodyTable.propTypes = {
    fixed: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    columns: propTypes.array.isRequired,
    tableClassName: propTypes.string.isRequired,
    handleWheel: propTypes.func.isRequired,
    handleBodyScroll: propTypes.func.isRequired,
    getRowKey: propTypes.func.isRequired,
    expander: propTypes.object.isRequired,
    isAnyColumnsFixed: propTypes.bool
  };

  BodyTable.contextTypes = {
    table: propTypes.any
  };

  var ExpandableTable = function (_React$Component) {
    _inherits(ExpandableTable, _React$Component);

    function ExpandableTable(props) {
      _classCallCheck(this, ExpandableTable);

      var _this = _possibleConstructorReturn(this, (ExpandableTable.__proto__ || Object.getPrototypeOf(ExpandableTable)).call(this, props));

      _initialiseProps.call(_this);

      var data = props.data,
          childrenColumnName = props.childrenColumnName,
          defaultExpandAllRows = props.defaultExpandAllRows,
          expandedRowKeys = props.expandedRowKeys,
          defaultExpandedRowKeys = props.defaultExpandedRowKeys,
          getRowKey = props.getRowKey;


      var finalExpandedRowKeys = [];
      var rows = [].concat(_toConsumableArray(data));

      if (defaultExpandAllRows) {
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          finalExpandedRowKeys.push(getRowKey(row, i));
          rows = rows.concat(row[childrenColumnName] || []);
        }
      } else {
        finalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
      }

      _this.columnManager = props.columnManager;
      _this.store = props.store;

      _this.store.setState({
        expandedRowsHeight: {},
        expandedRowKeys: finalExpandedRowKeys
      });
      return _this;
    }

    _createClass(ExpandableTable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.handleUpdated();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if ('expandedRowKeys' in this.props) {
          this.store.setState({
            expandedRowKeys: this.props.expandedRowKeys
          });
        }
        this.handleUpdated();
      }
    }, {
      key: 'handleUpdated',
      value: function handleUpdated() {
        // We should record latest expanded rows to avoid multiple rows remove cause `onExpandedRowsChange` trigger many times
        this.latestExpandedRows = null;
      }
    }, {
      key: 'renderExpandedRow',
      value: function renderExpandedRow(record, index$$1, _render, className, ancestorKeys, indent, fixed) {
        var _this2 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            expandIconAsCell = _props.expandIconAsCell,
            indentSize = _props.indentSize;

        var parentKey = ancestorKeys[ancestorKeys.length - 1];
        var rowKey = parentKey + '-extra-row';
        var components = {
          body: {
            row: 'tr',
            cell: 'td'
          }
        };
        var colCount = void 0;
        if (fixed === 'left') {
          colCount = this.columnManager.leftLeafColumns().length;
        } else if (fixed === 'right') {
          colCount = this.columnManager.rightLeafColumns().length;
        } else {
          colCount = this.columnManager.leafColumns().length;
        }
        var columns = [{
          key: 'extra-row',
          render: function render() {
            var _store$getState = _this2.store.getState(),
                expandedRowKeys = _store$getState.expandedRowKeys;

            var expanded = !!~expandedRowKeys.indexOf(parentKey);
            return {
              props: {
                colSpan: colCount
              },
              children: fixed !== 'right' ? _render(record, index$$1, indent, expanded) : '&nbsp;'
            };
          }
        }];
        if (expandIconAsCell && fixed !== 'right') {
          columns.unshift({
            key: 'expand-icon-placeholder',
            render: function render() {
              return null;
            }
          });
        }

        return React__default.createElement(TableRow$1, {
          key: rowKey,
          columns: columns,
          className: className,
          rowKey: rowKey,
          ancestorKeys: ancestorKeys,
          prefixCls: prefixCls + '-expanded-row',
          indentSize: indentSize,
          indent: indent,
          fixed: fixed,
          components: components,
          expandedRow: true
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            data = _props2.data,
            childrenColumnName = _props2.childrenColumnName,
            children = _props2.children;

        var needIndentSpaced = data.some(function (record) {
          return record[childrenColumnName];
        });

        return children({
          props: this.props,
          needIndentSpaced: needIndentSpaced,
          renderRows: this.renderRows,
          handleExpandChange: this.handleExpandChange,
          renderExpandIndentCell: this.renderExpandIndentCell
        });
      }
    }]);

    return ExpandableTable;
  }(React__default.Component);

  ExpandableTable.propTypes = {
    expandIconAsCell: propTypes.bool,
    expandedRowKeys: propTypes.array,
    expandedRowClassName: propTypes.func,
    defaultExpandAllRows: propTypes.bool,
    defaultExpandedRowKeys: propTypes.array,
    expandIconColumnIndex: propTypes.number,
    expandedRowRender: propTypes.func,
    expandIcon: propTypes.func,
    childrenColumnName: propTypes.string,
    indentSize: propTypes.number,
    onExpand: propTypes.func,
    onExpandedRowsChange: propTypes.func,
    columnManager: propTypes.object.isRequired,
    store: propTypes.object.isRequired,
    prefixCls: propTypes.string.isRequired,
    data: propTypes.array,
    children: propTypes.func.isRequired,
    getRowKey: propTypes.func.isRequired
  };
  ExpandableTable.defaultProps = {
    expandIconAsCell: false,
    expandedRowClassName: function expandedRowClassName() {
      return '';
    },
    expandIconColumnIndex: 0,
    defaultExpandAllRows: false,
    defaultExpandedRowKeys: [],
    childrenColumnName: 'children',
    indentSize: 15,
    onExpand: function onExpand() {},
    onExpandedRowsChange: function onExpandedRowsChange() {}
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handleExpandChange = function (expanded, record, event, rowKey) {
      var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (event) {
        event.stopPropagation();
      }

      var _props3 = _this3.props,
          onExpandedRowsChange = _props3.onExpandedRowsChange,
          onExpand = _props3.onExpand;

      var _store$getState2 = _this3.store.getState(),
          expandedRowKeys = _store$getState2.expandedRowKeys;

      if (expanded) {
        // row was expanded
        expandedRowKeys = [].concat(_toConsumableArray(expandedRowKeys), [rowKey]);
      } else {
        // row was collapse
        var expandedRowIndex = expandedRowKeys.indexOf(rowKey);
        if (expandedRowIndex !== -1) {
          expandedRowKeys = remove(expandedRowKeys, rowKey);
        }
      }

      if (!_this3.props.expandedRowKeys) {
        _this3.store.setState({ expandedRowKeys: expandedRowKeys });
      }

      // De-dup of repeat call
      if (!_this3.latestExpandedRows || !shallowequal(_this3.latestExpandedRows, expandedRowKeys)) {
        _this3.latestExpandedRows = expandedRowKeys;
        onExpandedRowsChange(expandedRowKeys);
      }
      if (!destroy) {
        onExpand(expanded, record);
      }
    };

    this.renderExpandIndentCell = function (rows, fixed) {
      var _props4 = _this3.props,
          prefixCls = _props4.prefixCls,
          expandIconAsCell = _props4.expandIconAsCell;

      if (!expandIconAsCell || fixed === 'right' || !rows.length) {
        return;
      }

      var iconColumn = {
        key: 'rc-table-expand-icon-cell',
        className: prefixCls + '-expand-icon-th',
        title: '',
        rowSpan: rows.length
      };

      rows[0].unshift(_extends$2({}, iconColumn, { column: iconColumn }));
    };

    this.renderRows = function (renderRows, rows, record, index$$1, indent, fixed, parentKey, ancestorKeys) {
      var _props5 = _this3.props,
          expandedRowClassName = _props5.expandedRowClassName,
          expandedRowRender = _props5.expandedRowRender,
          childrenColumnName = _props5.childrenColumnName;

      var childrenData = record[childrenColumnName];
      var nextAncestorKeys = [].concat(_toConsumableArray(ancestorKeys), [parentKey]);
      var nextIndent = indent + 1;

      if (expandedRowRender) {
        rows.push(_this3.renderExpandedRow(record, index$$1, expandedRowRender, expandedRowClassName(record, index$$1, indent), nextAncestorKeys, nextIndent, fixed));
      }

      if (childrenData) {
        rows.push.apply(rows, _toConsumableArray(renderRows(childrenData, nextIndent, nextAncestorKeys)));
      }
    };
  };

  polyfill(ExpandableTable);

  var ExpandableTable$1 = lib_2()(ExpandableTable);

  var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
      _classCallCheck(this, Table);

      var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

      _this.state = {};

      _this.getRowKey = function (record, index$$1) {
        var rowKey = _this.props.rowKey;
        var key = typeof rowKey === 'function' ? rowKey(record, index$$1) : record[rowKey];
        warningOnce(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
        return key === undefined ? index$$1 : key;
      };

      _this.handleWindowResize = function () {
        _this.syncFixedTableRowHeight();
        _this.setScrollPositionClassName();
      };

      _this.syncFixedTableRowHeight = function () {
        var tableRect = _this.tableNode.getBoundingClientRect();
        // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
        // see: https://github.com/ant-design/ant-design/issues/4836
        if (tableRect.height !== undefined && tableRect.height <= 0) {
          return;
        }
        var prefixCls = _this.props.prefixCls;

        var headRows = _this.headTable ? _this.headTable.querySelectorAll('thead') : _this.bodyTable.querySelectorAll('thead');
        var bodyRows = _this.bodyTable.querySelectorAll('.' + prefixCls + '-row') || [];
        var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
          return row.getBoundingClientRect().height || 'auto';
        });
        var state = _this.store.getState();
        var fixedColumnsBodyRowsHeight = [].reduce.call(bodyRows, function (acc, row) {
          var rowKey = row.getAttribute('data-row-key');
          var height = row.getBoundingClientRect().height || state.fixedColumnsBodyRowsHeight[rowKey] || 'auto';
          acc[rowKey] = height;
          return acc;
        }, {});
        if (shallowequal(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && shallowequal(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
          return;
        }

        _this.store.setState({
          fixedColumnsHeadRowsHeight: fixedColumnsHeadRowsHeight,
          fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight
        });
      };

      _this.handleBodyScrollLeft = function (e) {
        // Fix https://github.com/ant-design/ant-design/issues/7635
        if (e.currentTarget !== e.target) {
          return;
        }
        var target = e.target;
        var _this$props$scroll = _this.props.scroll,
            scroll = _this$props$scroll === undefined ? {} : _this$props$scroll;
        var headTable = _this.headTable,
            bodyTable = _this.bodyTable;

        if (target.scrollLeft !== _this.lastScrollLeft && scroll.x) {
          if (target === bodyTable && headTable) {
            headTable.scrollLeft = target.scrollLeft;
          } else if (target === headTable && bodyTable) {
            bodyTable.scrollLeft = target.scrollLeft;
          }
          _this.setScrollPositionClassName();
        }
        // Remember last scrollLeft for scroll direction detecting.
        _this.lastScrollLeft = target.scrollLeft;
      };

      _this.handleBodyScrollTop = function (e) {
        var target = e.target;
        // Fix https://github.com/ant-design/ant-design/issues/9033
        if (e.currentTarget !== target) {
          return;
        }
        var _this$props$scroll2 = _this.props.scroll,
            scroll = _this$props$scroll2 === undefined ? {} : _this$props$scroll2;
        var headTable = _this.headTable,
            bodyTable = _this.bodyTable,
            fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
            fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

        if (target.scrollTop !== _this.lastScrollTop && scroll.y && target !== headTable) {
          var scrollTop = target.scrollTop;
          if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
            fixedColumnsBodyLeft.scrollTop = scrollTop;
          }
          if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
            fixedColumnsBodyRight.scrollTop = scrollTop;
          }
          if (bodyTable && target !== bodyTable) {
            bodyTable.scrollTop = scrollTop;
          }
        }
        // Remember last scrollTop for scroll direction detecting.
        _this.lastScrollTop = target.scrollTop;
      };

      _this.handleBodyScroll = function (e) {
        _this.handleBodyScrollLeft(e);
        _this.handleBodyScrollTop(e);
      };

      _this.handleWheel = function (event) {
        var _this$props$scroll3 = _this.props.scroll,
            scroll = _this$props$scroll3 === undefined ? {} : _this$props$scroll3;

        if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
          event.preventDefault();
          var wd = event.deltaY;
          var target = event.target;
          var bodyTable = _this.bodyTable,
              fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
              fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

          var scrollTop = 0;

          if (_this.lastScrollTop) {
            scrollTop = _this.lastScrollTop + wd;
          } else {
            scrollTop = wd;
          }

          if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
            fixedColumnsBodyLeft.scrollTop = scrollTop;
          }
          if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
            fixedColumnsBodyRight.scrollTop = scrollTop;
          }
          if (bodyTable && target !== bodyTable) {
            bodyTable.scrollTop = scrollTop;
          }
        }
      };

      _this.saveRef = function (name) {
        return function (node) {
          _this[name] = node;
        };
      };

      ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function (name) {
        warningOnce(props[name] === undefined, name + ' is deprecated, please use onRow instead.');
      });

      warningOnce(props.getBodyWrapper === undefined, 'getBodyWrapper is deprecated, please use custom components instead.');

      _this.columnManager = new ColumnManager(props.columns, props.children);

      _this.store = lib_1({
        currentHoverKey: null,
        fixedColumnsHeadRowsHeight: [],
        fixedColumnsBodyRowsHeight: {}
      });

      _this.setScrollPosition('left');

      _this.debouncedWindowResize = debounce(_this.handleWindowResize, 150);
      return _this;
    }

    _createClass(Table, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          table: {
            props: this.props,
            columnManager: this.columnManager,
            saveRef: this.saveRef,
            components: merge_1({
              table: 'table',
              header: {
                wrapper: 'thead',
                row: 'tr',
                cell: 'th'
              },
              body: {
                wrapper: 'tbody',
                row: 'tr',
                cell: 'td'
              }
            }, this.props.components)
          }
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.columnManager.isAnyColumnsFixed()) {
          this.handleWindowResize();
          this.resizeEvent = addEventListenerWrap(window, 'resize', this.debouncedWindowResize);
        }

        // https://github.com/ant-design/ant-design/issues/11635
        if (this.headTable) {
          this.headTable.scrollLeft = 0;
        }
        if (this.bodyTable) {
          this.bodyTable.scrollLeft = 0;
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.columnManager.isAnyColumnsFixed()) {
          this.handleWindowResize();
          if (!this.resizeEvent) {
            this.resizeEvent = addEventListenerWrap(window, 'resize', this.debouncedWindowResize);
          }
        }
        // when table changes to empty, reset scrollLeft
        if (prevProps.data.length > 0 && this.props.data.length === 0 && this.hasScrollX()) {
          this.resetScrollX();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.resizeEvent) {
          this.resizeEvent.remove();
        }
        if (this.debouncedWindowResize) {
          this.debouncedWindowResize.cancel();
        }
      }
    }, {
      key: 'setScrollPosition',
      value: function setScrollPosition(position) {
        this.scrollPosition = position;
        if (this.tableNode) {
          var prefixCls = this.props.prefixCls;

          if (position === 'both') {
            componentClasses(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-left').add(prefixCls + '-scroll-position-right');
          } else {
            componentClasses(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-' + position);
          }
        }
      }
    }, {
      key: 'setScrollPositionClassName',
      value: function setScrollPositionClassName() {
        var node = this.bodyTable;
        var scrollToLeft = node.scrollLeft === 0;
        var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;
        if (scrollToLeft && scrollToRight) {
          this.setScrollPosition('both');
        } else if (scrollToLeft) {
          this.setScrollPosition('left');
        } else if (scrollToRight) {
          this.setScrollPosition('right');
        } else if (this.scrollPosition !== 'middle') {
          this.setScrollPosition('middle');
        }
      }
    }, {
      key: 'resetScrollX',
      value: function resetScrollX() {
        if (this.headTable) {
          this.headTable.scrollLeft = 0;
        }
        if (this.bodyTable) {
          this.bodyTable.scrollLeft = 0;
        }
      }
    }, {
      key: 'hasScrollX',
      value: function hasScrollX() {
        var _props$scroll = this.props.scroll,
            scroll = _props$scroll === undefined ? {} : _props$scroll;

        return 'x' in scroll;
      }
    }, {
      key: 'renderMainTable',
      value: function renderMainTable() {
        var _props = this.props,
            scroll = _props.scroll,
            prefixCls = _props.prefixCls;

        var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed();
        var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;

        var table = [this.renderTable({
          columns: this.columnManager.groupedColumns(),
          isAnyColumnsFixed: isAnyColumnsFixed
        }), this.renderEmptyText(), this.renderFooter()];

        return scrollable ? React__default.createElement(
          'div',
          { className: prefixCls + '-scroll' },
          table
        ) : table;
      }
    }, {
      key: 'renderLeftFixedTable',
      value: function renderLeftFixedTable() {
        var prefixCls = this.props.prefixCls;


        return React__default.createElement(
          'div',
          { className: prefixCls + '-fixed-left' },
          this.renderTable({
            columns: this.columnManager.leftColumns(),
            fixed: 'left'
          })
        );
      }
    }, {
      key: 'renderRightFixedTable',
      value: function renderRightFixedTable() {
        var prefixCls = this.props.prefixCls;


        return React__default.createElement(
          'div',
          { className: prefixCls + '-fixed-right' },
          this.renderTable({
            columns: this.columnManager.rightColumns(),
            fixed: 'right'
          })
        );
      }
    }, {
      key: 'renderTable',
      value: function renderTable(options) {
        var columns = options.columns,
            fixed = options.fixed,
            isAnyColumnsFixed = options.isAnyColumnsFixed;
        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            _props2$scroll = _props2.scroll,
            scroll = _props2$scroll === undefined ? {} : _props2$scroll;

        var tableClassName = scroll.x || fixed ? prefixCls + '-fixed' : '';

        var headTable = React__default.createElement(HeadTable, {
          key: 'head',
          columns: columns,
          fixed: fixed,
          tableClassName: tableClassName,
          handleBodyScrollLeft: this.handleBodyScrollLeft,
          expander: this.expander
        });

        var bodyTable = React__default.createElement(BodyTable, {
          key: 'body',
          columns: columns,
          fixed: fixed,
          tableClassName: tableClassName,
          getRowKey: this.getRowKey,
          handleWheel: this.handleWheel,
          handleBodyScroll: this.handleBodyScroll,
          expander: this.expander,
          isAnyColumnsFixed: isAnyColumnsFixed
        });

        return [headTable, bodyTable];
      }
    }, {
      key: 'renderTitle',
      value: function renderTitle() {
        var _props3 = this.props,
            title = _props3.title,
            prefixCls = _props3.prefixCls;

        return title ? React__default.createElement(
          'div',
          { className: prefixCls + '-title', key: 'title' },
          title(this.props.data)
        ) : null;
      }
    }, {
      key: 'renderFooter',
      value: function renderFooter() {
        var _props4 = this.props,
            footer = _props4.footer,
            prefixCls = _props4.prefixCls;

        return footer ? React__default.createElement(
          'div',
          { className: prefixCls + '-footer', key: 'footer' },
          footer(this.props.data)
        ) : null;
      }
    }, {
      key: 'renderEmptyText',
      value: function renderEmptyText() {
        var _props5 = this.props,
            emptyText = _props5.emptyText,
            prefixCls = _props5.prefixCls,
            data = _props5.data;

        if (data.length) {
          return null;
        }
        var emptyClassName = prefixCls + '-placeholder';
        return React__default.createElement(
          'div',
          { className: emptyClassName, key: 'emptyText' },
          typeof emptyText === 'function' ? emptyText() : emptyText
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = this.props;
        var prefixCls = props.prefixCls;

        if (this.state.columns) {
          this.columnManager.reset(props.columns);
        } else if (this.state.children) {
          this.columnManager.reset(null, props.children);
        }

        var className = props.prefixCls;
        if (props.className) {
          className += ' ' + props.className;
        }
        if (props.useFixedHeader || props.scroll && props.scroll.y) {
          className += ' ' + prefixCls + '-fixed-header';
        }
        if (this.scrollPosition === 'both') {
          className += ' ' + prefixCls + '-scroll-position-left ' + prefixCls + '-scroll-position-right';
        } else {
          className += ' ' + prefixCls + '-scroll-position-' + this.scrollPosition;
        }
        var hasLeftFixed = this.columnManager.isAnyColumnsLeftFixed();
        var hasRightFixed = this.columnManager.isAnyColumnsRightFixed();
        var dataAndAriaProps = getDataAndAriaProps(props);

        return React__default.createElement(
          lib_3,
          { store: this.store },
          React__default.createElement(
            ExpandableTable$1,
            _extends$2({}, props, { columnManager: this.columnManager, getRowKey: this.getRowKey }),
            function (expander) {
              _this2.expander = expander;
              return React__default.createElement(
                'div',
                _extends$2({
                  ref: _this2.saveRef('tableNode'),
                  className: className,
                  style: props.style,
                  id: props.id
                }, dataAndAriaProps),
                _this2.renderTitle(),
                React__default.createElement(
                  'div',
                  { className: prefixCls + '-content' },
                  _this2.renderMainTable(),
                  hasLeftFixed && _this2.renderLeftFixedTable(),
                  hasRightFixed && _this2.renderRightFixedTable()
                )
              );
            }
          )
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.columns && nextProps.columns !== prevState.columns) {
          return {
            columns: nextProps.columns,
            children: null
          };
        } else if (nextProps.children !== prevState.children) {
          return {
            columns: null,
            children: nextProps.children
          };
        }
        return null;
      }
    }]);

    return Table;
  }(React__default.Component);

  Table.propTypes = _extends$2({
    data: propTypes.array,
    useFixedHeader: propTypes.bool,
    columns: propTypes.array,
    prefixCls: propTypes.string,
    bodyStyle: propTypes.object,
    style: propTypes.object,
    rowKey: propTypes.oneOfType([propTypes.string, propTypes.func]),
    rowClassName: propTypes.oneOfType([propTypes.string, propTypes.func]),
    onRow: propTypes.func,
    onHeaderRow: propTypes.func,
    onRowClick: propTypes.func,
    onRowDoubleClick: propTypes.func,
    onRowContextMenu: propTypes.func,
    onRowMouseEnter: propTypes.func,
    onRowMouseLeave: propTypes.func,
    showHeader: propTypes.bool,
    title: propTypes.func,
    id: propTypes.string,
    footer: propTypes.func,
    emptyText: propTypes.oneOfType([propTypes.node, propTypes.func]),
    scroll: propTypes.object,
    rowRef: propTypes.func,
    getBodyWrapper: propTypes.func,
    children: propTypes.node,
    components: propTypes.shape({
      table: propTypes.any,
      header: propTypes.shape({
        wrapper: propTypes.any,
        row: propTypes.any,
        cell: propTypes.any
      }),
      body: propTypes.shape({
        wrapper: propTypes.any,
        row: propTypes.any,
        cell: propTypes.any
      })
    })
  }, ExpandableTable$1.PropTypes);
  Table.childContextTypes = {
    table: propTypes.any,
    components: propTypes.any
  };
  Table.defaultProps = {
    data: [],
    useFixedHeader: false,
    rowKey: 'key',
    rowClassName: function rowClassName() {
      return '';
    },
    onRow: function onRow() {},
    onHeaderRow: function onHeaderRow() {},

    prefixCls: 'rc-table',
    bodyStyle: {},
    style: {},
    showHeader: true,
    scroll: {},
    rowRef: function rowRef() {
      return null;
    },
    emptyText: function emptyText() {
      return 'No Data';
    }
  };


  polyfill(Table);

  function Column() {}

  Column.propTypes = {
    className: propTypes.string,
    colSpan: propTypes.number,
    title: propTypes.node,
    dataIndex: propTypes.string,
    width: propTypes.oneOfType([propTypes.number, propTypes.string]),
    fixed: propTypes.oneOf([true, 'left', 'right']),
    render: propTypes.func,
    onCellClick: propTypes.func,
    onCell: propTypes.func,
    onHeaderCell: propTypes.func
  };

  var ColumnGroup = function (_Component) {
    _inherits(ColumnGroup, _Component);

    function ColumnGroup() {
      _classCallCheck(this, ColumnGroup);

      return _possibleConstructorReturn(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
    }

    return ColumnGroup;
  }(React.Component);

  ColumnGroup.isTableColumnGroup = true;
  ColumnGroup.propTypes = {
    title: propTypes.node
  };

  Table.Column = Column;
  Table.ColumnGroup = ColumnGroup;

  function GenericTable(_ref) {
    var columns = _ref.columns,
        data = _ref.data,
        action = _ref.action,
        restProps = objectWithoutProperties(_ref, ["columns", "data", "action"]);

    return React__default.createElement(Table, _extends({ columns: columns, data: data }, restProps));
  }

  function getRender(Comp) {
    return function (mountNode, props) {
      ReactDOM.render(React__default.createElement(Comp, props), mountNode);
    };
  }

  var renderPagination = getRender(Pagination);
  var renderHeader = getRender(Header);
  var renderFooter = getRender(Footer);
  var renderHallItems = getRender(HallItems);
  var renderPublicityScrollPanel = getRender(PublicityScrollPanel);
  var renderHouseCards = getRender(function (_ref) {
    var _ref$houseInfos = _ref.houseInfos,
        houseInfos = _ref$houseInfos === undefined ? [] : _ref$houseInfos;

    return houseInfos.map(function (houseInfo) {
      return React__default.createElement(HouseCard, _extends({ key: houseInfo.href }, houseInfo));
    });
  });
  var renderRefundScrollPanel = getRender(RefundScrollPanel);
  var renderDevelopScrollPanel = getRender(DevelopScrollPanel);
  var renderLicenseScrollPanel = getRender(LicenseScrollPanel);

  var renderGenericTable = getRender(GenericTable);

  exports.renderPagination = renderPagination;
  exports.renderHeader = renderHeader;
  exports.renderFooter = renderFooter;
  exports.renderHallItems = renderHallItems;
  exports.renderPublicityScrollPanel = renderPublicityScrollPanel;
  exports.renderHouseCards = renderHouseCards;
  exports.renderRefundScrollPanel = renderRefundScrollPanel;
  exports.renderDevelopScrollPanel = renderDevelopScrollPanel;
  exports.renderLicenseScrollPanel = renderLicenseScrollPanel;
  exports.renderGenericTable = renderGenericTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tools.js.map
