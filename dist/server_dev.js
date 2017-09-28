/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
let Common = class Common {
  constructor() {
    // Store reducers in a `Map`, for easy key retrieval
    this.reducers = new Map();

    // Apollo (middle|after)ware
    this.apolloMiddleware = [];
    this.apolloAfterware = [];
    this.apolloNetworkOptions = {};
    this.apolloClientOptions = {};

    // GraphQL endpoint.  This needs setting via either `config.enableGraphQLServer()`
    // or `config.setGraphQLEndpoint()`
    this.graphQLEndpoint = null;

    // Set to true if we're using an internal GraphQL server
    this.graphQLServer = false;
  }

  /* REDUX */

  // Adds a new reducer.  Accepts a `key` string, a `reducer` function, and a
  // (by default empty) `initialState` object, which will ultimately become immutable
  addReducer(key, reducer, initialState = {}) {
    if (typeof reducer !== 'function') {
      throw new Error(`Can't add reducer for '${key}' - reducer must be a function`);
    }
    this.reducers.set(key, {
      reducer,
      initialState
    });
  }

  /* GRAPHQL */

  // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
  // can be overridden
  enableGraphQLServer(endpoint = '/graphql', graphiQL = true) {
    this.graphQLServer = true;
    this.graphQLEndpoint = endpoint;
    this.graphiQL = graphiQL;
  }

  // Set an external GraphQL URI for use with Apollo
  setGraphQLEndpoint(uri, graphiQL = true) {
    this.graphQLEndpoint = uri;
    this.graphiQL = graphiQL;
  }

  // Register Apollo middleware function
  addApolloMiddleware(middlewareFunc) {
    this.apolloMiddleware.push(middlewareFunc);
  }

  // Register Apollo afterware function
  addApolloAfterware(afterwareFunc) {
    this.apolloAfterware.push(afterwareFunc);
  }

  // Apollo Client options.  These will be merged in with the `createClient`
  // default options defined in `kit/lib/apollo.js`
  setApolloClientOptions(opt = {}) {
    this.apolloClientOptions = opt;
  }

  // Apollo Network options.  These will be merged in with the `createNetworkInterface`
  // default options defined in `kit/lib/apollo.js`
  setApolloNetworkOptions(opt = {}) {
    this.apolloNetworkOptions = opt;
  }
};

// Placeholder for the class we'll attach

let Config;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (true) {
  Config = class ServerConfig extends Common {
    constructor() {
      super();
      // Create a set for routes -- to retrieve based on insertion order
      this.routes = new Set();

      // Koa application function. But default, this is null
      this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      this.enableBodyParser = true;
      this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      this.corsOptions = {};
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions
    getKoaApp(func) {
      this.koaAppFunc = func;
    }

    // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
    // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
    // in the certificate details here and it'll respond to SSL requests
    enableSSL(opt) {
      // At a minimum, we should have `key` and `cert` -- check for those
      if (typeof opt !== 'object' || !opt.key || !opt.cert) {
        throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
      }
      this.sslOptions = opt;
    }

    // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
    // passed to `koa-sslify`, the SSL enforcement middleware
    forceSSL(opt = {}) {
      this.enableForceSSL = opt;
    }

    // Disable plain HTTP.  Note this should only be used if you've also set
    // `enableSSL()` and you don't want dual-HTTP+SSL config
    disableHTTP() {
      this.enableHTTP = false;
    }

    // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
    // each request.  By default, body parsing is enabled.
    disableBodyParser() {
      this.enableBodyParser = false;
    }

    setBodyParserOptions(opt = {}) {
      this.bodyParserOptions = opt;
    }

    // 404 handler for the server.  By default, `kit/entry/server.js` will
    // simply return a 404 status code without modifying the HTML render.  By
    // setting a handler here, this will be returned instead
    set404Handler(func) {
      if (typeof func !== 'function') {
        throw new Error('404 handler must be a function');
      }
      this.handler404 = func;
    }

    // Error handler.  If this isn't defined, the server will simply return a
    // 'There was an error. Please try again later.' message, and log the output
    // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func
    setErrorHandler(func) {
      if (typeof func !== 'function') {
        throw new Error('Error handler must be a function');
      }
      this.errorHandler = func;
    }

    // Add custom middleware.  This should be an async func, for use with Koa
    addMiddleware(middlewareFunc) {
      this.middleware.add(middlewareFunc);
    }

    // Adds a custom server route to attach to our Koa router
    addRoute(method, route, ...handlers) {
      this.routes.add({
        method,
        route,
        handlers
      });
    }

    // Adds custom GET route
    addGetRoute(route, ...handlers) {
      this.addRoute('get', route, ...handlers);
    }

    // Adds custom POST route
    addPostRoute(route, ...handlers) {
      this.addRoute('post', route, ...handlers);
    }

    // Adds custom PUT route
    addPutRoute(route, ...handlers) {
      this.addRoute('put', route, ...handlers);
    }

    // Adds custom PATCH route
    addPatchRoute(route, ...handlers) {
      this.addRoute('patch', route, ...handlers);
    }

    // Adds custom DELETE route
    addDeleteRoute(route, ...handlers) {
      this.addRoute('delete', route, ...handlers);
    }

    // Set the GraphQL schema. This should only be called on the server, otherwise
    // the bundle size passed by the `schema` object will be unnecessarily inflated
    setGraphQLSchema(schema) {
      this.graphQLSchema = schema;
    }

    // CORS options, for `koa-cors` instantiation
    setCORSOptions(opt = {}) {
      this.corsOptions = opt;
    }
  };
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = class ClientConfig extends Common {};
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
exports.default = new Config();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerURL = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL(host = "localhost", port = "8081", allowSSL = true) {
  // Check for SSL
  if (allowSSL && null) {
    const stub = `https://${host || "localhost"}`;

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return stub;
    return `${stub}:${null}`;
  }

  // Plain HTTP
  const stub = `http://${host || "localhost"}`;

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return `${stub}:${port}`;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
let Status = class Status extends _react2.default.PureComponent {

  render() {
    const { code, children } = this.props;
    return _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      } });
  }
};

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

Status.propTypes = {
  code: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
};
Status.defaultProps = {
  children: null
};
let NotFound = exports.NotFound = class NotFound extends _react2.default.PureComponent {

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      Status,
      { code: 404 },
      children
    );
  }
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.

NotFound.propTypes = {
  children: _propTypes2.default.node
};
NotFound.defaultProps = {
  children: null
};
let Redirect = exports.Redirect = class Redirect extends _react2.default.PureComponent {

  render() {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return _react2.default.createElement(
      Status,
      { code: code },
      _react2.default.createElement(_reactRouterDom.Redirect, { to: to, from: from, push: push })
    );
  }
};
Redirect.propTypes = {
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  from: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  permanent: _propTypes2.default.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(6);

var _chalk2 = _interopRequireDefault(_chalk);

var _console = __webpack_require__(15);

var _server = __webpack_require__(18);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Get manifest values


/* Local */

// Import console messages
const css = '/assets/css/style.css';

// Extend the server base
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library

const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the development server.
// Runs inside an immediate `async` block, to await listening on ports
(async () => {
  const { app, router, listen } = _server2.default;

  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  // Spawn the server
  listen();

  // Log to the terminal that we're ready for action
  (0, _console.logServerStarted)({
    type: 'server-side rendering',
    chalk: _chalk2.default.bgYellow.black
  });
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(16);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(6);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(17);

var _ip2 = _interopRequireDefault(_ip);

var _env = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);
  message += `- ${_chalk2.default.bold('Local:           ')} ${(0, _env.getServerURL)(opt.host, opt.port, opt.allowSSL)}`;

  try {
    const url = (0, _env.getServerURL)(_ip2.default.address(), opt.port, opt.allowSSL);
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

/* ReactQL */


// Chalk library, to add colour to our console logs

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

var _stream = __webpack_require__(19);

var _http = __webpack_require__(20);

var _http2 = _interopRequireDefault(_http);

var _https = __webpack_require__(21);

var _https2 = _interopRequireDefault(_https);

__webpack_require__(22);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(24);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(5);

var _koaSslify = __webpack_require__(25);

var _koaSslify2 = _interopRequireDefault(_koaSslify);

var _kcors = __webpack_require__(26);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaSend = __webpack_require__(27);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(28);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(29);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(30);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(31);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apolloServerKoa = __webpack_require__(32);

var _apolloLocalQuery = __webpack_require__(33);

var _apolloLocalQuery2 = _interopRequireDefault(_apolloLocalQuery);

var _graphql = __webpack_require__(9);

var graphql = _interopRequireWildcard(_graphql);

var _app = __webpack_require__(34);

var _app2 = _interopRequireDefault(_app);

var _redux = __webpack_require__(62);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(66);

var _ssr2 = _interopRequireDefault(_ssr);

var _apollo = __webpack_require__(67);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _paths = __webpack_require__(68);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Create a network layer based on settings.  This is an immediate function
// that binds either the `localInterface` function (if there's a built-in
// GraphQL) or `externalInterface` (if we're pointing outside of ReactQL)


// App settings, which we'll use to customise the server -- must be loaded
// *after* app.js has been called, so the correct settings have been set


// Initial view to send back HTML render


/* ReactQL */

// App entry point.  This must come first, because app.js will set-up the
// server config that we'll use later


// Allow local GraphQL schema querying when using a built-in GraphQL server


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Enable cross-origin requests


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)


/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work


// HTTP & SSL servers.  We can use `config.enableSSL|disableHTTP()` to enable
// HTTPS and disable plain HTTP respectively, so we'll use Node's core libs
// for building both server types.
const createNeworkInterface = (() => {
  // For a local interface, we want to allow passing in the request's
  // context object, which can then feed through to our GraphQL queries to
  // extract pertinent information and manipulate the response
  function localInterface(context) {
    return _apolloLocalQuery2.default.createLocalInterface(graphql, _config2.default.graphQLSchema, {
      // Attach the request's context, which certain GraphQL queries might
      // need for accessing cookies, auth headers, etc.
      context
    });
  }

  function externalInterface() {
    return (0, _apollo.getNetworkInterface)(_config2.default.graphQLEndpoint);
  }

  return _config2.default.graphQLServer ? localInterface : externalInterface;
})();

// Static file middleware


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Grab the shared Apollo Client / network interface instantiation


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Import all of the GraphQL lib, for use with our Apollo client connection


// Import the Apollo GraphQL server, for Koa


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Enforce SSL, if required


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* Node */

// For pre-pending a `<!DOCTYPE html>` stream to the server response
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: ctx.store, client: ctx.apollo },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  Or, we can use
      // `config.set404Handler()` to pass in a custom handler func that takes
      // the `ctx` and store

      if (_config2.default.handler404) {
        _config2.default.handler404(ctx);

        // Return early -- no need to set a response body, because that should
        // be taken care of by the custom 404 handler
        return;
      }

      ctx.status = routeContext.status;
    }

    // Create a HTML stream, to send back to the browser
    const htmlStream = new _stream.PassThrough();

    // Prefix the doctype, so the browser knows to expect HTML5
    htmlStream.write('<!DOCTYPE html>');

    // Create a stream of the React render. We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    const reactStream = _server2.default.renderToNodeStream(_react2.default.createElement(
      _ssr2.default,
      {
        head: _reactHelmet2.default.rewind(),
        window: {
          webpackManifest: chunkManifest,
          __STATE__: ctx.store.getState()
        },
        css: css,
        scripts: scripts },
      components
    ));

    // Pipe the React stream to the HTML output
    reactStream.pipe(htmlStream);

    // Set the return type to `text/html`, and stream the response back to
    // the client
    ctx.type = 'text/html';
    ctx.body = htmlStream;
  };
}

// Build the router, based on our app's settings.  This will define which
// Koa route handlers
const router = new _koaRouter2.default().
// Set-up a general purpose /ping route to check the server is alive
get('/ping', async ctx => {
  ctx.body = 'pong';
})

// Favicon.ico.  By default, we'll serve this as a 204 No Content.
// If /favicon.ico is available as a static file, it'll try that first
.get('/favicon.ico', async ctx => {
  ctx.res.statusCode = 204;
});

// Build the app instance, which we'll use to define middleware for Koa
// as a precursor to handling routes
const app = new _koa2.default()
// Adds CORS config
.use((0, _kcors2.default)(_config2.default.corsOptions))

// Preliminary security for HTTP headers
.use((0, _koaHelmet2.default)())

// Error wrapper.  If an error manages to slip through the middleware
// chain, it will be caught and logged back here
.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // If we have a custom error handler, use that - else simply log a
    // message and return one to the user
    if (typeof _config2.default.errorHandler === 'function') {
      _config2.default.errorHandler(e, ctx, next);
    } else {
      console.log('Error:', e.message);
      ctx.body = 'There was an error. Please try again later.';
    }
  }
})

// It's useful to see how long a request takes to respond.  Add the
// timing to a HTTP Response header
.use(async (ctx, next) => {
  const start = _microseconds2.default.now();
  await next();
  const end = _microseconds2.default.parse(_microseconds2.default.since(start));
  const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
  ctx.set('Response-Time', `${total / 1e3}ms`);
})

// Create a new Apollo client and Redux store per request.  This will be
// stored on the `ctx` object, making it available for the React handler or
// any subsequent route/middleware
.use(async (ctx, next) => {
  // Create a new server Apollo client for this request
  ctx.apollo = (0, _apollo.createClient)({
    ssrMode: true,
    // Create a network request.  If we're running an internal server, this
    // will be a function that accepts the request's context, to feed through
    // to the GraphQL schema
    networkInterface: createNeworkInterface(ctx)
  });

  // Create a new Redux store for this request
  ctx.store = (0, _redux2.default)(ctx.apollo);

  // Pass to the next middleware in the chain: React, custom middleware, etc
  return next();
});

/* FORCE SSL */

// Middleware to re-write HTTP requests to SSL, if required.
if (_config2.default.enableForceSSL) {
  app.use((0, _koaSslify2.default)(_config2.default.enableForceSSL));
}

// Attach custom middleware
_config2.default.middleware.forEach(middlewareFunc => app.use(middlewareFunc));

// Attach an internal GraphQL server, if we need one
if (_config2.default.graphQLServer) {
  // Attach the GraphQL schema to the server, and hook it up to the endpoint
  // to listen to POST requests
  router.post(_config2.default.graphQLEndpoint, (0, _apolloServerKoa.graphqlKoa)(context => ({
    // Bind the current request context, so it's accessible within GraphQL
    context,
    // Attach the GraphQL schema
    schema: _config2.default.graphQLSchema
  })));
}

// Do we need the GraphiQL query interface?  This can be used if we have an
// internal GraphQL server, or if we're pointing to an external server.  First,
// we check if `config.graphiql` === `true` to see if we need one...

if (_config2.default.graphiQL) {
  // The GraphiQL endpoint default depends on this order of precedence:
  // explicit -> internal GraphQL server endpoint -> /graphql
  let graphiQLEndpoint;

  if (typeof _config2.default.graphiQL === 'string') {
    // Since we've explicitly passed a string, we'll use that as the endpoint
    graphiQLEndpoint = _config2.default.graphiQL;
  } else if (_config2.default.graphQLServer) {
    // If we have an internal GraphQL server, AND we haven't set a string,
    // the default GraphiQL path should be the same as the server endpoint
    graphiQLEndpoint = _config2.default.graphQLEndpoint;
  } else {
    // Since we haven't set anything, AND we don't have an internal server,
    // by default we'll use `/graphql` which will work for an external server
    graphiQLEndpoint = '/graphql';
  }

  router.get(graphiQLEndpoint, (0, _apolloServerKoa.graphiqlKoa)({
    endpointURL: _config2.default.graphQLEndpoint
  }));
}

// Attach any custom routes we may have set in userland
_config2.default.routes.forEach(route => {
  router[route.method](route.route, ...route.handlers);
});

/* BODY PARSING */

// `koa-bodyparser` is used to process POST requests.  Check that it's enabled
// (default) and apply a custom config if we need one
if (_config2.default.enableBodyParser) {
  app.use(__webpack_require__(70)(
  // Pass in any options that may have been set in userland
  _config2.default.bodyParserOptions));
}

/* CUSTOM APP INSTANTIATION */

// Pass the `app` to do anything we need with it in userland. Useful for
// custom instantiation that doesn't fit into the middleware/route functions
if (typeof _config2.default.koaAppFunc === 'function') {
  _config2.default.koaAppFunc(app);
}

// Listener function that will start http(s) server(s) based on userland
// config and available ports
const listen = () => {
  // Spawn the listeners.
  const servers = [];

  // Plain HTTP
  if (_config2.default.enableHTTP) {
    servers.push(_http2.default.createServer(app.callback()).listen("8081"));
  }

  // SSL -- only enable this if we have an `SSL_PORT` set on the environment
  if (false) {
    servers.push(_https2.default.createServer(_config2.default.sslOptions, app.callback()).listen(process.env.SSL_PORT));
  }

  return servers;
};

// Export everything we need to run the server (in dev or prod)
exports.default = {
  router,
  app,
  listen
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("koa-sslify");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-koa");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("apollo-local-query");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _counter = __webpack_require__(35);

var _counter2 = _interopRequireDefault(_counter);

var _suggestionsReducer = __webpack_require__(36);

var _suggestionsReducer2 = _interopRequireDefault(_suggestionsReducer);

var _currentHashtagReducer = __webpack_require__(75);

var _currentHashtagReducer2 = _interopRequireDefault(_currentHashtagReducer);

var _main = __webpack_require__(38);

var _main2 = _interopRequireDefault(_main);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* REDUCERS */

// Add our custom `counter` reducer, with the initial state as a zero count.
// Note:  The initial state (3rd param) will automatically be wrapped in
// `seamless-immutable` by the kit's Redux init code, so plain objects are
// automatically immutable by default


// Main component -- i.e. the 'root' React component in our app
// Your app's entry point.  Every ReactQL projects requires 'src/app.js',
// which both the server and browser will import.
//
// In this file, you'll do two things:
//
// 1.  Import `kit/config`, and configure your app.  In this example, I'm
// adding a custom Redux reducer that acts as a simple counter, and enabling
// a built-in GraphQL server that imports a schema for a simple message.
//
// 2.  Export the root React component that goes between <div id="main"/>
// in the server-side HTML.

// ----------------------
// IMPORTS

/* ReactQL */

// Config API, for adding reducers and configuring our ReactQL app
_config2.default.addReducer('counter', _counter2.default, { count: 0 });

// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


/* App */

// Example counter reducer.  This simply increments the counter by +1


_config2.default.addReducer('suggestions', _suggestionsReducer2.default, { suggestions: null });
_config2.default.addReducer('currentHashtag', _currentHashtagReducer2.default, { currentHashtag: '' });

/* GRAPHQL */

// Enable the internal GraphQL server.  This will do two things:
//
// 1.  On the server, it will set-up the necessary route handlers to 'listen'
// to incoming GraphQL requests on `/graphql`, as well as (by default) set-up
// the GraphiQL IDE
//
// 2.  On the client, it will append the correct server URL so that we can
// call the ReactQL host properly, and let the server handle our requests
_config2.default.enableGraphQLServer();

/* SERVER */

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (true) {
  /* SSL */

  // By default, the Koa web server runs on a plain HTTP server. However,
  // you can easily enable HTTPS.  In the following commands, I grab a sample
  // self-signed key/cert combo and call `config.enableSSL()` with the options
  // I want to pass to the `https.createServer()` that happens under the hood.
  //
  // Note: Running https:// in your browser using this self-signed cert will
  // undoubtably raise a security error. But at least we can see it's working.
  //
  // Production note: I generally recommend using a dedicated upstream proxy
  // such as Nginx to handle HTTPS traffic, since the TLS handshake will likely
  // be faster, and you can add HTTP/2 and have much finer-grain control over
  // HTTP. But, if you need a fast SSL service, ReactQL has you covered!

  /*
    Uncomment the next two lines to enable SSL!
  */

  const cert = __webpack_require__(60);
  _config2.default.enableSSL({ key: cert.key, cert: cert.cert });

  // If wanted, you could also run an *SSL-only* server by uncommenting:
  // config.disableHTTP();

  // Or, you could automatically redirect non-HTTP traffic to SSL by
  // uncommenting the following: (Note: pass { port: 8081 }) for development
  // or { port: 4000 } for the default production port
  // config.forceSSL({ port: 8081 });

  /* GRAPHQL SCHEMA */
  // Pass in the schema to use for our internal GraphQL server.  Note we're
  // doing this inside a `SERVER` block to avoid importing a potentially large
  // file, which would then inflate our client bundle unnecessarily
  _config2.default.setGraphQLSchema(__webpack_require__(61).default);

  /* CUSTOM ROUTES */

  // We can add custom routes to the web server easily, by using
  // `config.add<Get|Post|Put|Patch>Route()`.  Note:  These are server routes only.
  _config2.default.addGetRoute('/test', async ctx => {
    // For demo purposes, let's get a JSON dump of the current Redux state
    // to see that we can expect its contents
    const stateDump = JSON.stringify(ctx.store.getState());

    // Display a simple message, along with the Redux dump.  Note that this
    // won't contain a full `apollo` response, because it hasn't passed through
    // the React handler -- but it *does* mean we can still manipulate the state
    // from within our root, or fire action handlers!
    ctx.body = `Hello from your ReactQL route. Redux dump: ${stateDump}`;
  });

  /* CUSTOM 404 HANDLER */

  // By default, if the server gets a route request that results in a 404,
  // it will set `ctx.status = 404` but continue to render the <NotFound>
  // block as normal.  If we want to add our own custom handler, we can use
  // `config.set404Handler()` as below.
  //
  // Note:  This only applies to SERVER routes.  On the client, the
  // <NotFound> block will *always* run.

  _config2.default.set404Handler(ctx => {
    // Like above, we'll grab a dump of the store state again -- this time,
    // it *will* contain a full `apollo` dump because in order to figure out that
    // a route has hit a 404, it will already have rendered the React chain
    // and retrieved any relevant GraphQL
    const stateDump = JSON.stringify(ctx.store.getState());

    // Explicitly set the return status to 404.  This is done for us by
    // default if we don't have a custom 404 handler, but left to the function
    // otherwise (since we might not always want to return a 404)
    ctx.status = 404;

    // Set the body
    ctx.body = `This route does not exist on the server - Redux dump: ${stateDump}`;
  });

  /* CUSTOM ERROR HANDLER */

  // By default, any exceptions thrown anywhere in the middleware chain
  // (including inside the `createReactHandler` func) will propogate up the
  // call stack to a default error handler that simply logs the message and
  // informs the user that there's an error.  We can override that default
  // behaviour with a func with a (e, ctx, next) -> {} signature, where `e` is
  // the error thrown, `ctx` is the Koa context object, and `next()` should
  // be called if you want to recover from the error and continue processing
  // subsequent middleware.  Great for logging to third-party tools, tc.
  _config2.default.setErrorHandler((e, ctx /* `next` is unused in this example */) => {
    // Mimic the default behaviour with an overriden message, so we know it's
    // working
    // eslint-disable-next-line no-console
    console.log('Error: ', e.message);
    ctx.body = 'Some kind of error. Check your source code.';
  });

  /* CUSTOM KOA APP INSTANTIATION */

  // If you need to do something with `app` outside of middleware/routing,
  // you can pass a func to `config.getKoaApp()` that will be fed the `app`
  // instance directly.
  _config2.default.getKoaApp(app => {
    // First, we'll add a new `engine` key to the app.context`
    // prototype (that per-request `ctx` extends) that can be
    // used in the middleware below, to set a `Powered-By` header.
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';

    // We'll also add a generic error handler, that prints out to the console.
    // Note: This is a 'lower-level' than `config.setErrorHandler()` because
    // it's not middleware -- it's for errors that happen at the server level
    app.on('error', e => {
      // This function should never show up, because `config.setErrorHandler()`
      // is already catching errors -- but just an FYI for what you might do.
      // eslint-disable-next-line no-console
      console.error('Server error:', e);
    });
  });

  /* CUSTOM MIDDLEWARE */

  // We can set custom middleware to be processed on the server.  This gives us
  // fine-grain control over headers, requests, responses etc, and even decide
  // if we want to avoid the React handler until certain conditions
  _config2.default.addMiddleware(async (ctx, next) => {
    // Let's add a custom header so we can see middleware in action
    ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!

    // For the fun of it, let's demonstrate that we can fire Redux actions
    // and it'll manipulate the state on the server side!  View the SSR version
    // to see that the counter is now 1 and has been passed down the wire
    ctx.store.dispatch({ type: 'INCREMENT_COUNTER' });

    // Always return `next()`, otherwise the request won't 'pass' to the next
    // middleware in the stack (likely, the React handler)
    return next();
  });
}

// In app.js, we need to export the root component we want to mount as the
// starting point to our app.  We'll just export the `<Main>` component.
exports.default = _main2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
// Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// Note: There's no need to specify default state, because the kit's Redux
// init code wraps `undefined` state values in a `defaultReducer()` function,
// that captures Redux sentinel vals and responds back with a black object --
// so in our reducer functions, we can safely assume we're working with 'real'
// immutable state

function reducer(state, action) {
  if (action.type === 'INCREMENT_COUNTER') {
    // Where did `state.merge()` come from?  Our plain state object is automatically
    // wrapped in a call to `seamless-immutable` in our reducer init code,
    // so we can use its functions to return a guaranteed immutable version
    return state.merge({
      count: state.count + 1
    });
  }
  return state;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = suggestionsReducer;
function suggestionsReducer(state, action) {
    if (action.type === 'UPDATE_SUGGESTIONS') {
        return state.merge({
            suggestions: action.suggestions
        });
    }
    return state;
}

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routing = __webpack_require__(11);

var _graphql = __webpack_require__(39);

var _graphql2 = _interopRequireDefault(_graphql);

var _routes = __webpack_require__(42);

var _redux = __webpack_require__(43);

var _redux2 = _interopRequireDefault(_redux);

var _stats = __webpack_require__(44);

var _stats2 = _interopRequireDefault(_stats);

var _styles = __webpack_require__(46);

var _styles2 = _interopRequireDefault(_styles);

var _HashbumpContainer = __webpack_require__(50);

var _HashbumpContainer2 = _interopRequireDefault(_HashbumpContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so


// <Helmet> component for setting the page title/meta tags
// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/components/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React
exports.default = () => _react2.default.createElement(_HashbumpContainer2.default, null);

// // Styles
// import css from './main.scss';

// // Get the ReactQL logo.  This is a local .svg file, which will be made
// // available as a string relative to [root]/dist/assets/img/
// import logo from './reactql-logo.svg';


/* ReactQL */

// NotFound 404 handler for unknown routes


// Routing via React Router

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class; // Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed

// ----------------------
// IMPORTS

/* NPM */

// GraphQL


/* App */

// GraphQL queries.  Looking at this file demonstrates how to import fragments.
// Webpack will compile this into inline GraphQL for us, so we can pass the
// query to components using the @graphql decorator


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(5);

var _all_messages = __webpack_require__(40);

var _all_messages2 = _interopRequireDefault(_all_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
let GraphQLMessage = (_dec = (0, _reactApollo.graphql)(_all_messages2.default), _dec(_class = class GraphQLMessage extends _react2.default.PureComponent {

  render() {
    const { data } = this.props;

    // Since we're dealing with async GraphQL data, we defend against the
    // data not yet being loaded by checking to see that we have the `message`
    // key on our returned object
    const message = data.message && data.message.text;

    // Apollo will tell us whether we're still loading.  We can also use this
    // check to ensure we have a fully returned response
    const isLoading = data.loading ? 'yes' : 'nope';
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Message from GraphQL server: ',
        _react2.default.createElement(
          'em',
          null,
          message
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Currently loading?: ',
        isLoading
      )
    );
  }
}) || _class);
GraphQLMessage.propTypes = {
  data: _propTypes2.default.shape({
    message: _propTypes2.default.shape({
      text: _propTypes2.default.string
    })
  })
};
GraphQLMessage.defaultProps = {
  data: {
    message: {
      text: null
    }
  }
};
exports.default = GraphQLMessage;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"message"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"message"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Message"},"directives":[]}]}}]}}],"loc":{"start":0,"end":74}};
    doc.loc.source = {"body":"#import \"./message.gql\"\n\nquery message {\n  message {\n    ...Message\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(41).definitions));

module.exports = doc;

/***/ }),
/* 41 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Message"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Message"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":39}};
    doc.loc.source = {"body":"fragment Message on Message {\n  text\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhenNotFound = exports.Page = exports.Home = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routing = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = exports.Home = () => _react2.default.createElement(
  'h1',
  null,
  'You\'re on the home page - click another link above'
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component


/* ReactQL */

// NotFound 404 handler for unknown routes
// Demonstrates several components on one page, each with their own `export`.
//
// These are smaller components that <Main> imports, and changes depending
// on the page route (via React Router).
//
// <WhenNotFound> demonstrates the use of <NotFound>, a ReactQL helper
// component that signals to our web server that we have a 404 error, to handle
// accordingly

// ----------------------
// IMPORTS

/* NPM */

// React
const Page = exports.Page = ({ match }) => _react2.default.createElement(
  'h1',
  null,
  'Changed route: ',
  match.params.name
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: _propTypes2.default.shape({
    params: _propTypes2.default.object
  }).isRequired
};

// Create a route that will be displayed when the code isn't found
const WhenNotFound = exports.WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Unknown route - the 404 handler was triggered!'
  )
);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class; // Component that demonstrates using a part of the Redux store
// outside of Apollo.  We can use config.addReducer(key, reducer) in `src/app.js`
// to add custom Redux reducers

// ----------------------
// IMPORTS

/* NPM */


// HOC/decorator to listen to Redux store state


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
let ReduxCounter = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter })), _dec(_class = class ReduxCounter extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.triggerIncrement = () => {
      this.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp;
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  render() {
    const { count } = this.props.counter;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Listening to Redux counter: ',
        count
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.triggerIncrement },
        'Increment'
      )
    );
  }
}) || _class);
ReduxCounter.propTypes = {
  counter: _propTypes2.default.shape({
    count: _propTypes2.default.number.isRequired
  })
};
ReduxCounter.defaultProps = {
  counter: {
    count: 0
  } };
exports.default = ReduxCounter;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stats = __webpack_require__(45);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Simple <Stats> component that displays our current environment.

// ----------------------
// IMPORTS

/* NPM */

// React
exports.default = () => {
  // We can pull the environment from `process.env.NODE_ENV`, which is set
  // to either 'development' | 'production' on both the server and in the browser
  const info = [['Environment', "development"]];

  return _react2.default.createElement(
    'ul',
    { className: _stats2.default.data },
    info.map(([key, val]) => _react2.default.createElement(
      'li',
      { key: key },
      key,
      ': ',
      _react2.default.createElement(
        'span',
        null,
        val
      )
    ))
  );
};

/* App */

// Styles

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
	"data": "data-1TlbpCj5FlrOdqUTJqH60F"
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(47);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(48);

var _styles4 = _interopRequireDefault(_styles3);

var _styles5 = __webpack_require__(49);

var _styles6 = _interopRequireDefault(_styles5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */
exports.default = () => _react2.default.createElement(
  'ul',
  { className: _styles2.default.styleExamples },
  _react2.default.createElement(
    'li',
    { className: _styles2.default.example },
    'Styled by CSS'
  ),
  _react2.default.createElement(
    'li',
    { className: _styles4.default.example },
    'Styled by SASS'
  ),
  _react2.default.createElement(
    'li',
    { className: _styles6.default.example },
    'Styled by LESS'
  )
);

/* App */

// Styles

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"styleExamples": "styleExamples-1odAJW6hJJkT1H4az7KebJ",
	"example": "example-HDBhpRi1XOtosKy5rqCSL"
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
	"example": "example-3x1WZ3q5Zomb6qbpAqayqQ"
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {
	"example": "example-Qwu6EO0LZh1IVEfs-9zO_"
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(51);

var _rebass = __webpack_require__(3);

var _reactXRay = __webpack_require__(52);

var _reactXRay2 = _interopRequireDefault(_reactXRay);

var _hashtags = __webpack_require__(53);

var _hashtags2 = _interopRequireDefault(_hashtags);

var _AutoSuggest = __webpack_require__(54);

var _AutoSuggest2 = _interopRequireDefault(_AutoSuggest);

var _TopHashtags = __webpack_require__(55);

var _TopHashtags2 = _interopRequireDefault(_TopHashtags);

var _Header = __webpack_require__(56);

var _Header2 = _interopRequireDefault(_Header);

var _BumpButton = __webpack_require__(57);

var _BumpButton2 = _interopRequireDefault(_BumpButton);

var _theme = __webpack_require__(58);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HashbumpContainer = (_dec = (0, _reactRedux.connect)(state => ({ suggestions: state.suggestions,
    currentHashtag: state.currentHashtag })), _dec(_class = class HashbumpContainer extends _react.Component {

    constructor(props) {
        super(props);

        this.suggestionsHandler = this.suggestionsHandler.bind(this);
        this.valueHandler = this.valueHandler.bind(this);
    }

    suggestionsHandler(suggestions) {
        this.props.dispatch({ type: 'UPDATE_SUGGESTIONS',
            suggestions: suggestions });
    }

    valueHandler(value, finalize = false) {
        this.props.dispatch({ type: 'UPDATE_CURRENT_HASHTAG',
            currentHashtag: value });

        if (!finalize) {
            if (value !== '') {
                const loweredValue = value.toLowerCase();
                const suggestions = _hashtags2.default.filter(hashtag => hashtag.name.toLowerCase().startsWith(loweredValue));

                this.suggestionsHandler(suggestions);
            } else {
                this.suggestionsHandler(null);
            }
        }
    }

    render() {
        const { suggestions } = this.props.suggestions;
        const { currentHashtag } = this.props.currentHashtag;

        return _react2.default.createElement(
            _rebass.Provider,
            { theme: _theme2.default },
            _react2.default.createElement(
                _rebass.Flex,
                { align: 'center', justify: 'center' },
                _react2.default.createElement(
                    _rebass.Box,
                    { width: [1, 1, 1 / 2], bg: _theme.hashbumpColorGold },
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        _rebass.Flex,
                        { wrap: true },
                        _react2.default.createElement(_TopHashtags2.default, { title: 'Top Hashtags Ever',
                            topYay: '#anoctopusandamoose: 7',
                            topGrrr: '#anoctopusandamoose: 11',
                            topDunno: '#anoctopusandamoose: 13',
                            topMeh: '#anoctopusandamoose: 17' }),
                        _react2.default.createElement(_TopHashtags2.default, { title: 'Top Hashtags This Week',
                            topYay: '#anoctopusandamoose: 17',
                            topGrrr: '#anoctopusandamoose: 13',
                            topDunno: '#anoctopusandamoose: 11',
                            topMeh: '#anoctopusandamoose: 7' })
                    ),
                    _react2.default.createElement(
                        _rebass.Flex,
                        { align: 'center', justify: 'center' },
                        _react2.default.createElement(_AutoSuggest2.default, {
                            suggestions: suggestions,
                            value: currentHashtag,
                            suggestionsHandler: this.suggestionsHandler.bind(this),
                            valueHandler: this.valueHandler.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        _rebass.Flex,
                        { align: 'center', justify: 'center' },
                        _react2.default.createElement(
                            _rebass.Box,
                            { width: [1, 1 / 4, 1 / 3], ml: [1, 0, 0], mr: [1, 0, 0] },
                            _react2.default.createElement(
                                _rebass.Flex,
                                { align: 'center', justify: 'center' },
                                _react2.default.createElement(_BumpButton2.default, { bumpType: 'yay', buttonImageSource: _theme2.default.yaySvgSource, bumpCount: '17' }),
                                _react2.default.createElement(_BumpButton2.default, { bumpType: 'grrr', buttonImageSource: _theme2.default.grrrSvgSource, bumpCount: '17' }),
                                _react2.default.createElement(_BumpButton2.default, { bumpType: 'dunno', buttonImageSource: _theme2.default.dunnoSvgSource, bumpCount: '17' }),
                                _react2.default.createElement(_BumpButton2.default, { bumpType: 'meh', buttonImageSource: _theme2.default.mehSvgSource, bumpCount: '17' })
                            )
                        )
                    )
                )
            )
        );
    }
}) || _class);
exports.default = HashbumpContainer;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-x-ray");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const hashtags = [{ name: "love" }, { name: "TagsForLikes" }, { name: "TagsForLikesApp" }, { name: "TFLers" }, { name: "tweegram" }, { name: "photooftheday" }, { name: "20likes" }, { name: "amazing" }, { name: "smile" }, { name: "follow4follow" }, { name: "like4like" }, { name: "look" }, { name: "instalike" }, { name: "igers" }, { name: "picoftheday" }, { name: "food" }, { name: "instadaily" }, { name: "instafollow" }, { name: "followme" }, { name: "girl" }, { name: "iphoneonly" }, { name: "instagood" }, { name: "bestoftheday" }, { name: "instacool" }, { name: "instago" }, { name: "all_shots" }, { name: "follow" }, { name: "webstagram" }, { name: "colorful" }, { name: "style" }, { name: "swag" }, { name: "fun" }, { name: "instagramers" }, { name: "pretty" }, { name: "nature" }, { name: "lol" }, { name: "dog" }, { name: "hair" }, { name: "onedirection" }, { name: "sunset" }, { name: "throwbackthursday" }, { name: "beach" }, { name: "statigram" }, { name: "friends" }, { name: "hot" }, { name: "funny" }, { name: "blue" }, { name: "life" }, { name: "art" }, { name: "instahub" }, { name: "photo" }, { name: "cool" }, { name: "pink" }, { name: "clouds" }, { name: "textgram" }, { name: "family" }, { name: "igaddict" }, { name: "awesome" }, { name: "girls" }, { name: "my" }, { name: "bored" }, { name: "baby" }, { name: "music" }, { name: "red" }, { name: "green" }, { name: "water" }, { name: "harrystyles" }, { name: "black" }, { name: "party" }, { name: "white" }, { name: "yum" }, { name: "flower" }, { name: "2012" }, { name: "night" }, { name: "instalove" }, { name: "niallhoran" }, { name: "jj_forum" }, { name: "sky" }, { name: "sun" }, { name: "summer" }, { name: "beautiful" }, { name: "sunrise" }, { name: "flowers" }, { name: "tree" }, { name: "twilight" }, { name: "beauty" }, { name: "light" }, { name: "cloudporn" }, { name: "skylovers" }, { name: "dusk" }, { name: "weather" }, { name: "day" }, { name: "iphonesia" }, { name: "mothernature" }, { name: "ocean" }, { name: "lake" }, { name: "sand" }, { name: "reflection" }, { name: "shore" }, { name: "waterfoam" }, { name: "seashore" }, { name: "waves" }, { name: "wave" }, { name: "orange" }, { name: "skyporn" }, { name: "horizon" }, { name: "gorgeous" }, { name: "warm" }, { name: "view" }, { name: "morning" }, { name: "silhouette" }, { name: "instasky" }, { name: "all_sunsets" }, { name: "petal" }, { name: "petals" }, { name: "plants" }, { name: "blossom" }, { name: "sopretty" }, { name: "spring" }, { name: "flowerstagram" }, { name: "flowersofinstagram" }, { name: "flowerstyles_gf" }, { name: "flowerslovers" }, { name: "flowerporn" }, { name: "botanical" }, { name: "floral" }, { name: "florals" }, { name: "insta_pick_blossom" }, { name: "flowermagic" }, { name: "instablooms" }, { name: "bloom" }, { name: "blooms" }, { name: "floweroftheday" }, { name: "sunny" }, { name: "sunnyday" }, { name: "sunnydays" }, { name: "sunlight" }, { name: "sunshine" }, { name: "shine" }, { name: "skywatcher" }, { name: "thesun" }, { name: "sunrays" }, { name: "beautifulday" }, { name: "goodday" }, { name: "goodweather" }, { name: "instasunny" }, { name: "instasun" }, { name: "clearskies" }, { name: "clearsky" }, { name: "blueskies" }, { name: "lookup" }, { name: "bright" }, { name: "brightsun" }, { name: "cloud" }, { name: "skies" }, { name: "cloudy" }, { name: "instacloud" }, { name: "instaclouds" }, { name: "gloomy" }, { name: "skyline" }, { name: "overcast" }, { name: "epicsky" }, { name: "crazyclouds" }, { name: "cloud_skye" }, { name: "skyback" }, { name: "insta_sky_lovers" }, { name: "iskyhub" }, { name: "rain" }, { name: "raining" }, { name: "rainyday" }, { name: "pouring" }, { name: "rainydays" }, { name: "puddle" }, { name: "umbrella" }, { name: "rainyweather" }, { name: "rainydayz" }, { name: "splash" }, { name: "downpour" }, { name: "instarain" }, { name: "snow" }, { name: "snowing" }, { name: "winter" }, { name: "cold" }, { name: "ice" }, { name: "frosty" }, { name: "frost" }, { name: "chilly" }, { name: "snowflakes" }, { name: "instawinter" }, { name: "instasnow" }, { name: "snowfall" }, { name: "blizzard" }, { name: "season" }, { name: "seasons" }, { name: "instaspring" }, { name: "springtime" }, { name: "color" }, { name: "ilovespring" }, { name: "trees" }, { name: "summertime" }, { name: "clearskys" }, { name: "instasummer" }, { name: "bluesky" }, { name: "vacationtime" }, { name: "summerweather" }, { name: "summertimeshine" }, { name: "fall" }, { name: "autumn" }, { name: "leaves" }, { name: "falltime" }, { name: "instafall" }, { name: "instaautumn" }, { name: "leaf" }, { name: "foliage" }, { name: "autumnweather" }, { name: "fallweather" }, { name: "holidays" }, { name: "christmas" }, { name: "wintertime" }, { name: "staywarm" }, { name: "holidayseason" }, { name: "animals" }, { name: "animal" }, { name: "pet" }, { name: "cat" }, { name: "dogs" }, { name: "cats" }, { name: "cute" }, { name: "pets" }, { name: "animales" }, { name: "animallovers" }, { name: "pets_of_instagram" }, { name: "petstagram" }, { name: "petsagram" }, { name: "puppy" }, { name: "pup" }, { name: "eyes" }, { name: "dogs_of_instagram" }, { name: "dogsitting" }, { name: "dogsofinstagram" }, { name: "ilovemydog" }, { name: "instagramdogs" }, { name: "dogstagram" }, { name: "dogoftheday" }, { name: "lovedogs" }, { name: "lovepuppies" }, { name: "hound" }, { name: "adorable" }, { name: "doglover" }, { name: "instapuppy" }, { name: "instadog" }, { name: "catsagram" }, { name: "catstagram" }, { name: "kitten" }, { name: "kitty" }, { name: "kittens" }, { name: "catsofinstagram" }, { name: "ilovemycat" }, { name: "instagramcats" }, { name: "catoftheday" }, { name: "lovecats" }, { name: "furry" }, { name: "sleeping" }, { name: "lovekittens" }, { name: "catlover" }, { name: "instacat" }, { name: "horses" }, { name: "horse" }, { name: "horsesofinstagram" }, { name: "horseshow" }, { name: "horseshoe" }, { name: "horses_of_instagram" }, { name: "horsestagram" }, { name: "instahorses" }, { name: "wild" }, { name: "mane" }, { name: "grass" }, { name: "field" }, { name: "farm" }, { name: "pony" }, { name: "ponies" }, { name: "ilovemyhorse" }, { name: "babyhorse" }, { name: "gallop" }, { name: "jockey" }, { name: "rider" }, { name: "riders" }, { name: "riding" }, { name: "insects" }, { name: "insect" }, { name: "bug" }, { name: "bugs" }, { name: "bugslife" }, { name: "macro" }, { name: "closeup" }, { name: "instanature" }, { name: "macrogardener" }, { name: "macrophotography" }, { name: "creature" }, { name: "creatures" }, { name: "macro_creature_feature" }, { name: "wildlife" }, { name: "nature_shooters" }, { name: "earth" }, { name: "naturelover" }, { name: "lovenature" }, { name: "fish" }, { name: "aquarium" }, { name: "fishtank" }, { name: "fishporn" }, { name: "instafish" }, { name: "swim" }, { name: "swimming" }, { name: "coral" }, { name: "reef" }, { name: "reeftank" }, { name: "tropical" }, { name: "tropicalfish" }, { name: "aquaria" }, { name: "saltwater" }, { name: "freshwater" }, { name: "watertank" }, { name: "me" }, { name: "instamood" }, { name: "guy" }, { name: "fashion" }, { name: "portrait" }, { name: "selfie" }, { name: "selfienation" }, { name: "selfies" }, { name: "handsome" }, { name: "instaselfie" }, { name: "selfietime" }, { name: "face" }, { name: "shamelessselefie" }, { name: "igdaily" }, { name: "lady" }, { name: "kik" }, { name: "sweet" }, { name: "guys" }, { name: "boy" }, { name: "boys" }, { name: "dude" }, { name: "friend" }, { name: "friendship" }, { name: "chill" }, { name: "happy" }, { name: "live" }, { name: "forever" }, { name: "bff" }, { name: "bf" }, { name: "gf" }, { name: "best" }, { name: "bestfriend" }, { name: "lovethem" }, { name: "bestfriends" }, { name: "goodfriends" }, { name: "besties" }, { name: "memories" }, { name: "goodtimes" }, { name: "goodtime" }, { name: "goodmorning" }, { name: "daytime" }, { name: "morn" }, { name: "awake" }, { name: "wakeup" }, { name: "wake" }, { name: "wakingup" }, { name: "ready" }, { name: "sleepy" }, { name: "breakfast" }, { name: "tired" }, { name: "sluggish" }, { name: "bed" }, { name: "snooze" }, { name: "earlybird" }, { name: "gettingready" }, { name: "goingout" }, { name: "instamorning" }, { name: "work" }, { name: "early" }, { name: "fresh" }, { name: "refreshed" }, { name: "goodnight" }, { name: "nighttime" }, { name: "sleep" }, { name: "sleeptime" }, { name: "sleepyhead" }, { name: "instagoodnight" }, { name: "nightynight" }, { name: "lightsout" }, { name: "bedtime" }, { name: "rest" }, { name: "nightowl" }, { name: "dark" }, { name: "moonlight" }, { name: "moon" }, { name: "out" }, { name: "passout" }, { name: "knockout" }, { name: "knockedout" }, { name: "partying" }, { name: "instaparty" }, { name: "instafun" }, { name: "crazy" }, { name: "chilling" }, { name: "kickit" }, { name: "kickinit" }, { name: "outfit" }, { name: "funtime" }, { name: "funtimes" }, { name: "birthday" }, { name: "bday" }, { name: "instabday" }, { name: "birthdaycake" }, { name: "cake" }, { name: "celebrate" }, { name: "candle" }, { name: "candles" }, { name: "young" }, { name: "old" }, { name: "years" }, { name: "instacake" }, { name: "happybirthday" }, { name: "instabirthday" }, { name: "born" }, { name: "wedding" }, { name: "weddingparty" }, { name: "celebration" }, { name: "bride" }, { name: "groom" }, { name: "bridesmaids" }, { name: "happiness" }, { name: "unforgettable" }, { name: "weddingdress" }, { name: "weddinggown" }, { name: "weddingcake" }, { name: "smiles" }, { name: "together" }, { name: "ceremony" }, { name: "romance" }, { name: "marriage" }, { name: "weddingday" }, { name: "instawed" }, { name: "instawedding" }, { name: "congrats" }, { name: "congratulations" }, { name: "thanksgiving" }, { name: "thanks" }, { name: "giving" }, { name: "turkey" }, { name: "turkeyday" }, { name: "foodporn" }, { name: "holiday" }, { name: "happythanksgiving" }, { name: "stuffing" }, { name: "feast" }, { name: "thankful" }, { name: "blessed" }, { name: "halloween" }, { name: "oct" }, { name: "october" }, { name: "31" }, { name: "scary" }, { name: "spooky" }, { name: "boo" }, { name: "scared" }, { name: "costume" }, { name: "ghost" }, { name: "pumpkin" }, { name: "pumpkins" }, { name: "pumpkinpatch" }, { name: "carving" }, { name: "candy" }, { name: "jackolantern" }, { name: "creepy" }, { name: "trickortreat" }, { name: "trick" }, { name: "treat" }, { name: "hauntedhouse" }, { name: "haunted" }, { name: "tistheseason" }, { name: "happyholidays" }, { name: "elves" }, { name: "lights" }, { name: "presents" }, { name: "gifts" }, { name: "gift" }, { name: "decorations" }, { name: "ornaments" }, { name: "carols" }, { name: "santa" }, { name: "santaclaus" }, { name: "christmas2014" }, { name: "xmas" }, { name: "christmastree" }, { name: "jolly" }, { name: "merrychristmas" }, { name: "happynewyear" }, { name: "newyearsday" }, { name: "newyear" }, { name: "2015" }, { name: "2014" }, { name: "newyearseve" }, { name: "newyears" }, { name: "newyears2015" }, { name: "bye2014" }, { name: "hello2015" }, { name: "donewith2014" }, { name: "newyearsresolution" }, { name: "goals" }, { name: "dec31" }, { name: "jan1" }, { name: "dec312013" }, { name: "jan12014" }, { name: "newyearscelebration" }, { name: "newyearsparty" }, { name: "vacation" }, { name: "winter2014" }, { name: "happyholidays2014" }, { name: "parties" }, { name: "fam" }, { name: "mom" }, { name: "dad" }, { name: "brother" }, { name: "sister" }, { name: "brothers" }, { name: "sisters" }, { name: "bro" }, { name: "sis" }, { name: "siblings" }, { name: "father" }, { name: "mother" }, { name: "related" }, { name: "children" }, { name: "kids" }, { name: "familytime" }, { name: "babies" }, { name: "cuddly" }, { name: "cuddle" }, { name: "small" }, { name: "lovely" }, { name: "kid" }, { name: "igbabies" }, { name: "childrenphoto" }, { name: "toddler" }, { name: "instababy" }, { name: "infant" }, { name: "tiny" }, { name: "little" }, { name: "instakids" }, { name: "child" }, { name: "play" }, { name: "instacute" }, { name: "illustration" }, { name: "drawing" }, { name: "draw" }, { name: "picture" }, { name: "artist" }, { name: "sketch" }, { name: "sketchbook" }, { name: "paper" }, { name: "pen" }, { name: "pencil" }, { name: "artsy" }, { name: "instaart" }, { name: "gallery" }, { name: "masterpiece" }, { name: "creative" }, { name: "instaartist" }, { name: "graphic" }, { name: "graphics" }, { name: "artoftheday" }, { name: "photos" }, { name: "pic" }, { name: "pics" }, { name: "pictures" }, { name: "snapshot" }, { name: "exposure" }, { name: "composition" }, { name: "focus" }, { name: "capture" }, { name: "moment" }, { name: "hdr" }, { name: "hdriphoneographer" }, { name: "hdrspotters" }, { name: "hdrstyles_gf" }, { name: "hdri" }, { name: "hdroftheday" }, { name: "hdriphonegraphy" }, { name: "hdrepublic" }, { name: "hdr_lovers" }, { name: "awesome_hdr" }, { name: "hdrphotography" }, { name: "hdrimage" }, { name: "hdr_gallery" }, { name: "hdr_love" }, { name: "hdrfreak" }, { name: "hdrama" }, { name: "hdrart" }, { name: "hdrphoto" }, { name: "hdrfusion" }, { name: "hdrmania" }, { name: "hdrstyles" }, { name: "ihdr" }, { name: "str8hdr" }, { name: "hdr_edits" }, { name: "blackandwhite" }, { name: "bnw" }, { name: "monochrome" }, { name: "instablackandwhite" }, { name: "monoart" }, { name: "insta_bw" }, { name: "bnw_society" }, { name: "bw_lover" }, { name: "bw_photooftheday" }, { name: "bw" }, { name: "bw_society" }, { name: "bw_crew" }, { name: "bwwednesday" }, { name: "insta_pick_bw" }, { name: "bwstyles_gf" }, { name: "irox_bw" }, { name: "igersbnw" }, { name: "bwstyleoftheday" }, { name: "monotone" }, { name: "monochromaticnoir" }, { name: "fineart_photobw" }, { name: "minimalism" }, { name: "minimalist" }, { name: "minimal" }, { name: "minimalistic" }, { name: "minimalistics" }, { name: "minimalove" }, { name: "minimalobsession" }, { name: "minimalninja" }, { name: "instaminim" }, { name: "minimalisbd" }, { name: "simple" }, { name: "simplicity" }, { name: "keepitsimple" }, { name: "minimalplanet" }, { name: "minimalhunter" }, { name: "minimalista" }, { name: "minimalismo" }, { name: "lessismore" }, { name: "simpleandpure" }, { name: "negativespace" }, { name: "abstract" }, { name: "abstractart" }, { name: "abstracters_anonymous" }, { name: "abstract_buff" }, { name: "abstraction" }, { name: "abstracto" }, { name: "stayabstract" }, { name: "instaabstract" }, { name: "instagrammers" }, { name: "comment" }, { name: "shoutout" }, { name: "iphoneography" }, { name: "androidography" }, { name: "filter" }, { name: "filters" }, { name: "hipster" }, { name: "contests" }, { name: "insta" }, { name: "instafamous" }, { name: "popularpic" }, { name: "popularphoto" }, { name: "architecture" }, { name: "building" }, { name: "architexture" }, { name: "city" }, { name: "buildings" }, { name: "skyscraper" }, { name: "urban" }, { name: "design" }, { name: "cities" }, { name: "town" }, { name: "street" }, { name: "arts" }, { name: "architecturelovers" }, { name: "lines" }, { name: "archilovers" }, { name: "architectureporn" }, { name: "lookingup" }, { name: "archidaily" }, { name: "geometry" }, { name: "perspective" }, { name: "geometric" }, { name: "pattern" }, { name: "streetart" }, { name: "streetphotography" }, { name: "sprayart" }, { name: "urbanart" }, { name: "urbanwalls" }, { name: "wall" }, { name: "wallporn" }, { name: "graffitiigers" }, { name: "stencilart" }, { name: "graffiti" }, { name: "instagraffiti" }, { name: "artwork" }, { name: "mural" }, { name: "graffitiporn" }, { name: "stencil" }, { name: "streetartistry" }, { name: "stickerart" }, { name: "pasteup" }, { name: "instagraff" }, { name: "instagrafite" }, { name: "streetarteverywhere" }, { name: "vsco" }, { name: "vscocam" }, { name: "vscogood" }, { name: "vscophile" }, { name: "vscogrid" }, { name: "vscogram" }, { name: "vscorussia" }, { name: "vscodaily" }, { name: "liveauthentic" }, { name: "vscobest" }, { name: "bestofvsco" }, { name: "livefolk" }, { name: "vscoedit" }, { name: "vscofilm" }, { name: "vsco_hub" }, { name: "vscofeature" }, { name: "vscoonly" }, { name: "justgoshoot" }, { name: "vsconature" }, { name: "vscolove" }, { name: "vscophoto" }, { name: "vscobrasil" }, { name: "vscostyle" }, { name: "vscoturkey" }, { name: "vscoaward" }, { name: "topvsco" }, { name: "instavsco" }, { name: "vscolover" }, { name: "vscomoment" }, { name: "vscoeurope" }, { name: "afterlight" }, { name: "vscolife" }, { name: "vscoism" }, { name: "vscovisuals" }, { name: "vscoapp" }, { name: "vscoartist" }, { name: "vscogallery" }, { name: "vscoph" }, { name: "vscocamphotos" }, { name: "visualsoflife" }, { name: "igmasters" }, { name: "visualsgang" }, { name: "vscolovers" }, { name: "vscovibe" }, { name: "letsgosomewhere" }, { name: "neverstopexploring" }, { name: "vscoexpo" }, { name: "vscocamgram" }, { name: "vscogang" }, { name: "streetdreamsmag" }, { name: "vscocamonly" }, { name: "socality" }, { name: "vscomania" }, { name: "lifeofadventure" }, { name: "vscocool" }, { name: "vscomoscow" }, { name: "peoplescreatives" }, { name: "thatsdarling" }, { name: "instafood" }, { name: "yummy" }, { name: "dinner" }, { name: "lunch" }, { name: "tasty" }, { name: "delish" }, { name: "delicious" }, { name: "eating" }, { name: "foodpic" }, { name: "foodpics" }, { name: "eat" }, { name: "hungry" }, { name: "foodgasm" }, { name: "foods" }, { name: "dessert" }, { name: "desserts" }, { name: "chocolate" }, { name: "icecream" }, { name: "dessertporn" }, { name: "sweettooth" }, { name: "drink" }, { name: "drinks" }, { name: "slurp" }, { name: "pub" }, { name: "bar" }, { name: "liquor" }, { name: "thirst" }, { name: "thirsty" }, { name: "cocktail" }, { name: "cocktails" }, { name: "drinkup" }, { name: "glass" }, { name: "can" }, { name: "beer" }, { name: "beers" }, { name: "wine" }, { name: "coffee" }, { name: "cafe" }, { name: "instacoffee" }, { name: "cafelife" }, { name: "caffeine" }, { name: "mug" }, { name: "coffeeaddict" }, { name: "coffeegram" }, { name: "coffeeoftheday" }, { name: "cotd" }, { name: "coffeelover" }, { name: "coffeelovers" }, { name: "coffeeholic" }, { name: "coffiecup" }, { name: "coffeelove" }, { name: "coffeemug" }, { name: "coffeelife" }, { name: "tea" }, { name: "teatime" }, { name: "instatea" }, { name: "tealife" }, { name: "ilovetea" }, { name: "teaaddict" }, { name: "tealover" }, { name: "tealovers" }, { name: "teagram" }, { name: "healthy" }, { name: "teaoftheday" }, { name: "teacup" }, { name: "teastagram" }, { name: "teaholic" }, { name: "tealove" }, { name: "stylish" }, { name: "nails" }, { name: "model" }, { name: "dress" }, { name: "shoes" }, { name: "heels" }, { name: "styles" }, { name: "purse" }, { name: "jewelry" }, { name: "shopping" }, { name: "glam" }, { name: "instafashion" }, { name: "girly" }, { name: "skirt" }, { name: "swagger" }, { name: "jacket" }, { name: "pants" }, { name: "shirt" }, { name: "polo" }, { name: "swagg" }, { name: "man" }, { name: "tshirt" }, { name: "sneakers" }, { name: "jeans" }, { name: "dope" }, { name: "ootd" }, { name: "outfitoftheday" }, { name: "lookoftheday" }, { name: "fashiongram" }, { name: "currentlywearing" }, { name: "lookbook" }, { name: "wiwt" }, { name: "whatiwore" }, { name: "whatiworetoday" }, { name: "ootdshare" }, { name: "clothes" }, { name: "wiw" }, { name: "mylook" }, { name: "fashionista" }, { name: "todayimwearing" }, { name: "instastyle" }, { name: "outfitpost" }, { name: "fashionpost" }, { name: "todaysoutfit" }, { name: "fashiondiaries" }, { name: "nail" }, { name: "sparkles" }, { name: "gliter" }, { name: "nailart" }, { name: "opi" }, { name: "essie" }, { name: "unhas" }, { name: "preto" }, { name: "branco" }, { name: "rosa" }, { name: "shiny" }, { name: "polish" }, { name: "nailpolish" }, { name: "nailswag" }, { name: "Hair" }, { name: "hairstyle" }, { name: "instahair" }, { name: "hairstyles" }, { name: "haircolour" }, { name: "haircolor" }, { name: "hairdye" }, { name: "hairdo" }, { name: "haircut" }, { name: "longhairdontcare" }, { name: "braid" }, { name: "straighthair" }, { name: "longhair" }, { name: "straight" }, { name: "curly" }, { name: "brown" }, { name: "blonde" }, { name: "brunette" }, { name: "hairoftheday" }, { name: "hairideas" }, { name: "braidideas" }, { name: "perfectcurls" }, { name: "hairfashion" }, { name: "hairofinstagram" }, { name: "coolhair" }, { name: "makeup" }, { name: "instamakeup" }, { name: "cosmetic" }, { name: "cosmetics" }, { name: "eyeshadow" }, { name: "lipstick" }, { name: "gloss" }, { name: "mascara" }, { name: "palettes" }, { name: "eyeliner" }, { name: "lip" }, { name: "lips" }, { name: "tar" }, { name: "concealer" }, { name: "foundation" }, { name: "powder" }, { name: "eyebrows" }, { name: "lashes" }, { name: "lash" }, { name: "glue" }, { name: "glitter" }, { name: "crease" }, { name: "primers" }, { name: "base" }, { name: "jewels" }, { name: "jewel" }, { name: "gems" }, { name: "gem" }, { name: "gemstone" }, { name: "bling" }, { name: "stones" }, { name: "stone" }, { name: "trendy" }, { name: "accessories" }, { name: "crystals" }, { name: "accessory" }, { name: "instajewelry" }, { name: "jewelrygram" }, { name: "fashionjewelry" }, { name: "bracelets" }, { name: "bracelet" }, { name: "armcandy" }, { name: "armswag" }, { name: "wristgame" }, { name: "braceletstacks" }, { name: "braceletsoftheday" }, { name: "fashionlovers" }, { name: "armparty" }, { name: "wristwear" }, { name: "earrings" }, { name: "earring" }, { name: "earringsoftheday" }, { name: "earringaddict" }, { name: "earringstagram" }, { name: "piercing" }, { name: "piercings" }, { name: "pierced" }, { name: "earringswag" }, { name: "earringfashion" }, { name: "earringlove" }, { name: "highheels" }, { name: "platgorm" }, { name: "tall" }, { name: "instaheels" }, { name: "fashionshoes" }, { name: "shoelover" }, { name: "instashoes" }, { name: "highheelshoes" }, { name: "heelsaddict" }, { name: "loveheels" }, { name: "iloveheels" }, { name: "shoestagram" }, { name: "shoe" }, { name: "kicks" }, { name: "instakicks" }, { name: "sneaker" }, { name: "sneakerhead" }, { name: "sneakerheads" }, { name: "solecollector" }, { name: "soleonfire" }, { name: "nicekicks" }, { name: "igsneakercommunity" }, { name: "sneakerfreak" }, { name: "sneakerporn" }, { name: "shoeporn" }, { name: "nike" }, { name: "sneakerholics" }, { name: "sneakerfiend" }, { name: "shoegasm" }, { name: "kickstagram" }, { name: "walklikeus" }, { name: "peepmysneaks" }, { name: "flykicks" }, { name: "tattoo" }, { name: "tattoos" }, { name: "tat" }, { name: "ink" }, { name: "inked" }, { name: "tattooed" }, { name: "tattoist" }, { name: "coverup" }, { name: "sleevetattoo" }, { name: "handtattoo" }, { name: "chesttattoo" }, { name: "tatted" }, { name: "instatattoo" }, { name: "bodyart" }, { name: "tatts" }, { name: "tats" }, { name: "amazingink" }, { name: "tattedup" }, { name: "inkedup" }, { name: "bellyrings" }, { name: "navel" }, { name: "earlobe" }, { name: "ear" }, { name: "bellybuttonring" }, { name: "lipring" }, { name: "modifications" }, { name: "bodymods" }, { name: "piercingaddict" }, { name: "bellybar" }, { name: "bellybuttonpiercing" }, { name: "zaynmalik" }, { name: "louistomlinson" }, { name: "liampayne" }, { name: "1d" }, { name: "directioner" }, { name: "1direction" }, { name: "niall" }, { name: "harry" }, { name: "zayn" }, { name: "liam" }, { name: "louis" }, { name: "leeyum" }, { name: "zjmalik" }, { name: "justin" }, { name: "bieber" }, { name: "bieberfever" }, { name: "beiber" }, { name: "beiberfever" }, { name: "justinbieberswag" }, { name: "boyfriend" }, { name: "justindrewbieber" }, { name: "juju" }, { name: "justinb" }, { name: "justindb" }, { name: "biebs" }, { name: "neversaynever" }, { name: "belieber" }, { name: "believe" }, { name: "believetour" }, { name: "bieberlove" }, { name: "taylor" }, { name: "swift" }, { name: "taylorswift" }, { name: "country" }, { name: "singer" }, { name: "singing" }, { name: "song" }, { name: "swifties" }, { name: "swiftie" }, { name: "flawless" }, { name: "tswift" }, { name: "lovesong" }, { name: "katy" }, { name: "perry" }, { name: "katyperry" }, { name: "lovethissong" }, { name: "kp" }, { name: "katykats" }, { name: "katykat" }, { name: "katycats" }, { name: "katycat" }, { name: "caligirls" }, { name: "californiagirls" }, { name: "partofme" }, { name: "instaperry" }, { name: "extraterrestrial" }, { name: "teenagedream" }, { name: "wideawake" }, { name: "payne" }, { name: "photoofthedayleeyum" }, { name: "leeyumm" }, { name: "leeyumpayne" }, { name: "brilliam" }, { name: "horan" }, { name: "nialler" }, { name: "niallerhoran" }, { name: "niallerwins" }, { name: "niallers" }, { name: "nialljameshoran" }, { name: "niallisbeautiful" }, { name: "nialhoranfacts" }, { name: "niallimagine" }, { name: "niallisperfect" }, { name: "tomlinson" }, { name: "louistomlinsonfacts" }, { name: "louistomlinsontohostteenchoice2013" }, { name: "louistomlinsonimagine" }, { name: "louistomlinsonfanfic" }, { name: "louistomlinsonfact" }, { name: "tommo" }, { name: "lilo" }, { name: "loulou" }, { name: "lou" }, { name: "boobear" }, { name: "fabulouis" }, { name: "malik" }, { name: "malikbaby" }, { name: "directioners" }, { name: "zainmalik" }, { name: "loveonedirection" }, { name: "lovezayn" }, { name: "lovemalik" }, { name: "lovedirectioners" }, { name: "welovezayn" }, { name: "amazayn" }, { name: "djmalik" }, { name: "harrystylesimagine" }, { name: "hazza" }, { name: "hazzastyles" }, { name: "harryedwardstyles" }, { name: "harreh" }, { name: "harold" }, { name: "haroldstyles" }, { name: "harryimagine" }, { name: "lilwayne" }, { name: "@lilwayneofficial_" }, { name: "lil" }, { name: "wayne" }, { name: "liltunechi" }, { name: "weezy" }, { name: "ymcmb" }, { name: "youngmoney" }, { name: "cashmoney" }, { name: "tunechi" }, { name: "wayniac" }, { name: "weezyf" }, { name: "teamweezy" }, { name: "teamtunechi" }, { name: "trukfit" }, { name: "skate" }, { name: "famous" }, { name: "rapper" }, { name: "rich" }, { name: "hiphop" }, { name: "thecarter" }, { name: "drake" }, { name: "drizzy" }, { name: "drizzydrake" }, { name: "drakequotes" }, { name: "ovoxo" }, { name: "ovo" }, { name: "xo" }, { name: "teamdrizzy" }, { name: "teamdrake" }, { name: "instadrake" }, { name: "yolo" }, { name: "takecare" }, { name: "headlines" }, { name: "beat" }, { name: "rap" }, { name: "selenagomez" }, { name: "selena" }, { name: "gomez" }, { name: "selly" }, { name: "sel" }, { name: "selenamariegomez" }, { name: "selenator" }, { name: "selenators" }, { name: "sellyselena" }, { name: "selala" }, { name: "cutie" }, { name: "pickles" }, { name: "wowp" }, { name: "wizardsofwaverlyplace" }, { name: "mileycyrus" }, { name: "miley" }, { name: "cyrus" }, { name: "mileyraycyrus" }, { name: "hannahmontana" }, { name: "hannah" }, { name: "montana" }, { name: "disney" }, { name: "loveher" }, { name: "instamiley" }, { name: "instacyrus" }, { name: "pop" }, { name: "breakout" }, { name: "cantbetamed" }, { name: "destiny" }, { name: "smilers" }, { name: "nobodysperfect" }, { name: "actress" }, { name: "destinyhopecyrus" }, { name: "destinycyrus" }, { name: "demilovato" }, { name: "demi" }, { name: "lovato" }, { name: "demetria" }, { name: "lovatics" }, { name: "lovatic" }, { name: "lovaticforever" }, { name: "ddlovato" }, { name: "devonne" }, { name: "staystrong" }, { name: "giveyourheartabreak" }, { name: "ariana" }, { name: "arianagrande" }, { name: "grande" }, { name: "instaariana" }, { name: "instagrande" }, { name: "arianator" }, { name: "victorious" }, { name: "redhair" }, { name: "teamariana" }, { name: "catvalentine" }, { name: "caterinavalentine" }, { name: "caterina" }, { name: "chrisbrown" }, { name: "chris" }, { name: "cb" }, { name: "breezy" }, { name: "rnb" }, { name: "teambreezy" }, { name: "dancer" }, { name: "chrisbreezy" }, { name: "rihanna" }, { name: "rihannanavy" }, { name: "navy" }, { name: "rihannanavi" }, { name: "rihannafenty" }, { name: "rihannadiamonds" }, { name: "diamonds" }, { name: "unapologetic" }, { name: "riri" }, { name: "robyn" }, { name: "fenty" }, { name: "rih" }, { name: "rihnavy" }, { name: "robynfenty" }, { name: "austin" }, { name: "mahone" }, { name: "austinmahone" }, { name: "amahone" }, { name: "austinm" }, { name: "mahomie" }, { name: "texas" }, { name: "talented" }, { name: "mahomies" }, { name: "mahomiegram" }, { name: "mahomieforever" }, { name: "saysomething" }, { name: "sayyourejustafriend" }, { name: "whataboutlove" }, { name: "bangabanga" }, { name: "5sos" }, { name: "5secondsofsummer" }, { name: "luke" }, { name: "lukehemmings" }, { name: "lukey" }, { name: "ashton" }, { name: "ash" }, { name: "ashtonirwin" }, { name: "calum" }, { name: "cal" }, { name: "calumhood" }, { name: "michael" }, { name: "mike" }, { name: "michaelclifford" }, { name: "boyband" }, { name: "5sosfans" }, { name: "5sosfamily" }, { name: "5sosfam" }, { name: "fivesecondsofsummer" }, { name: "genre" }, { name: "songs" }, { name: "melody" }, { name: "dubstep" }, { name: "beats" }, { name: "jam" }, { name: "myjam" }, { name: "partymusic" }, { name: "newsong" }, { name: "remix" }, { name: "favoritesong" }, { name: "bestsong" }, { name: "bumpin" }, { name: "repeat" }, { name: "listentothis" }, { name: "goodmusic" }, { name: "instamusic" }, { name: "movies" }, { name: "theatre" }, { name: "video" }, { name: "movie" }, { name: "film" }, { name: "films" }, { name: "videos" }, { name: "actor" }, { name: "cinema" }, { name: "dvd" }, { name: "amc" }, { name: "instamovies" }, { name: "star" }, { name: "moviestar" }, { name: "hollywood" }, { name: "goodmovie" }, { name: "flick" }, { name: "flicks" }, { name: "instaflick" }, { name: "instaflicks" }, { name: "books" }, { name: "book" }, { name: "read" }, { name: "reading" }, { name: "reader" }, { name: "page" }, { name: "pages" }, { name: "kindle" }, { name: "nook" }, { name: "library" }, { name: "author" }, { name: "bookworm" }, { name: "readinglist" }, { name: "imagine" }, { name: "plot" }, { name: "climax" }, { name: "story" }, { name: "literature" }, { name: "literate" }, { name: "stories" }, { name: "words" }, { name: "text" }, { name: "videogames" }, { name: "games" }, { name: "gamer" }, { name: "gaming" }, { name: "instagaming" }, { name: "instagamer" }, { name: "playinggames" }, { name: "online" }, { name: "onlinegaming" }, { name: "videogameaddict" }, { name: "instagame" }, { name: "gamestagram" }, { name: "gamerguy" }, { name: "gamergirl" }, { name: "gamin" }, { name: "game" }, { name: "winning" }, { name: "playing" }, { name: "electronics" }, { name: "technology" }, { name: "tech" }, { name: "electronic" }, { name: "device" }, { name: "gadget" }, { name: "gadgets" }, { name: "instatech" }, { name: "geek" }, { name: "techie" }, { name: "nerd" }, { name: "techy" }, { name: "computers" }, { name: "laptops" }, { name: "hack" }, { name: "screen" }, { name: "iphone" }, { name: "apple" }, { name: "appleiphone" }, { name: "ios" }, { name: "iphone3g" }, { name: "iphone3gs" }, { name: "iphone4" }, { name: "iphone5" }, { name: "mobile" }, { name: "instaiphone" }, { name: "phone" }, { name: "smartphone" }, { name: "iphonegraphy" }, { name: "iphoneographer" }, { name: "iphoneology" }, { name: "iphoneographers" }, { name: "iphonegraphic" }, { name: "iphoneogram" }, { name: "teamiphone" }, { name: "android" }, { name: "androidonly" }, { name: "google" }, { name: "googleandroid" }, { name: "droid" }, { name: "instandroid" }, { name: "instaandroid" }, { name: "instadroid" }, { name: "ics" }, { name: "jellybean" }, { name: "samsung" }, { name: "samsunggalaxys2" }, { name: "samsunggalaxy" }, { name: "androidographer" }, { name: "androidinstagram" }, { name: "androidnesia" }, { name: "androidcommunity" }, { name: "teamdroid" }, { name: "teamandroid" }, { name: "fslc" }, { name: "followshoutoutlikecomment" }, { name: "TagsForLikesFSLC" }, { name: "f4f" }, { name: "s4s" }, { name: "l4l" }, { name: "c4c" }, { name: "followback" }, { name: "shoutoutback" }, { name: "likeback" }, { name: "commentback" }, { name: "pleasefollow" }, { name: "pleaseshoutout" }, { name: "pleaselike" }, { name: "pleasecomment" }, { name: "teamfslcback" }, { name: "fslcback" }, { name: "follows" }, { name: "shoutouts" }, { name: "likes" }, { name: "comments" }, { name: "fslcalways" }, { name: "followforfollow" }, { name: "teamfollowback" }, { name: "followher" }, { name: "followbackteam" }, { name: "followhim" }, { name: "followall" }, { name: "followalways" }, { name: "follower" }, { name: "following" }, { name: "shout" }, { name: "shoutouter" }, { name: "shoutoutforshoutout" }, { name: "shoutout4shoutout" }, { name: "so" }, { name: "so4so" }, { name: "ilovemyfollowers" }, { name: "sobackteam" }, { name: "soback" }, { name: "shout_out" }, { name: "liker" }, { name: "likes4likes" }, { name: "likeforlike" }, { name: "likesforlikes" }, { name: "liketeam" }, { name: "likebackteam" }, { name: "likeall" }, { name: "likealways" }, { name: "liking" }, { name: "comment4comment" }, { name: "commenter" }, { name: "commenting" }, { name: "comments4comments" }, { name: "commentteam" }, { name: "commentbackteam" }, { name: "commentbelow" }, { name: "commentall" }, { name: "commentalways" }, { name: "travel" }, { name: "traveling" }, { name: "visiting" }, { name: "instatravel" }, { name: "trip" }, { name: "travelling" }, { name: "tourism" }, { name: "tourist" }, { name: "instapassport" }, { name: "instatraveling" }, { name: "mytravelgram" }, { name: "travelgram" }, { name: "travelingram" }, { name: "igtravel" }, { name: "cars" }, { name: "car" }, { name: "ride" }, { name: "drive" }, { name: "driver" }, { name: "sportscar" }, { name: "vehicle" }, { name: "vehicles" }, { name: "road" }, { name: "freeway" }, { name: "highway" }, { name: "sportscars" }, { name: "exotic" }, { name: "exoticcar" }, { name: "exoticcars" }, { name: "speed" }, { name: "tire" }, { name: "tires" }, { name: "spoiler" }, { name: "muffler" }, { name: "race" }, { name: "racing" }, { name: "wheel" }, { name: "wheels" }, { name: "rim" }, { name: "rims" }, { name: "engine" }, { name: "horsepower" }, { name: "motorcycle" }, { name: "motorcycles" }, { name: "bike" }, { name: "rideout" }, { name: "biker" }, { name: "bikergang" }, { name: "helmet" }, { name: "cycle" }, { name: "bikelife" }, { name: "streetbike" }, { name: "cc" }, { name: "instabike" }, { name: "instamotor" }, { name: "motorbike" }, { name: "instamotorcycle" }, { name: "instamoto" }, { name: "instamotogallery" }, { name: "supermoto" }, { name: "cruisin" }, { name: "cruising" }, { name: "bikestagram" }, { name: "skateboarding" }, { name: "skating" }, { name: "skater" }, { name: "instaskater" }, { name: "sk8" }, { name: "sk8er" }, { name: "sk8ing" }, { name: "sk8ordie" }, { name: "board" }, { name: "longboard" }, { name: "longboarding" }, { name: "kickflip" }, { name: "ollie" }, { name: "skatephotoaday" }, { name: "skateanddestroy" }, { name: "skateeverydamnday" }, { name: "skatespot" }, { name: "skaterguy" }, { name: "skatergirl" }, { name: "skatepark" }, { name: "skateboard" }, { name: "skatelife" }, { name: "health" }, { name: "fitness" }, { name: "fit" }, { name: "fitnessmodel" }, { name: "fitnessaddict" }, { name: "fitspo" }, { name: "workout" }, { name: "bodybuilding" }, { name: "cardio" }, { name: "gym" }, { name: "train" }, { name: "training" }, { name: "instahealth" }, { name: "healthychoices" }, { name: "active" }, { name: "strong" }, { name: "motivation" }, { name: "determination" }, { name: "lifestyle" }, { name: "diet" }, { name: "getfit" }, { name: "cleaneating" }, { name: "eatclean" }, { name: "exercise" }, { name: "instafit" }, { name: "gymlife" }, { name: "pushpullgrind" }, { name: "grindout" }, { name: "flex" }, { name: "instafitness" }, { name: "trainhard" }, { name: "grow" }, { name: "dedication" }, { name: "strength" }, { name: "ripped" }, { name: "swole" }, { name: "fitnessgear" }, { name: "muscle" }, { name: "shredded" }, { name: "squat" }, { name: "bigbench" }, { name: "sweat" }, { name: "grind" }, { name: "sports" }, { name: "sport" }, { name: "football" }, { name: "soccer" }, { name: "basketball" }, { name: "futball" }, { name: "ball" }, { name: "gametime" }, { name: "crowd" }, { name: "fans" }, { name: "player" }, { name: "score" }, { name: "goal" }, { name: "action" }, { name: "kick" }, { name: "throw" }, { name: "pass" }, { name: "win" }, { name: "run" }, { name: "runner" }, { name: "running" }, { name: "runtoinspire" }, { name: "furtherfasterstronger" }, { name: "seenonmyrun" }, { name: "trailrunning" }, { name: "trailrunner" }, { name: "runchat" }, { name: "runhappy" }, { name: "time2run" }, { name: "happyrunner" }, { name: "marathon" }, { name: "runners" }, { name: "trailrun" }, { name: "instarunner" }, { name: "instarun" }, { name: "workouttime" }, { name: "dance" }, { name: "dancing" }, { name: "dancerecital" }, { name: "ballet" }, { name: "dancers" }, { name: "dancefloor" }, { name: "danceshoes" }, { name: "instaballet" }, { name: "studio" }, { name: "instadance" }, { name: "cheer" }, { name: "choreography" }, { name: "flexible" }, { name: "flexibility" }, { name: "practice" }, { name: "cheerleading" }, { name: "cheerleader" }, { name: "cheerathletics" }, { name: "stunt" }, { name: "stunting" }, { name: "tumbling" }, { name: "jump" }, { name: "toetouch" }, { name: "box" }, { name: "stretch" }, { name: "scale" }, { name: "scorpion" }, { name: "backtuck" }, { name: "instacheer" }, { name: "cheerstagram" }, { name: "cheerperfection" }, { name: "cheerclassic" }, { name: "instacheerleader" }, { name: "cheerislife" }, { name: "cheering" }, { name: "cheersport" }, { name: "cheerpassion" }, { name: "cheerpractice" }, { name: "gymnastics" }, { name: "gymnastic" }, { name: "gymnast" }, { name: "gymnasts" }, { name: "gymnastique" }, { name: "gymnastlife" }, { name: "beam" }, { name: "vault" }, { name: "bars" }, { name: "flip" }, { name: "git" }, { name: "leap" }, { name: "highbar" }, { name: "flipping" }, { name: "basket" }, { name: "baller" }, { name: "hoop" }, { name: "balling" }, { name: "court" }, { name: "net" }, { name: "backboard" }, { name: "shoot" }, { name: "instaballer" }, { name: "instaball" }, { name: "nba" }, { name: "bball" }, { name: "futbol" }, { name: "team" }, { name: "soccerball" }, { name: "instafutbol" }, { name: "soccergame" }, { name: "fifa" }, { name: "worldcup" }, { name: "footballgame" }, { name: "footballseason" }, { name: "footballgames" }, { name: "footballplayer" }, { name: "jersey" }, { name: "stadium" }, { name: "yards" }, { name: "yardline" }, { name: "pads" }, { name: "touchdown" }, { name: "catch" }, { name: "quarterback" }, { name: "nfl" }, { name: "superbowl" }, { name: "kickoff" }, { name: "baseball" }, { name: "bases" }, { name: "homerun" }, { name: "bat" }, { name: "swing" }, { name: "pitcher" }, { name: "mlb" }, { name: "firstbase" }, { name: "secondbase" }, { name: "thirdbase" }, { name: "inning" }, { name: "baseballbat" }, { name: "mitt" }, { name: "gloves" }, { name: "hockey" }, { name: "hockeystick" }, { name: "puck" }, { name: "rink" }, { name: "icerink" }, { name: "hockeyplayer" }, { name: "hockeyplayers" }, { name: "fight" }, { name: "shot" }, { name: "hockeygram" }, { name: "stanleycup" }, { name: "hockeylife" }, { name: "pucklife" }, { name: "nhl" }, { name: "superbowlxlviii" }, { name: "xlviii" }, { name: "superbowl2014" }, { name: "2014superbowl" }, { name: "superbowl48" }, { name: "48" }, { name: "seavsden" }, { name: "sb48" }, { name: "broncos" }, { name: "seahawks" }, { name: "seattle" }, { name: "denver" }, { name: "sunday" }, { name: "superbowlweekend" }, { name: "sea" }, { name: "gohawks" }, { name: "12s" }, { name: "seahawksnation" }, { name: "seattleseahawks" }, { name: "hawks" }, { name: "goseahawks" }, { name: "goseattle" }, { name: "superbowlxlvii" }, { name: "xlvii" }, { name: "gobroncos" }, { name: "unitedinorange" }, { name: "broncosnation" }, { name: "denverbroncos" }, { name: "bronco" }, { name: "godenver" }, { name: "teammanning" }, { name: "letsgobroncos" }, { name: "49ers" }, { name: "niners" }, { name: "ninernation" }, { name: "questforsix" }, { name: "quest4six" }, { name: "redandgold" }, { name: "faithful" }, { name: "sanfrancsico" }, { name: "ninersfaithful" }, { name: "49ersfaithful" }, { name: "sfniners" }, { name: "sf49ers" }, { name: "superbowl2013" }, { name: "2013superbowl" }, { name: "harbowl" }, { name: "harbaughbowl" }, { name: "superbowl47" }, { name: "47" }, { name: "sb47" }, { name: "ravens" }, { name: "ravensnation" }, { name: "baltimoreravens" }, { name: "ravensfan" }, { name: "nola" }, { name: "baltimore" }, { name: "blackandpurple" }, { name: "raylewis" }, { name: "rayray" }, { name: "school" }, { name: "class" }, { name: "classess" }, { name: "teacher" }, { name: "teachers" }, { name: "student" }, { name: "students" }, { name: "classmates" }, { name: "classmate" }, { name: "peer" }, { name: "homework" }, { name: "textbook" }, { name: "textbooks" }, { name: "messingaround" }, { name: "working" }, { name: "job" }, { name: "myjob" }, { name: "office" }, { name: "company" }, { name: "mygrind" }, { name: "dayjob" }, { name: "ilovemyjob" }, { name: "dailygrind" }, { name: "business" }, { name: "biz" }, { name: "workinglate" }, { name: "computer" }, { name: "instajob" }, { name: "instalife" }, { name: "lmao" }, { name: "lmfao" }, { name: "hilarious" }, { name: "laugh" }, { name: "laughing" }, { name: "wacky" }, { name: "silly" }, { name: "witty" }, { name: "instahappy" }, { name: "joke" }, { name: "jokes" }, { name: "joking" }, { name: "epic" }, { name: "funnypictures" }, { name: "haha" }, { name: "humor" }, { name: "quote" }, { name: "quotes" }, { name: "quoteoftheday" }, { name: "instagramhub" }, { name: "tbt" }, { name: "true" }, { name: "nofilter" }, { name: "word" }, { name: "throwbackthursdays" }, { name: "tbts" }, { name: "throwback" }, { name: "tb" }, { name: "instatbt" }, { name: "instatb" }, { name: "reminisce" }, { name: "reminiscing" }, { name: "backintheday" }, { name: "back" }, { name: "instamemory" }, { name: "miss" }, { name: "instamoment" }, { name: "throwbackthursdayy" }, { name: "throwbackthursdayyy" }, { name: "instagramdirect" }, { name: "instadirect" }, { name: "directmessage" }, { name: "direct" }, { name: "message" }, { name: "messageme" }, { name: "instadirectme" }, { name: "tumblr" }, { name: "tumblrlife" }, { name: "tumblrphoto" }, { name: "tumblrphotos" }, { name: "tumblrlove" }, { name: "tumblrpic" }, { name: "tumblrpics" }, { name: "tumblrposts" }, { name: "tumblrpost" }, { name: "perfect" }, { name: "tumblrpicture" }, { name: "tumblrpictures" }, { name: "tumblrthings" }, { name: "tumblrstuff" }, { name: "instatumblr" }, { name: "tumblrgram" }, { name: "kikme" }, { name: "kikmessenger" }, { name: "kikit" }, { name: "kikster" }, { name: "kikmebored" }, { name: "kikmeguys" }, { name: "kikmessanger" }, { name: "boredkikme" }, { name: "kikmeplease" }, { name: "kikmessage" }, { name: "kikmee" }, { name: "kikmemaybe" }, { name: "kikplease" }, { name: "letskik" }, { name: "instakik" }, { name: "snapchat" }, { name: "snap" }, { name: "chat" }, { name: "snapchatme" }, { name: "snapchatmenow" }, { name: "snapchatit" }, { name: "snapchatster" }, { name: "snapchatmguys" }, { name: "snapchatmegirl" }, { name: "snapchatmeimbored" }, { name: "snapchatmeplease" }, { name: "snapit" }, { name: "snapchatmemaybe" }, { name: "instasnapchat" }, { name: "letssnapchat" }, { name: "askfm" }, { name: "ask" }, { name: "askmeanything" }, { name: "askfmme" }, { name: "questions" }, { name: "question" }, { name: "opinions" }, { name: "anonymous" }, { name: "askme" }, { name: "askmestuff" }, { name: "leavequestions" }, { name: "justask" }, { name: "justquestion" }, { name: "askfmit" }, { name: "askmemaybe" }, { name: "askforask" }, { name: "asknow" }, { name: "askaway" }, { name: "askmesomething" }, { name: "spamme" }, { name: "linkinbio" }, { name: "money" }, { name: "cash" }, { name: "dough" }, { name: "bills" }, { name: "crisp" }, { name: "benjamin" }, { name: "benjamins" }, { name: "franklin" }, { name: "franklins" }, { name: "bank" }, { name: "payday" }, { name: "hundreds" }, { name: "twentys" }, { name: "fives" }, { name: "ones" }, { name: "100s" }, { name: "20s" }, { name: "greens" }, { name: "instarich" }, { name: "capital" }, { name: "stacks" }, { name: "stack" }, { name: "bread" }, { name: "paid" }, { name: "colors" }, { name: "yellow" }, { name: "indigo" }, { name: "violet" }, { name: "rainbow" }, { name: "rainbowcolors" }, { name: "colour" }, { name: "roygbiv" }, { name: "instacolor" }, { name: "colorgram" }, { name: "colores" }, { name: "vibrant" }, { name: "multicolor" }, { name: "multicolored" }, { name: "instacolorful" }, { name: "colorworld" }, { name: "spiritual" }, { name: "faith" }, { name: "god" }, { name: "grace" }, { name: "pray" }, { name: "prayers" }, { name: "praying" }, { name: "amen" }, { name: "religion" }, { name: "coexist" }, { name: "spirituality" }, { name: "trust" }, { name: "peace" }, { name: "calm" }, { name: "mind" }, { name: "soul" }, { name: "hope" }, { name: "wisdom" }, { name: "compassion" }, { name: "forgiveness" }, { name: "knowledge" }, { name: "meditation" }, { name: "meditate" }, { name: "guidance" }, { name: "hijab" }, { name: "hijaboftheday" }, { name: "hotd" }, { name: "hijabfashion" }, { name: "hijabilookbook" }, { name: "thehijabstyle" }, { name: "hijabmodesty" }, { name: "modesty" }, { name: "hijabstyle" }, { name: "hijabistyle" }, { name: "fashionhijabis" }, { name: "hijablife" }, { name: "hijabspiration" }, { name: "hijabcandy" }, { name: "hijabdaily" }, { name: "hijablove" }, { name: "hijabswag" }, { name: "modestclothing" }, { name: "fashionmodesty" }, { name: "slayqueen" }, { name: "hashbump" }];

exports.default = hashtags;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _rebass = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const __Suggestions = props => {

    const hasSuggestions = props.suggestions && props.suggestions.length !== 0;

    if (!hasSuggestions) {
        return null;
    }

    return _react2.default.createElement(
        _rebass.Absolute,
        { width: [1], pl: [1] },
        props.suggestions.map(item => _react2.default.createElement(
            _rebass.Box,
            { onClick: props.onClickSuggestions,
                onMouseOver: props.onMouseOverSuggestions,
                color: props.theme.hashtagAutoSuggest.suggestionBoxFg,
                bg: item.selected ? props.theme.hashtagAutoSuggest.suggestionBoxSelectedBg : props.theme.hashtagAutoSuggest.suggestionBoxBg,
                key: item.name,
                pl: props.theme.hashtagAutoSuggest.suggestionBoxPl,
                pr: props.theme.hashtagAutoSuggest.suggestionBoxPr,
                pt: props.theme.hashtagAutoSuggest.suggestionBoxPt,
                pb: props.theme.hashtagAutoSuggest.suggestionBoxPb,
                ml: props.theme.hashtagAutoSuggest.suggestionBoxMl,
                mr: props.theme.hashtagAutoSuggest.suggestionBoxMr,
                mt: props.theme.hashtagAutoSuggest.suggestionBoxMt,
                mb: props.theme.hashtagAutoSuggest.suggestionBoxMb,
                style: { overflow: 'hidden' }
            },
            item.name
        ))
    );
};

const _Suggestions = (0, _styledComponents.withTheme)(__Suggestions);

let AutoSuggest = class AutoSuggest extends _react.PureComponent {

    constructor(props) {
        super(props);

        this.onKeyDownSuggestionsHandler = this.onKeyDownSuggestionsHandler.bind(this);
        this.onMouseOverSuggestionsHandler = this.onMouseOverSuggestionsHandler.bind(this);
    }

    onMouseOverSuggestionsHandler(event) {

        const suggestions = [];

        this.props.suggestions.forEach((item, i) => {
            suggestions[i] = Object.assign({}, item);
        });

        suggestions.forEach(item => {
            if (item.selected === true) item.selected = false;
            if (item.name === event.target.innerText) {
                item.selected = true;
            }
        });
        this.props.suggestionsHandler(suggestions);
    }

    onKeyDownSuggestionsHandler(event) {

        if (!this.props.suggestions) return;

        const suggestions = [];

        this.props.suggestions.forEach((item, i) => {
            suggestions[i] = Object.assign({}, item);
        });

        const { value } = this.props.value;
        const selectionExists = suggestions && suggestions.find(item => {
            return item.selected === true;
        });

        switch (event.keyCode) {
            // up
            case 38:
                if (selectionExists) {
                    suggestions.find((item, i) => {
                        if (item.selected === true && i > 0) {
                            item.selected = false;
                            suggestions[i - 1].selected = true;
                            return true;
                        }
                    });
                } else if (suggestions) {
                    suggestions[0].selected = true;
                }
                this.props.suggestionsHandler(suggestions);
                break;
            // down
            case 40:
                if (selectionExists) {
                    suggestions.find((item, i) => {
                        if (item.selected === true && i < suggestions.length - 1) {
                            item.selected = false;
                            suggestions[i + 1].selected = true;
                            return true;
                        }
                    });
                } else if (suggestions) {
                    suggestions[0].selected = true;
                }
                this.props.suggestionsHandler(suggestions);
                break;
            // enter
            case 13:
                if (selectionExists) {
                    suggestions.find(item => {
                        if (item.selected === true) {
                            item.selected = false;
                            this.props.valueHandler(item.name, true);
                            return true;
                        }
                    });
                } else if (value) {
                    this.props.valueHandler(value, true);
                }
                this.props.suggestionsHandler(null);
                break;
            // esc
            case 27:
                this.props.suggestionsHandler(null);
                this.props.valueHandler("", true);
                break;
        }
    }

    render() {
        return _react2.default.createElement(
            _rebass.Relative,
            null,
            _react2.default.createElement(_rebass.Input, { bg: this.props.theme.hashtagAutoSuggest.inputBg,
                color: this.props.theme.hashtagAutoSuggest.inputFg,
                pl: this.props.theme.hashtagAutoSuggest.inputPl,
                pr: this.props.theme.hashtagAutoSuggest.inputPr,
                pt: this.props.theme.hashtagAutoSuggest.inputPt,
                pb: this.props.theme.hashtagAutoSuggest.inputPb,
                ml: this.props.theme.hashtagAutoSuggest.inputMl,
                mr: this.props.theme.hashtagAutoSuggest.inputMr,
                mt: this.props.theme.hashtagAutoSuggest.inputMt,
                mb: this.props.theme.hashtagAutoSuggest.inputMb,
                style: { overflow: 'hidden',
                    border: this.props.theme.hashtagAutoSuggest.inputBorder,
                    borderRadius: this.props.theme.hashtagAutoSuggest.inputBorderRadius },
                value: this.props.value,
                onChange: event => {
                    this.props.valueHandler(event.target.value);
                },
                onKeyDown: this.onKeyDownSuggestionsHandler
            }),
            _react2.default.createElement(_Suggestions, {
                suggestions: this.props.suggestions,
                onClickSuggestions: event => {
                    this.props.suggestionsHandler(null);
                    this.props.valueHandler(event.target.innerText, true);
                },
                onMouseOverSuggestions: this.onMouseOverSuggestionsHandler
            })
        );
    }
};
exports.default = (0, _styledComponents.withTheme)(AutoSuggest);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _rebass = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _TopHashtags = props => {
  return _react2.default.createElement(
    _rebass.Box,
    { width: props.theme.topHashtags.boxWidth,
      pl: props.theme.topHashtags.boxPl,
      pr: props.theme.topHashtags.boxPr,
      pt: props.theme.topHashtags.boxPt },
    _react2.default.createElement(
      _rebass.Label,
      { is: props.theme.topHashtags.labelIs,
        fontSize: props.theme.topHashtags.labelFontSize,
        pb: props.theme.topHashtags.labelPb,
        color: props.theme.topHashtags.labelColor },
      props.title
    ),
    _react2.default.createElement(
      _rebass.Flex,
      { align: props.theme.topHashtags.flexAlign },
      _react2.default.createElement(_rebass.Image, { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.yaySvgSource }),
      _react2.default.createElement(
        _rebass.Box,
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topYay
      )
    ),
    _react2.default.createElement(
      _rebass.Flex,
      { align: props.theme.topHashtags.flexAlign },
      _react2.default.createElement(_rebass.Image, { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.grrrSvgSource }),
      _react2.default.createElement(
        _rebass.Box,
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topGrrr
      )
    ),
    _react2.default.createElement(
      _rebass.Flex,
      { align: props.theme.topHashtags.flexAlign },
      _react2.default.createElement(_rebass.Image, { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.dunnoSvgSource }),
      _react2.default.createElement(
        _rebass.Box,
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topDunno
      )
    ),
    _react2.default.createElement(
      _rebass.Flex,
      { align: props.theme.topHashtags.flexAlign },
      _react2.default.createElement(_rebass.Image, { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.mehSvgSource }),
      _react2.default.createElement(
        _rebass.Box,
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topMeh
      )
    )
  );
};

exports.default = (0, _styledComponents.withTheme)(_TopHashtags);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _rebass = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _Header = props => {
  return _react2.default.createElement(
    _rebass.Flex,
    null,
    _react2.default.createElement(_rebass.Image, { display: props.theme.header.logoImageDisplay, width: props.theme.header.logoImageWidth, src: props.theme.hashbumpLogoSvgSource }),
    _react2.default.createElement(
      _rebass.Box,
      { ml: props.theme.header.nameBoxMl, pr: props.theme.header.nameBoxPr, pt: props.theme.header.nameBoxPt },
      _react2.default.createElement(
        _rebass.Flex,
        null,
        _react2.default.createElement(
          _rebass.Label,
          { display: props.theme.header.nameLabelDisplay, fontSize: props.theme.header.nameLabelFontSize, color: props.theme.header.nameLabelLeftColor },
          'hash'
        ),
        _react2.default.createElement(
          _rebass.Label,
          { display: props.theme.header.nameLabelDisplay, fontSize: props.theme.header.nameLabelFontSize, color: props.theme.header.nameLabelRightColor },
          'bump'
        )
      )
    )
  );
};

exports.default = (0, _styledComponents.withTheme)(_Header);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _rebass = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _BumpButton = props => {
    return _react2.default.createElement(
        _rebass.Box,
        { bumpType: props.bumpType, p: props.theme.bumpButton.boxP, width: props.theme.bumpButton.width },
        _react2.default.createElement(_rebass.Image, { display: props.theme.bumpButton.imageDisplay, src: props.buttonImageSource }),
        _react2.default.createElement(
            _rebass.Text,
            { center: true, color: props.theme.bumpButton.color, fontSize: props.theme.bumpButton.fontSize },
            props.bumpCount
        )
    );
};

exports.default = (0, _styledComponents.withTheme)(_BumpButton);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const hashbumpColorGold = exports.hashbumpColorGold = "#e4be45";
const hashbumpColorGreen = exports.hashbumpColorGreen = "#2f9b4c";
const hashbumpColorPurple = exports.hashbumpColorPurple = "#8845ad";

const theme = {
    yaySvgSource: '../hashbump-yay.svg',
    grrrSvgSource: '../hashbump-grrr.svg',
    dunnoSvgSource: '../hashbump-dunno.svg',
    mehSvgSource: '../hashbump-meh.svg',
    hashbumpLogoSvgSource: '../hashbump-logo.svg',
    header: {
        logoImageDisplay: 'inline-flex',
        logoImageWidth: [1 / 6, 1 / 14, 1 / 10],
        nameBoxMl: 'auto',
        nameBoxPr: [2, 2, 3],
        nameBoxPt: [3, 2, 4],
        nameLabelDisplay: 'inline-flex',
        nameLabelFontSize: [4, 4, 7],
        nameLabelLeftColor: hashbumpColorGreen,
        nameLabelRightColor: hashbumpColorPurple
    },
    topHashtags: {
        boxWidth: [1, 1 / 2, 1 / 2],
        boxPl: [1, 1, 3],
        boxPr: [0, 0, 1],
        boxPt: [0, 0, 2],
        labelIs: 'h1',
        labelFontSize: [3, 3, 5],
        labelPb: [0, 0, 1],
        labelColor: hashbumpColorGreen,
        flexAlign: 'center',
        inlineImageDisplay: 'inline-flex',
        inlineImageWidth: [1 / 15, 1 / 16, 1 / 14],
        infoBoxDisplay: 'inline-flex',
        infoBoxFontSize: [2, 2, 4],
        infoBoxColor: hashbumpColorGreen,
        infoBoxPl: 2
    },
    hashtagAutoSuggest: {
        inputBg: hashbumpColorGold,
        inputFg: hashbumpColorGreen,
        inputPl: [1],
        inputPr: [0],
        inputPt: [0],
        inputPb: [0],
        inputMl: [0],
        inputMr: [0],
        inputMt: [0],
        inputMb: [0],
        inputBorder: '2px solid',
        inputBorderRadius: '',
        suggestionBoxPl: [1],
        suggestionBoxPr: [0],
        suggestionBoxPt: [0],
        suggestionBoxPb: [0],
        suggestionBoxMl: [0],
        suggestionBoxMr: [0],
        suggestionBoxMt: [0],
        suggestionBoxMb: [0],
        suggestionBoxBg: hashbumpColorGold,
        suggestionBoxFg: hashbumpColorGreen,
        suggestionBoxSelectedBg: hashbumpColorPurple,
        suggestionBoxSelectedFg: hashbumpColorGreen
    },
    bumpButton: {
        boxP: [1, 1, 1],
        width: [1, 4 / 5, 1 / 4],
        imageDisplay: 'inline-flex',
        color: hashbumpColorGreen,
        fontSize: [4, 2, 4]
    },
    font: 'Fira Sans'
};

exports.default = theme;

/***/ }),
/* 59 */
/***/ (function(module, exports) {



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Self-signed certificate. Used for the purposes of running a demo SSL server
// in the sample kit. Don't use in production!

// Private key file
const key = exports.key = `
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEArImW6u4aqhFf2sXDWjYiSg6W9e7LxNz6YbTk0E/G3vybHZk9
4DLe/LLF2x2740WV60DLBXSw1PXbRdNX90MDUJey++BMNDrNlYNTgKC5jBSO54mD
u3WKqhQfawYIaraNdzFix8yCgDgNyDuOziWTcIHRIO4DGH3zERcUH9yxrepoSuE9
HqROVF+dsgTvP+I6CYULMTIDncQi5QaK6DScykAFs8lobmBuZ6ncEZJWejIzzdAo
ZGaW1SQY7BwCauckiqbdlvYdLoRqijvnl/1IyYDBYbDpg+LGnw1US5dmzSf68biT
VpdsmoZi4TgH8Cmnx1VKzGErvaFjJmguhiqqSwIDAQABAoIBAECVsFx4jJqkrlDi
PmICaYt3MqMUpEoovcDdSdmAQ10tCZNmzXajFD1bXhzLYI2OerP5KQX9zEOrVE0q
836nIxKD9oe6Skwyxsn0wskfYNVCzMt2+kytjx5jMe+J7pSjiQjY/7TypNcCJIaT
ZL1d63bt4S6Gabo9S0NWdD4JCqmiu7X8AhJY4TcMr9taRKYH3ileGSRrp2jQyYGV
+E11f8jb6VLFNWJzYV0aRftOefbFm8IQv13vGkxPtJ054tqPfdrIiI6GY01yRxS2
xCPVREnw/nvPu2a3I7EdXdZjgkGMDt9rMGJOkWpEuk9UlEIQqsGRBZ2LfjnS8Kw2
X65JbMECgYEA2vbjJ+0Q7tyxHxp468r84NGiZT/W92p5B31S1yE6czSFtk2rw2vK
6nM5vlYwKnYt0ESlYtmdiWyl4mdrA2eclUczwuVbISlMxLphMs3puQFVcCoBYQ9q
B1Z60BkNfevWXbSN9SH+E/yqqGA9HMuCKcyDIgKsYXvBNyPMlhNloSMCgYEAybhs
3SbxS67NWlF7kT/A8rBDy8alWWAUcX4qD6fxzRpilrT7ChHPydMsgS9rd436GBId
hlFSy+wKfwNvFeyZ59tSWBruEo/9tIPy/aSJRWgxPXcmtoMN/URNvM0igm+ModYA
gMMddekNz+qjpD0a5gSMiw/nV18Kbg3N785haLkCgYB7YEcoFQTIgiNu8hyWR57r
ElPdlvYKHL0rQisuOnPTvBFnYiZZC2Cfb+NmYuvq0QIJatSBeTqx1z007661kWkC
F8eLlm4dpkayRo5D8RAzhRPeCl0SknvcvJagsK0QeZUk4XpnWArwuhpymx90HRsv
cCOnQzhcCT4aUpqRKUbHXwKBgCX2rZZZc+QYe9FZsHW/l+KUxc2eDxRo/q/1XJkh
tGIzawaN/QkCHScQtTmC4SjY8Y6CKkhTGdADFl6dGNT5eGWoYzDtsIyRyN+mTZ7q
zmLfnxTATerfc0yNBExaFvqRX9g9XE7fabX9LHpK4I1SarOLe5/YWGObIW1g77cI
ElERAoGAI0R8KGB6qLmAUx2Kt1LcrH8anhJ32q/qimYdae+0rpfJ7PgqtEyohJ2W
cPOb3RRB2Cte/tYfhZse91lhuFMksp5R+/7H1aAA6u8vw2RFRVfpQMIq8Jag9xoA
wreduKK1jVs++uTaWsz8hJm+OivXz+TVEbv14FxCG+UL0+jHgak=
-----END RSA PRIVATE KEY-----
`;

// Certificate
const cert = exports.cert = `
-----BEGIN CERTIFICATE-----
MIICpDCCAYwCCQDJpSJg3QqP6zANBgkqhkiG9w0BAQsFADAUMRIwEAYDVQQDDAls
b2NhbGhvc3QwHhcNMTcwODI4MTUzNDM3WhcNMjcwODI2MTUzNDM3WjAUMRIwEAYD
VQQDDAlsb2NhbGhvc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCs
iZbq7hqqEV/axcNaNiJKDpb17svE3PphtOTQT8be/JsdmT3gMt78ssXbHbvjRZXr
QMsFdLDU9dtF01f3QwNQl7L74Ew0Os2Vg1OAoLmMFI7niYO7dYqqFB9rBghqto13
MWLHzIKAOA3IO47OJZNwgdEg7gMYffMRFxQf3LGt6mhK4T0epE5UX52yBO8/4joJ
hQsxMgOdxCLlBoroNJzKQAWzyWhuYG5nqdwRklZ6MjPN0ChkZpbVJBjsHAJq5ySK
pt2W9h0uhGqKO+eX/UjJgMFhsOmD4safDVRLl2bNJ/rxuJNWl2yahmLhOAfwKafH
VUrMYSu9oWMmaC6GKqpLAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAGu3NXny0wNR
ltJnRujm5hIDfvu/buG6KUcC/7VIfqWbu2sRjc6ItRWhLZhG46GpfBkU30drSlAe
YAS8vxPPAXegX+X6spdWZu8YMAEncZQyOQsNnGGMUCH9D58Jb8XAGdYUp43M6bE8
muhQs6HDdtEqYpimiGhgBRgnMgbit0dN4jn2U7x0Z+TXbOOJHSN7WGDj5Cm12Dw8
dG1lxJQxNCJuqV/E7Mw6L6Q7KDxiY3hqUeR1wcIE7lgtzhgoFBWv2P0KCyiH3VB/
N9pdArD1KgMyvF7gUZ9jCsrsovOoCfxj8EQ2acgELHDnKA9pfwE8dX5N5iIb8AoE
qoTa3AOG8Vk=
-----END CERTIFICATE-----
`;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(9);

// ----------------------

// GraphQL can handle Promises from its `resolve()` calls, so we'll create a
// simple async function that returns a simple message.  In practice, `resolve()`
// will generally pull from a 'real' data source such as a database
async function getMessage() {
  return {
    text: `Hello from the GraphQL server @ ${new Date()}`
  };
}

// Message type.  Imagine this like static type hinting on the 'message'
// object we're going to throw back to the user
// Schema for sample GraphQL server.

// ----------------------
// IMPORTS

// GraphQL schema library, for building our GraphQL schema
const Message = new _graphql.GraphQLObjectType({
  name: 'Message',
  description: 'GraphQL server message',
  fields() {
    return {
      text: {
        type: _graphql.GraphQLString,
        resolve(msg) {
          return msg.text;
        }
      }
    };
  }
});

// Root query.  This is our 'public API'.
const Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields() {
    return {
      message: {
        type: Message,
        resolve() {
          return getMessage();
        }
      }
    };
  }
});

// The resulting schema.  We insert our 'root' `Query` object, to tell our
// GraphQL server what to respond to.  We could also add a root `mutation`
// if we want to pass mutation queries that have side-effects (e.g. like HTTP POST)
exports.default = new _graphql.GraphQLSchema({
  query: Query
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Along with the default Apollo store,
we can define custom reducers using `kit/config.addReducer()` which will
be available on the server and in the browser.

Store state is wrapped by `seamless-immutable` to enforce a pattern of
immutability, to prevent weird side effects.
*/

// ----------------------
// IMPORTS

/* NPM */


/* Local */


exports.default = createNewStore;

var _redux = __webpack_require__(63);

var _reduxThunk = __webpack_require__(64);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(65);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind(reducer = true) {
  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  const r = Object.assign({}, ...[].concat([..._config2.default.reducers].map(arr => ({
    [arr[0]]: reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState
  }))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: (0, _seamlessImmutable2.default)(hasState && window.__STATE__[key] || r[key])
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, scripts, window, css, children }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement(
      'div',
      { id: 'main' },
      children
    ),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Html;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getNetworkInterface = getNetworkInterface;
exports.browserClient = browserClient;

var _reactApollo = __webpack_require__(5);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _env = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults


/* ReactQL */

// Configuration
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo
  }, _config2.default.apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware


// Get environment, to figure out where we're running the GraphQL server
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
function getNetworkInterface(uri) {
  const networkInterface = (0, _reactApollo.createNetworkInterface)({
    uri,
    opts: _config2.default.apolloNetworkOptions
  });

  // Attach middleware
  networkInterface.use(_config2.default.apolloMiddleware.map(f => ({ applyMiddleware: f })));
  networkInterface.useAfter(_config2.default.apolloAfterware.map(f => ({ applyAfterware: f })));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = _config2.default.graphQLServer ? `${(0, _env.getServerURL)()}${_config2.default.graphQLEndpoint}` : _config2.default.graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(69);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = currentHashtagReducer;
function currentHashtagReducer(state, action) {
    if (action.type === 'UPDATE_CURRENT_HASHTAG') {
        return state.merge({
            currentHashtag: action.currentHashtag
        });
    }
    return state;
}

/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map