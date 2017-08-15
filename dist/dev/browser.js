webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeData */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* unused harmony export serverClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config_project__ = __webpack_require__(182);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (key) {

                    var lookupList = { yay: "../hashbump-yay.svg",
                                        grrr: "../hashbump-grrr.svg",
                                        dunno: "../hashbump-dunno.svg",
                                        meh: "../hashbump-meh.svg" };

                    return lookupList[key];
});

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3q0nqQ9ZKcBd8-DB7rcoyt","hashtag":"hashtag-1Dm1gOm7e37k27bIcRcehj"};

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_app__ = __webpack_require__(186);
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APOLLO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_lib_env__ = __webpack_require__(183);
/* eslint-disable import/prefer-default-export */

// ----------------------
// IMPORTS

/* Local */


// ----------------------

var APOLLO = {
  uri: 'http://' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_kit_lib_env__["a" /* getServerHost */])() + ':' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_kit_lib_env__["b" /* getServerPort */])() + '/graphql'
};

/***/ }),

/***/ 183:
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_store_reducers_js__ = __webpack_require__(190);
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
        currentHashtagName: __WEBPACK_IMPORTED_MODULE_1__src_store_reducers_js__["a" /* currentHashtagName */]
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

/***/ 185:
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kit_lib_apollo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_global_css__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_less__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__hashbump_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_actions_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_bumpButton_js__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_hashtagAutocomplete_js__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__ = __webpack_require__(188);
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
          { style: { height: "30vh" } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { float: "left", width: "50%" } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'yay', topCountType: 'all-time' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'grrr', topCountType: 'all-time' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'dunno', topCountType: 'all-time' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'meh', topCountType: 'all-time' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { float: "right", width: "50%" } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'yay', topCountType: 'today' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'grrr', topCountType: 'today' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'dunno', topCountType: 'today' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_bumpDisplay_js__["a" /* default */], { bump: 'meh', topCountType: 'today' })
          )
        ),
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility_image_lookup__ = __webpack_require__(107);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {\n    bumpHashtag(name: $currentHashtag, bump: $bump) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {\n    bumpHashtag(name: $currentHashtag, bump: $bump) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  mutation addHashtag($currentHashtag: String!) {\n    addHashtag(name: $currentHashtag) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  mutation addHashtag($currentHashtag: String!) {\n    addHashtag(name: $currentHashtag) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








//<!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 100, 100" height="50%" width="auto"> -->

var hashtagQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject), {
    data: "hashtag",
    name: "hashtagQuery",
    options: {
        variables: { name: "" }
    }
});

var bumpHashtagMutation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject2), {
    name: "bumpHashtagMutation"
});

var addHashtagMutation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject3), {
    name: "addHashtagMutation"
});

var BumpButton = function (_React$PureComponent) {
    _inherits(BumpButton, _React$PureComponent);

    function BumpButton() {
        _classCallCheck(this, BumpButton);

        var _this = _possibleConstructorReturn(this, (BumpButton.__proto__ || Object.getPrototypeOf(BumpButton)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(BumpButton, [{
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            var hashtagQuery = this.props.hashtagQuery;
            var bumpHashtagMutation = this.props.bumpHashtagMutation;
            var addHashtagMutation = this.props.addHashtagMutation;

            hashtagQuery.refetch({ name: this.props.currentHashtagName }).then(function (dataObject) {
                if (!dataObject.data.hashtag) {
                    addHashtagMutation({ variables: { currentHashtag: _this2.props.currentHashtagName } }).then(function (hashtag) {
                        bumpHashtagMutation({ variables: { currentHashtag: _this2.props.currentHashtagName, bump: _this2.props.bump } }).then(function () {
                            hashtagQuery.refetch({ name: _this2.props.currentHashtagName });
                        });
                    });
                } else {
                    bumpHashtagMutation({ variables: { currentHashtag: _this2.props.currentHashtagName, bump: _this2.props.bump } }).then(function () {
                        hashtagQuery.refetch({ name: _this2.props.currentHashtagName });
                    });
                }
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            var hashtagQuery = this.props.hashtagQuery;

            hashtagQuery.refetch({ name: this.props.currentHashtagName });
        }
    }, {
        key: 'render',
        value: function render() {
            var count = 0;

            if (this.props.hashtagQuery.hashtag) {

                count = this.props.hashtagQuery.hashtag[this.props.bump + 'Count'];
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    null,
                    count
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility_image_lookup__["a" /* default */])(this.props.bump), onClick: this.handleClick })
            );
        }
    }]);

    return BumpButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(function (state) {
    return { currentHashtagName: state.currentHashtagName };
}), hashtagQuery, bumpHashtagMutation, addHashtagMutation)(BumpButton));

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_image_lookup__ = __webpack_require__(107);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query topCount($bump: String!, $topCountType: String!) {\n    topCount(bump: $bump, topCountType: $topCountType) {\n      name\n      count\n    }\n  }\n'], ['\n  query topCount($bump: String!, $topCountType: String!) {\n    topCount(bump: $bump, topCountType: $topCountType) {\n      name\n      count\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var topCountQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject), {
    data: "topCount",
    name: "topCountQuery"
});

var BumpDisplay = function (_React$PureComponent) {
    _inherits(BumpDisplay, _React$PureComponent);

    function BumpDisplay() {
        _classCallCheck(this, BumpDisplay);

        return _possibleConstructorReturn(this, (BumpDisplay.__proto__ || Object.getPrototypeOf(BumpDisplay)).apply(this, arguments));
    }

    _createClass(BumpDisplay, [{
        key: 'render',
        value: function render() {
            if (this.props.topCountQuery.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    'loading...'
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { height: "5vh", width: "100vw" } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'svg',
                        { version: '1.1', style: { height: "100%" }, viewBox: '0 0 96 96' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'g',
                            { id: 'yay', display: this.props.bump == "yay" ? "inline-block" : "none" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'g',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z', style: { fill: "#8845AD" } })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z', style: { fill: "#8845AD" } })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72.594,60.545 C60.612,84.509 36.3,84.494 24.486,60.525', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'g',
                            { id: 'grrr', display: this.props.bump == "grrr" ? "inline-block" : "none" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M48.54,93.5 C23.687,93.5 3.54,73.353 3.54,48.5 C3.54,23.647 23.687,3.5 48.54,3.5 C73.393,3.5 93.54,23.647 93.54,48.5 C93.54,73.353 73.393,93.5 48.54,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72.487,77.332 C84.376,46.657 12.746,46.391 24.497,77.291', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'g',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M35.233,45.69 C30.814,45.69 25.607,33.807 25.607,29.388 C25.607,24.97 30.814,29.69 35.233,29.69 C39.651,29.69 43.233,33.272 43.233,37.69 C43.233,42.109 39.651,45.69 35.233,45.69 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M35.29,43.621 C34.036,43.621 33.019,42.604 33.019,41.35 C33.019,40.097 34.036,39.08 35.29,39.08 C36.544,39.08 37.56,40.097 37.56,41.35 C37.56,42.604 36.544,43.621 35.29,43.621 z', style: { fill: "#8845AD" } })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M61.767,45.69 C66.186,45.69 71.393,33.807 71.393,29.388 C71.393,24.97 66.186,29.69 61.767,29.69 C57.349,29.69 53.767,33.272 53.767,37.69 C53.767,42.109 57.349,45.69 61.767,45.69 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M60.71,43.621 C61.964,43.621 62.981,42.604 62.981,41.35 C62.981,40.097 61.964,39.08 60.71,39.08 C59.456,39.08 58.44,40.097 58.44,41.35 C58.44,42.604 59.456,43.621 60.71,43.621 z', style: { fill: "#8845AD" } })
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'g',
                            { id: 'dunno', display: this.props.bump == "dunno" ? "inline-block" : "none" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M55.789,72.839 C55.949,62.268 25.613,68.799 25.899,55.218', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 36.884,34.521 36.884,38.939 C36.884,43.358 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M21.254,34.54 C19.321,34.54 17.754,32.973 17.754,31.04 C17.754,29.107 19.321,27.54 21.254,27.54 C23.187,27.54 24.754,29.107 24.754,31.04 C24.754,32.973 23.187,34.54 21.254,34.54 z', style: { fill: "#8845AD" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M67.136,40.5 C62.718,40.5 59.136,36.918 59.136,32.5 C59.136,28.082 62.718,24.5 67.136,24.5 C71.555,24.5 79.521,34.521 79.521,38.939 C79.521,43.358 71.555,40.5 67.136,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M63.891,34.54 C61.958,34.54 60.391,32.973 60.391,31.04 C60.391,29.107 61.958,27.54 63.891,27.54 C65.824,27.54 67.391,29.107 67.391,31.04 C67.391,32.973 65.824,34.54 63.891,34.54 z', style: { fill: "#8845AD" } })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'g',
                            { id: 'meh', display: this.props.bump == "meh" ? "inline-block" : "none" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M70.681,59.458 C66.551,61.225 24.128,58.624 21.955,58.867', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'g',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M30.918,29.723 L18.082,29.56', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'g',
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z', style: { fill: "#8845AD" } })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'g',
                                    null,
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M78.918,29.723 L66.082,29.56', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'g',
                                        null,
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z', style: { fill: "#8845AD" } })
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { style: { display: "inline-block" } },
                        '#',
                        this.props.topCountQuery.topCount.name,
                        '  ',
                        this.props.topCountQuery.topCount.count
                    )
                );
            }
        }
    }]);

    return BumpDisplay;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(topCountQuery)(BumpDisplay));

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autocomplete__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query suggestions($partialHashtag: String!) {\n    suggestions(partialHashtag: $partialHashtag)\n  }\n'], ['\n  query suggestions($partialHashtag: String!) {\n    suggestions(partialHashtag: $partialHashtag)\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  query hashtag($name: String!) {\n    hashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  mutation addHashtag($name: String!) {\n    addHashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n'], ['\n  mutation addHashtag($name: String!) {\n    addHashtag(name: $name) {\n      name\n      yayCount\n      grrrCount\n      dunnoCount\n      mehCount\n    }\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var suggestionsQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject), {
    name: "suggestionsQuery",
    options: {
        variables: { partialHashtag: "!" }
    }
});

var hashtagQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject2), {
    name: "hashtagQuery",
    options: {
        variables: { name: "" }
    }
});

var addHashtagMutation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject3));

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

            var suggestionsQuery = this.props.suggestionsQuery;
            var hashtagQuery = this.props.hashtagQuery;
            var currentHashtagName = event.target.value;

            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtagName */])(currentHashtagName));
            this.setState({ value: currentHashtagName, items: this.state.items });

            suggestionsQuery.refetch({ partialHashtag: currentHashtagName }).then(function (dataObject) {
                var suggestions = JSON.parse(dataObject.data.suggestions[0]).suggest.analyzedSuggestion['' + currentHashtagName].suggestions;

                hashtagQuery.refetch({ name: currentHashtagName }).then(function (dataObject) {
                    if (dataObject.data.hashtag) {
                        _this2.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtagName */])(dataObject.data.hashtag.name));
                    } else {
                        _this2.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtagName */])(currentHashtagName));
                    }
                    _this2.setState({ items: suggestions });
                });
            });
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(val) {
            var _this3 = this;

            var hashtagQuery = this.props.hashtagQuery;

            hashtagQuery.refetch({ name: val }).then(function (dataObject) {
                if (dataObject.data.hashtag) {
                    _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtagName */])(dataObject.data.hashtag.name));
                } else {
                    _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__store_actions__["a" /* setCurrentHashtagName */])(val));
                }
            });
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

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(), hashtagQuery, suggestionsQuery, addHashtagMutation)(HashtagAutocomplete));

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = currentHashtagName;
function currentHashtagName() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var action = arguments[1];

    switch (action.type) {
        case 'SET_CURRENT_HASHTAG_NAME':
            return action.hashtagName;
        default:
            return state;
    }
}

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hello":"hello-1P9zCbIx8YQ5eID6A-67d6","logo":"logo-1tNzgJsJwXMqFQ0a4xMkPk","data":"data-1oklYPlS4mQJRj2Dp24Czw","styleExamples":"styleExamples-2cmVxjYoxVhR_tpCfyIq_T","example":"example-3quOHBYrr7YOUvefuRPyGa"};

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-277HEpojiJhg7dzqJQ0KRt"};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hashbump-logo.07a6c46f5813584b6f560fc8484bf6fa.svg";

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setCurrentHashtagName;
function setCurrentHashtagName(hashtagName) {
    return {
        type: 'SET_CURRENT_HASHTAG_NAME',
        hashtagName: hashtagName
    };
}

/***/ })

},[378]);
//# sourceMappingURL=browser.js.map