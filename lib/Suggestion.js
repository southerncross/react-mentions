"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _keys = require("lodash/keys");

var _keys2 = _interopRequireDefault(_keys);

var _substyle = require("substyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestion = function (_Component) {
  (0, _inherits3.default)(Suggestion, _Component);

  function Suggestion() {
    (0, _classCallCheck3.default)(this, Suggestion);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Suggestion).apply(this, arguments));
  }

  (0, _createClass3.default)(Suggestion, [{
    key: "render",
    value: function render() {
      var rest = (0, _omit2.default)(this.props, (0, _keys2.default)(Suggestion.propTypes));

      return _react2.default.createElement(
        "li",
        (0, _extends3.default)({}, rest, substyle(this.props, { "&focused": this.props.focused })),
        this.renderContent()
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _props = this.props;
      var id = _props.id;
      var query = _props.query;
      var descriptor = _props.descriptor;
      var suggestion = _props.suggestion;


      var display = this.getDisplay();
      var highlightedDisplay = this.renderHighlightedDisplay(display, query);

      if (descriptor.props.renderSuggestion) {
        return descriptor.props.renderSuggestion(suggestion, query, highlightedDisplay);
      }

      return highlightedDisplay;
    }
  }, {
    key: "getDisplay",
    value: function getDisplay() {
      var suggestion = this.props.suggestion;


      if (suggestion instanceof String) {
        return suggestion;
      }

      var id = suggestion.id;
      var display = suggestion.display;


      if (!id || !display) {
        return id;
      }

      return display;
    }
  }, {
    key: "renderHighlightedDisplay",
    value: function renderHighlightedDisplay(display) {
      var query = this.props.query;


      var i = display.toLowerCase().indexOf(query.toLowerCase());

      if (i === -1) {
        return _react2.default.createElement(
          "span",
          substyle(this.props, "display"),
          display
        );
      }

      return _react2.default.createElement(
        "span",
        substyle(this.props, "display"),
        display.substring(0, i),
        _react2.default.createElement(
          "b",
          substyle(this.props, "highlight"),
          display.substring(i, i + query.length)
        ),
        display.substring(i + query.length)
      );
    }
  }]);
  return Suggestion;
}(_react.Component);

Suggestion.propTypes = {
  id: _react.PropTypes.string.isRequired,
  query: _react.PropTypes.string.isRequired,

  suggestion: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    display: _react.PropTypes.string
  })]).isRequired,
  descriptor: _react.PropTypes.object.isRequired,

  focused: _react.PropTypes.bool
};
exports.default = Suggestion;


var substyle = (0, _substyle.defaultStyle)({
  cursor: "pointer"
});