webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeData */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* unused harmony export serverClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config_project__ = __webpack_require__(181);
// ----------------------
// IMPORTS

// React propTypes


// Apollo client library


// Custom configuration/settings


// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.
var networkInterface = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["createNetworkInterface"])({
  uri: __WEBPACK_IMPORTED_MODULE_2_config_project__["a" /* APOLLO */].uri
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_1_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    },
    networkInterface: networkInterface
  }, opt));
}

// Helper function that will merge a passed object with the expected
// React propTypes 'shape', for use with the `react-apollo` `graphql` HOC
function mergeData(toMerge) {
  return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape(Object.assign({
    loading: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool.isRequired
  }, toMerge));
}

// Creates a new browser client
function browserClient() {
  return createClient();
}

// Creates a new server-side client
function serverClient() {
  return createClient({
    ssrMode: true
  });
}

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3q0nqQ9ZKcBd8-DB7rcoyt","hashtag":"hashtag-1Dm1gOm7e37k27bIcRcehj"};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_app__ = __webpack_require__(185);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code


// ----------------------

// Create a new browser Apollo client
var client = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
}

// The <Root> component.  We'll run this as a self-contained function since
// we're using a bunch of temporary vars that we can safely discard.
//
// If we have hot reloading enabled (i.e. if we're in development), then
// we'll wrap the whole thing in <AppContainer> so that our views can respond
// to code changes as needed
var Root = function () {
  // Wrap the component hierarchy in <BrowserRouter>, so that our children
  // can respond to route changes
  var Chain = function Chain() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
      { store: store, client: client },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_app__["a" /* default */], null)
      )
    );
  };

  // React hot reloading -- only enabled in development.  This branch will
  // be shook from production, so we can run a `require` statement here
  // without fear that it'll inflate the bundle size
  if (false) {
    // <AppContainer> will respond to our Hot Module Reload (HMR) changes
    // back from WebPack, and handle re-rendering the chain as needed
    var AppContainer = require('react-hot-loader').AppContainer;

    // Start our 'listener' at the root component, so that any changes that
    // occur in the hierarchy can be captured
    module.hot.accept('src/app', function () {
      // Refresh the entry point of our app, to get the changes.

      // eslint-disable-next-line
      require('src/app').default;

      // Re-render the hierarchy
      doRender();
    });

    return function () {
      return React.createElement(
        AppContainer,
        null,
        React.createElement(Chain, null)
      );
    };
  }
  return Chain;
}();

doRender();

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APOLLO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_lib_env__ = __webpack_require__(182);
/* eslint-disable import/prefer-default-export */

// ----------------------
// IMPORTS

/* Local */


// ----------------------

var APOLLO = {
  uri: 'http://' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_kit_lib_env__["a" /* getServerHost */])() + ':' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_kit_lib_env__["b" /* getServerPort */])() + '/graphql'
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getHost */
/* harmony export (immutable) */ __webpack_exports__["a"] = getServerHost;
/* unused harmony export getBrowserHost */
/* unused harmony export getPort */
/* unused harmony export getBrowserPort */
/* harmony export (immutable) */ __webpack_exports__["b"] = getServerPort;
/* unused harmony export getURL */
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
var defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
var defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
var isProduction = "development" === 'production';
var isServer = "boolean" !== 'undefined' && false;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return (isServer ? 'SERVER' : 'BROWSER') + '_' + (isProduction ? 'PROD' : 'DEV');
}

// Get browser stub
function getBrowserStub() {
  return 'BROWSER_' + (isProduction ? 'PROD' : 'DEV');
}

// Get server stub
function getServerStub() {
  return 'SERVER_' + (isProduction ? 'PROD' : 'DEV');
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[getStub() + '_HOST'] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[getServerStub() + '_HOST'] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[getBrowserStub() + '_HOST'] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  var port = process.env[getStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  var port = process.env[getBrowserStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  var port = process.env[getServerStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  return 'http://' + getHost() + ':' + getPort();
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(24)))

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_store_reducers_js__ = __webpack_require__(188);
/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS



// ----------------------

function createNewStore(apolloClient) {
    var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
    // By default, we'll use just the apollo reducer.  We can easily add our
    // own here, for global store management outside of Apollo
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
        apollo: apolloClient.reducer(),
        currentHashtag: __WEBPACK_IMPORTED_MODULE_1__src_store_reducers_js__["a" /* currentHashtag */]
        //        currentPartialHashtag,
    }),
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object
    // eslint-disable-next-line no-underscore-dangle
     true ? window.__STATE__ : {}, // initial state
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware()),
    // Enable Redux Devtools on the browser, for easy state debugging
    // eslint-disable-next-line no-underscore-dangle
    !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
        return f;
    }));

    return store;
}

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* unused harmony export Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(94);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS






// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.

var Status = function (_React$PureComponent) {
  _inherits(Status, _React$PureComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  _createClass(Status, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          code = _props.code,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Route */], { render: function render(_ref) {
          var staticContext = _ref.staticContext;

          if (staticContext) {
            staticContext.status = code;
          }
          return children;
        } });
    }
  }]);

  return Status;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.


Status.propTypes = {
  code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Status.defaultProps = {
  children: null
};
var NotFound = function (_React$PureComponent2) {
  _inherits(NotFound, _React$PureComponent2);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: 404 },
        children
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.
NotFound.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
NotFound.defaultProps = {
  children: null
};
var Redirect = function (_React$PureComponent3) {
  _inherits(Redirect, _React$PureComponent3);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          from = _props2.from,
          push = _props2.push,
          permanent = _props2.permanent;

      var code = permanent ? 301 : 302;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: code },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Redirect */], { to: to, from: from, push: push })
      );
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
Redirect.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  permanent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kit_lib_apollo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_global_css__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_less__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_actions_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_hashtagAutocomplete_js__ = __webpack_require__(187);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ----------------------
// IMPORTS

// React



// GraphQL


// Routing


// <Helmet> component for setting the page title


// Helper to merge expected React PropTypes to Apollo-enabled component


// NotFound 404 handler for unknown routes


// Styles





// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/








// ----------------------

// We'll display this <Home> component when we're on the / route
var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'You\'re on the home page - click another link above'
  );
};

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
var Page = function Page(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Changed route: ',
    match.params.name
  );
};

// Create a route that will be displayed when the code isn't found
var WhenNotFound = function WhenNotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__["a" /* NotFound */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Unknown route - the 404 handler was triggered!'
    )
  );
};

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
var Stats = function Stats() {
  var info = [['Environment', "development"]];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.data },
    info.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: key },
        key,
        ': ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          val
        )
      );
    })
  );
};

// Now, let's create a GraphQL-enabled component...

// First, create the GraphQL query that we'll use to request data from our
// sample endpoint
// const query = gql`
//   query {
//     message {
//       text
//     }
//   }
// `;

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
// @graphql(query)
// class GraphQLMessage extends React.PureComponent {    
//   static propTypes = {
//     data: mergeData({
//       message: PropTypes.arrayOf(
//         PropTypes.shape({
//           text: PropTypes.string.isRequired,
//         }),
//       ),
//     }),
//   }

//   render() {
//     const { data } = this.props;
//     const message = data.message && data.message.text;
//     const isLoading = data.loading ? 'yes' : 'nope';
//     return (
//       <div>
//         <h2>Message from GraphQL server: <em>{message}</em></h2>
//         <h2>Currently loading?: {isLoading}</h2>
//       </div>
//     );
//   }
// }

// Example of CSS, SASS and LESS styles being used together
var Styles = function Styles() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.styleExamples },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.example },
      'Styled by CSS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.example },
      'Styled by SASS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_10__styles_less___default.a.example },
      'Styled by LESS'
    )
  );
};

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_helmet___default.a, {
          title: 'hashbump',
          meta: [{
            name: 'description',
            content: 'bump that hashtag'
          }] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.hello },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg___default.a, alt: 'hashbump', className: __WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.logo })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'center',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_hashtagAutocomplete_js__["a" /* default */], { className: __WEBPACK_IMPORTED_MODULE_9__styles_scss___default.a.hashtag })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__["a" /* default */], { bump: 'yay' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__["a" /* default */], { bump: 'grrr' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__["a" /* default */], { bump: 'dunno' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__["a" /* default */], { bump: 'meh' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(66);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _templateObject = _taggedTemplateLiteral(['\n  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {\n    bumpHashtag(name: $currentHashtag, bump: $bump) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {\n    bumpHashtag(name: $currentHashtag, bump: $bump) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var mutation = __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject);

var BumpButton = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(function (state) {
    return { currentHashtag: state.currentHashtag };
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(mutation), _dec(_class = _dec2(_class = function (_React$PureComponent) {
    _inherits(BumpButton, _React$PureComponent);

    function BumpButton() {
        _classCallCheck(this, BumpButton);

        var _this = _possibleConstructorReturn(this, (BumpButton.__proto__ || Object.getPrototypeOf(BumpButton)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);

        _this.imageLookup = { yay: "../hashbump-yay.svg",
            grrr: "../hashbump-grrr.svg",
            dunno: "../hashbump-dunno.svg",
            meh: "../hashbump-meh.svg" };
        return _this;
    }

    _createClass(BumpButton, [{
        key: 'handleClick',
        value: function handleClick() {
            var count = this.props.bump + 'Count';

            this.props.mutate(this.props.currentHashtag, count);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.imageLookup[this.props.bump], onClick: this.handleClick })
            );
        }
    }]);

    return BumpButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (BumpButton);

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autocomplete__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query suggestions($partialHashtag: String!) {\n    suggestions(partialHashtag: $partialHashtag)\n  }\n'], ['\n  query suggestions($partialHashtag: String!) {\n    suggestions(partialHashtag: $partialHashtag)\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var suggestionsQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject), {
    name: "suggestionsQuery",
    options: function options(props) {
        return {
            variables: { partialHashtag: "!" }
        };
    }
});

var hashtagQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject2), {
    name: "hashtagQuery",
    options: function options(props) {
        return {
            variables: { name: "buffalo" }
        };
    }
});

var HashtagAutocomplete = function (_React$Component) {
    _inherits(HashtagAutocomplete, _React$Component);

    function HashtagAutocomplete(props) {
        _classCallCheck(this, HashtagAutocomplete);

        var _this = _possibleConstructorReturn(this, (HashtagAutocomplete.__proto__ || Object.getPrototypeOf(HashtagAutocomplete)).call(this, props));

        _this.state = { value: '', items: [] };

        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleGetItemValue = _this.handleGetItemValue.bind(_this);
        _this.handleRenderItem = _this.handleRenderItem.bind(_this);
        return _this;
    }

    _createClass(HashtagAutocomplete, [{
        key: 'handleRenderItem',
        value: function handleRenderItem(item, isHighlighted) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { background: isHighlighted ? 'lightgray' : 'white' } },
                item.term
            );
        }
    }, {
        key: 'handleGetItemValue',
        value: function handleGetItemValue(item) {
            return item.term;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            var suggestionsQueryData = this.props.suggestionsQuery;
            var hashtagQueryData = this.props.hashtagQuery;
            var currentHashtagValue = event.target.value;

            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtag */])(currentHashtagValue));
            this.setState({ value: currentHashtagValue, items: this.state.items });

            // !!!!!!
            // ugly kludge: fix this so it has a proper type defined in the schema
            suggestionsQueryData.refetch({ partialHashtag: currentHashtagValue }, { name: currentHashtagValue }).then(function (dataObject) {
                var suggestions = JSON.parse(dataObject.data.suggestions[0]).suggest.analyzedSuggestion['' + currentHashtagValue].suggestions;
                _this2.setState({ items: suggestions });
                _this2.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtag */])(currentHashtagValue));
            });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(val) {
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtag */])(val));
            this.setState({ value: val });
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: __WEBPACK_IMPORTED_MODULE_6__styles_scss___default.a.hashtag },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_autocomplete___default.a, {
                    getItemValue: this.handleGetItemValue,
                    renderItem: this.handleRenderItem,
                    items: this.state.items,
                    value: this.state.value,
                    onChange: this.handleChange, t: true,
                    onSelect: this.handleSelect
                })
            );
        }
    }]);

    return HashtagAutocomplete;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(), hashtagQuery, suggestionsQuery)(HashtagAutocomplete));

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = currentHashtag;
function currentHashtag() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "buffalo";
    var action = arguments[1];

    switch (action.type) {
        case 'SET_CURRENT_HASHTAG':
            return action.hashtag;
        default:
            return state;
    }
}

// export function currentPartialHashtag(state = "", action) {
//   switch (action.type) {
//   case 'SET_CURRENT_PARTIAL_HASHTAG':
//       return action.currentPartialHashtag;
//   default:
//       return state;
//   }
// }

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello":"hello-1P9zCbIx8YQ5eID6A-67d6","logo":"logo-1tNzgJsJwXMqFQ0a4xMkPk","data":"data-1oklYPlS4mQJRj2Dp24Czw","styleExamples":"styleExamples-2cmVxjYoxVhR_tpCfyIq_T","example":"example-3quOHBYrr7YOUvefuRPyGa"};

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-277HEpojiJhg7dzqJQ0KRt"};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hashbump-logo.c093c35762e7ccd4caaa39ce9d1cc87f.svg";

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setCurrentHashtag;
function setCurrentHashtag(hashtag) {
    return {
        type: 'SET_CURRENT_HASHTAG',
        hashtag: hashtag
    };
}

// export function setCurrentPartialHashtag(currentPartialHashtag) {
//     return {
//         type: 'SET_CURRENT_PARTIAL_HASHTAG',
//         currentPartialHashtag,
//     };
// }

/***/ })

},[376]);
//# sourceMappingURL=browser.js.map