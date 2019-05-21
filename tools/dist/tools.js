(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'jquery'], factory) :
  (factory((global.tools = {}),global.React,global.$));
}(this, (function (exports,React,$) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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
    React.useEffect(function () {
      $(".bottom-navigation__tabs a").click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        var i = $(".bottom-navigation__tabs .bottom-navigation__item").index($(this).parent());

        $(this).parent().addClass("active").siblings().removeClass("active");

        $(".bottom-navigation__tab-content .bottom-navigation__list").removeClass("active").eq(i).addClass("active");
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
          { "class": "bottom-navigation__tabs" },
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
          { "class": "bottom-navigation__tab-content" },
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
              href = _ref2.href;

          return React__default.createElement(
            "div",
            { key: href, "class": "item-box__item" },
            React__default.createElement(
              "a",
              { href: href, target: "_blank" },
              React__default.createElement("img", { src: imgUrl, alt: label }),
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

  function PublicityScrollPanel(_ref) {
    var label = _ref.label,
        items = _ref.items,
        href = _ref.href;

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

  exports.renderPagination = renderPagination;
  exports.renderHeader = renderHeader;
  exports.renderFooter = renderFooter;
  exports.renderHallItems = renderHallItems;
  exports.renderPublicityScrollPanel = renderPublicityScrollPanel;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tools.js.map
