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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCurrentHashtagName = setCurrentHashtagName;
function setCurrentHashtagName(hashtagName) {
    return {
        type: 'SET_CURRENT_HASHTAG_NAME',
        hashtagName
    };
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"bumpButton": "bumpButton-28LWxXFSiz4-fz6t7Y7Zj_",
	"hashbump": "hashbump-2zwODwJ9mdtmsmwCp7FamT",
	"autocompleteRenderHighlightedItem": "autocompleteRenderHighlightedItem-gH0fYDnSx0RYJVa2rotcS",
	"autocompleteRenderItem": "autocompleteRenderItem-3367xYX9MqO9x39CVojAAQ",
	"hashtag": "hashtag-33Kk32V-tY0FXvyPkC-BYk",
	"buttonAndDisplayContainer": "buttonAndDisplayContainer-3viTRwGFZCsBlW3tMpx30o"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeData = mergeData;
exports.browserClient = browserClient;
exports.serverClient = serverClient;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(1);

var _project = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.


// Apollo client library
const networkInterface = (0, _reactApollo.createNetworkInterface)({
  uri: _project.APOLLO.uri
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults


// Custom configuration/settings
// ----------------------
// IMPORTS

// React propTypes
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
    networkInterface
  }, opt));
}

// Helper function that will merge a passed object with the expected
// React propTypes 'shape', for use with the `react-apollo` `graphql` HOC
function mergeData(toMerge) {
  return _propTypes2.default.shape(Object.assign({
    loading: _propTypes2.default.bool.isRequired
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = getHost;
exports.getServerHost = getServerHost;
exports.getBrowserHost = getBrowserHost;
exports.getPort = getPort;
exports.getBrowserPort = getBrowserPort;
exports.getServerPort = getServerPort;
exports.getURL = getURL;
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
const defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
const defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
const isProduction = "development" === 'production';
const isServer = "boolean" !== 'undefined' && true;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return `${isServer ? 'SERVER' : 'BROWSER'}_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get browser stub
function getBrowserStub() {
  return `BROWSER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get server stub
function getServerStub() {
  return `SERVER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[`${getStub()}_HOST`] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[`${getServerStub()}_HOST`] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[`${getBrowserStub()}_HOST`] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  const port = process.env[`${getStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  const port = process.env[`${getBrowserStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  const port = process.env[`${getServerStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  return `http://${getHost()}:${getPort()}`;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                    value: true
});

exports.default = key => {

                    const lookupList = { yay: "../hashbump-yay.svg",
                                        grrr: "../hashbump-grrr.svg",
                                        dunno: "../hashbump-dunno.svg",
                                        meh: "../hashbump-meh.svg" };

                    return lookupList[key];
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(10);

var _chalk2 = _interopRequireDefault(_chalk);

var _env = __webpack_require__(8);

var _console = __webpack_require__(18);

var _server = __webpack_require__(17);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Host and port -- from the environment


// Import console messages
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library
const HOST = (0, _env.getHost)();

// Extend the server base


/* Local */

// Local environment

const PORT = (0, _env.getPort)();

// Get manifest values
const css = '/assets/css/style.css';
const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the server
_server2.default.then(({ router, app }) => {
  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  app.listen({ host: HOST, port: PORT }, () => {
    (0, _console.logServerStarted)({
      type: 'server-side rendering',
      host: HOST,
      port: PORT,
      chalk: _chalk2.default.bgYellow.black
    });
  });
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(44);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APOLLO = undefined;

var _env = __webpack_require__(8);

// ----------------------

const APOLLO = exports.APOLLO = {
  uri: `http://${(0, _env.getServerHost)()}:${(0, _env.getServerPort)()}/graphql`
}; /* eslint-disable import/prefer-default-export */

// ----------------------
// IMPORTS

/* Local */

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

__webpack_require__(35);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(46);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(37);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(1);

var _koaSend = __webpack_require__(41);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(39);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(40);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(43);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(47);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _kcors = __webpack_require__(36);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaBodyparser = __webpack_require__(38);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _graphqlServerKoa = __webpack_require__(33);

var _schema = __webpack_require__(22);

var _schema2 = _interopRequireDefault(_schema);

var _apollo = __webpack_require__(7);

var _redux = __webpack_require__(20);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(23);

var _ssr2 = _interopRequireDefault(_ssr);

var _app = __webpack_require__(24);

var _app2 = _interopRequireDefault(_app);

var _paths = __webpack_require__(15);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Static file middleware


// App entry point


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


/* Local */

// Get the GraphQL schema that we're attaching to our GraphQL server


// Parse the body of a POST request


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)
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

/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work
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


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Initial view to send back HTML render


// Grab the shared Apollo Client


// Apollo server for Koa, and GraphiQL query manager


// Allow requests from anywhere


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Create a new server Apollo client for this request
    const client = (0, _apollo.serverClient)();

    // Create a new Redux store for this request
    const store = (0, _redux2.default)(client);

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: store, client: client },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Full React HTML render
    const html = _server2.default.renderToString(components);

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
      // By default, just set the status code to 404.  You can add your
      // own custom logic here, if you want to redirect to a permanent
      // 404 route or set a different response on `ctx.body`
      ctx.status = routeContext.status;
    }

    // Render the view with our injected React data.  We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    ctx.body = `<!DOCTYPE html>\n${_server2.default.renderToStaticMarkup(_react2.default.createElement(_ssr2.default, {
      html: html,
      head: _reactHelmet2.default.rewind(),
      window: {
        webpackManifest: chunkManifest,
        __STATE__: store.getState()
      },
      css: css,
      scripts: scripts }))}`;
  };
}

// Run the server

exports.default = async function server() {
  return {
    router: new _koaRouter2.default().
    // Set-up a general purpose /ping route to check the server is alive
    get('/ping', async ctx => {
      ctx.body = 'pong';
    }

    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    ).get('/favicon.ico', async ctx => {
      ctx.res.statusCode = 204;
    }

    // Attach our GraphQL server endpoint
    ).post('/graphql', (0, _graphqlServerKoa.graphqlKoa)({ schema: _schema2.default })

    // Add the GraphiQL query manager
    ).get('/graphql', (0, _graphqlServerKoa.graphiqlKoa)({ endpointURL: '/graphql' })),
    app: new _koa2.default()

    // Enable cross-origin requests
    .use((0, _kcors2.default)()

    // Preliminary security for HTTP headers
    ).use((0, _koaHelmet2.default)()

    // Error wrapper.  If an error manages to slip through the middleware
    // chain, it will be caught and logged back here
    ).use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        // TODO we've used rudimentary console logging here.  In your own
        // app, I'd recommend you implement third-party logging so you can
        // capture errors properly
        console.log('Error', e.message);
        ctx.body = 'There was an error. Please try again later.';
      }
    }

    // It's useful to see how long a request takes to respond.  Add the
    // timing to a HTTP Response header
    ).use(async (ctx, next) => {
      const start = _microseconds2.default.now();
      await next();
      const end = _microseconds2.default.parse(_microseconds2.default.since(start));
      const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
      ctx.set('Response-Time', `${total / 1e3}ms`);
    }

    // Parse the HTTP body
    ).use((0, _koaBodyparser2.default)())
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(30);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(10);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(34);

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Chalk library, to add colour to our console logs
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);

  const localURL = `http://${opt.host}:${opt.port}`;
  message += `- ${_chalk2.default.bold('Local:           ')} ${localURL}`;

  try {
    const url = `http://${_ip2.default.address()}:${opt.port}`;
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = __webpack_require__(13);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _faker = __webpack_require__(31);

var _faker2 = _interopRequireDefault(_faker);

var _lodash = __webpack_require__(42);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Conn = new _sequelize2.default('whitesands', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});

const Hashtag = Conn.define('hashtag', {
  name: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  yayCount: {
    type: _sequelize2.default.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  grrrCount: {
    type: _sequelize2.default.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  dunnoCount: {
    type: _sequelize2.default.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  mehCount: {
    type: _sequelize2.default.BIGINT,
    allowNull: false,
    defaultValue: 0
  }
});

// Conn.sync({ force: true }).then(()=> {
//   _.times(1000, ()=> {
//     return Hashtag.create({
//       name: `${Faker.commerce.productName()}`.replace(/ /g, "").toLowerCase(),
//       yayCount: 0,
//       grrrCount: 0,
//       dunnoCount: 0,
//       mehCount: 0
//     })
//   });
// });

exports.default = Conn;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createNewStore;

var _redux = __webpack_require__(48);

var _reducers = __webpack_require__(28);

// ----------------------

/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS
function createNewStore(apolloClient) {
    const store = (0, _redux.createStore)(
    // By default, we'll use just the apollo reducer.  We can easily add our
    // own here, for global store management outside of Apollo
    (0, _redux.combineReducers)({
        apollo: apolloClient.reducer(),
        currentHashtagName: _reducers.currentHashtagName
    }),
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object
    // eslint-disable-next-line no-underscore-dangle
     false ? window.__STATE__ : {}, // initial state
    (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware()),
    // Enable Redux Devtools on the browser, for easy state debugging
    // eslint-disable-next-line no-underscore-dangle
     false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

    return store;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(12);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(32);

var _db = __webpack_require__(19);

var _db2 = _interopRequireDefault(_db);

var _sequelize = __webpack_require__(13);

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hashtag = new _graphql.GraphQLObjectType({
  name: 'Hashtag',
  description: 'This represents a Hashtag',
  fields: () => {
    return {
      name: {
        type: _graphql.GraphQLString,
        resolve(hashtag) {
          return hashtag.name;
        }
      },
      yayCount: {
        type: _graphql.GraphQLInt,
        resolve(hashtag) {
          return hashtag.yayCount;
        }
      },
      grrrCount: {
        type: _graphql.GraphQLInt,
        resolve(hashtag) {
          return hashtag.grrrCount;
        }
      },
      dunnoCount: {
        type: _graphql.GraphQLInt,
        resolve(hashtag) {
          return hashtag.dunnoCount;
        }
      },
      mehCount: {
        type: _graphql.GraphQLInt,
        resolve(hashtag) {
          return hashtag.mehCount;
        }
      }
    };
  }
});

const TopCount = new _graphql.GraphQLObjectType({
  name: 'TopCount',
  description: 'This represents a TopCount.',
  fields: () => {
    return {
      name: {
        type: _graphql.GraphQLString,
        resolve(topcount) {
          return topcount.name;
        }
      },
      count: {
        type: _graphql.GraphQLInt,
        resolve(topcount) {
          return topcount.count;
        }
      }
    };
  }
});

const Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields() {
    return {
      hashtags: {
        type: new _graphql.GraphQLList(Hashtag),
        args: {
          name: {
            type: _graphql.GraphQLString
          },
          yayCount: {
            type: _graphql.GraphQLInt
          },
          grrrCount: {
            type: _graphql.GraphQLInt
          },
          dunnoCount: {
            type: _graphql.GraphQLInt
          },
          mehCount: {
            type: _graphql.GraphQLInt
          }
        },
        resolve(root, args) {
          return _db2.default.models.hashtag.findAll({ where: args });
        }
      },
      hashtag: {
        type: Hashtag,
        args: {
          name: {
            type: _graphql.GraphQLString
          }
        },
        resolve(root, args) {
          return _db2.default.models.hashtag.findOne({ where: args });
        }
      },
      topCount: {
        type: TopCount,
        args: {
          bump: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          },
          topCountType: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          }
        },
        resolve(root, args) {
          let topCountQueryString = `select "name", "${args.bump}Count" as "count" from hashtags order by "${args.bump}Count" desc LIMIT 1;`;

          if (args.topCountType == "today") {
            topCountQueryString = `select "name", "${args.bump}Count" as "count" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "${args.bump}Count" desc LIMIT 1;`;
          }
          return _db2.default.query(topCountQueryString, { type: _sequelize2.default.QueryTypes.SELECT }).spread(results => {
            return results;
          });
        }
      },
      suggestions: {
        type: new _graphql.GraphQLList(_graphql.GraphQLString),
        args: {
          partialHashtag: {
            type: _graphql.GraphQLString
          }
        },
        resolve(root, args) {
          const suggestionsUrl = `http://localhost:8983/solr/hashbump/suggest?suggest=true&suggest.dictionary=analyzedSuggestion&wt=json&suggest.q=${args.partialHashtag}`;
          const suggestions = fetch(suggestionsUrl).then(res => res.text());

          return [suggestions];
        }
      }
    };
  }
});

const Mutation = new _graphql.GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields() {
    return {
      addHashtag: {
        type: Hashtag,
        args: {
          name: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          }
        },
        resolve(source, args) {
          return _db2.default.models.hashtag.create({
            name: args.name
          });
        }
      },
      bumpHashtag: {
        type: Hashtag,
        args: {
          name: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          },
          bump: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
          }
        },
        resolve(source, args) {
          return _db2.default.models.hashtag.findOne({ where: { name: args.name } }).then(hashtag => {
            return hashtag.increment([`${args.bump}Count`], { by: 1 });
          });
        }
      }
    };
  }
});

const Schema = new _graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation
});

exports.default = Schema;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, html, scripts, window, css }) => _react2.default.createElement(
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
    _react2.default.createElement('div', {
      id: 'main',
      dangerouslySetInnerHTML: { __html: html } }),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  html: _propTypes2.default.string.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired
};

exports.default = Html;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(12);

var _reactHelmet = __webpack_require__(11);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apollo = __webpack_require__(7);

var _routing = __webpack_require__(21);

var _hashbump = __webpack_require__(4);

var _hashbump2 = _interopRequireDefault(_hashbump);

var _hashbumpLogo = __webpack_require__(29);

var _hashbumpLogo2 = _interopRequireDefault(_hashbumpLogo);

var _reactRedux = __webpack_require__(6);

var _actions = __webpack_require__(3);

var _bumpButton = __webpack_require__(25);

var _bumpButton2 = _interopRequireDefault(_bumpButton);

var _hashtagAutocomplete = __webpack_require__(27);

var _hashtagAutocomplete2 = _interopRequireDefault(_hashtagAutocomplete);

var _bumpDisplay = __webpack_require__(26);

var _bumpDisplay2 = _interopRequireDefault(_bumpDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name


// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/


// NotFound 404 handler for unknown routes


// <Helmet> component for setting the page title


// GraphQL
// ----------------------
// IMPORTS

// React
let App = class App extends _react.Component {

    render() {
        return _react2.default.createElement(
            'div',
            { className: _hashbump2.default.hashbump },
            _react2.default.createElement(_reactHelmet2.default, {
                title: 'hashbump',
                meta: [{
                    name: 'description',
                    content: 'bump that hashtag'
                }] }),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: _hashbumpLogo2.default, alt: 'hashbump' })
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
                'div',
                { style: { height: "30vh" } },
                _react2.default.createElement(
                    'div',
                    { style: { float: "left", width: "50%" } },
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'yay', topCountType: 'all-time' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'grrr', topCountType: 'all-time' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'dunno', topCountType: 'all-time' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'meh', topCountType: 'all-time' })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { float: "right", width: "50%" } },
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'yay', topCountType: 'today' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'grrr', topCountType: 'today' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'dunno', topCountType: 'today' }),
                    _react2.default.createElement(_bumpDisplay2.default, { bump: 'meh', topCountType: 'today' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: _hashbump2.default.buttonAndDisplayContainer },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('div', { className: _hashbump2.default.hashtag }),
                    _react2.default.createElement(_hashtagAutocomplete2.default, null)
                ),
                _react2.default.createElement(_bumpButton2.default, { bump: 'yay' }),
                _react2.default.createElement(_bumpButton2.default, { bump: 'grrr' }),
                _react2.default.createElement(_bumpButton2.default, { bump: 'dunno' }),
                _react2.default.createElement(_bumpButton2.default, { bump: 'meh' })
            )
        );
    }
};

// Styles
// import './styles.global.css';
// import css from './styles.css';
// import sass from './styles.scss';
// import less from './styles.less';


// Helper to merge expected React PropTypes to Apollo-enabled component


// Routing

exports.default = App;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(1);

var _reactRedux = __webpack_require__(6);

var _actions = __webpack_require__(3);

var _imageLookup = __webpack_require__(9);

var _imageLookup2 = _interopRequireDefault(_imageLookup);

var _hashbump = __webpack_require__(4);

var _hashbump2 = _interopRequireDefault(_hashbump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hashtagQuery = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query hashtag($name: String!) {
    hashtag(name: $name) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`, {
    data: "hashtag",
    name: "hashtagQuery",
    options: {
        variables: { name: "" }
    }
});

const bumpHashtagMutation = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {
    bumpHashtag(name: $currentHashtag, bump: $bump) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`, {
    name: "bumpHashtagMutation"
});

const addHashtagMutation = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation addHashtag($currentHashtag: String!) {
    addHashtag(name: $currentHashtag) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`, {
    name: "addHashtagMutation"
});

let BumpButton = class BumpButton extends _react2.default.PureComponent {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const hashtagQuery = this.props.hashtagQuery;
        const bumpHashtagMutation = this.props.bumpHashtagMutation;
        const addHashtagMutation = this.props.addHashtagMutation;
        const topCountQuery = this.props.topCountQuery;

        hashtagQuery.refetch({ name: this.props.currentHashtagName }).then(dataObject => {
            if (!dataObject.data.hashtag) {
                addHashtagMutation({ variables: { currentHashtag: this.props.currentHashtagName } }).then(hashtag => {
                    bumpHashtagMutation({ variables: { currentHashtag: this.props.currentHashtagName, bump: this.props.bump } }).then(() => {
                        hashtagQuery.refetch({ name: this.props.currentHashtagName });
                    });
                });
            } else {
                bumpHashtagMutation({ variables: { currentHashtag: this.props.currentHashtagName, bump: this.props.bump } }).then(() => {
                    hashtagQuery.refetch({ name: this.props.currentHashtagName });
                });
            }
        });
    }

    componentWillUpdate() {
        const hashtagQuery = this.props.hashtagQuery;

        hashtagQuery.refetch({ name: this.props.currentHashtagName });
    }

    render() {
        let count = 0;

        if (this.props.hashtagQuery.hashtag) {

            count = this.props.hashtagQuery.hashtag[`${this.props.bump}Count`];
        }

        return _react2.default.createElement(
            'button',
            { className: _hashbump2.default.bumpButton },
            _react2.default.createElement(
                'h1',
                null,
                count
            ),
            _react2.default.createElement('img', { src: (0, _imageLookup2.default)(this.props.bump), onClick: this.handleClick })
        );
    }
};
exports.default = (0, _reactApollo.compose)((0, _reactRedux.connect)(state => ({ currentHashtagName: state.currentHashtagName })), hashtagQuery, bumpHashtagMutation, addHashtagMutation)(BumpButton);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(1);

var _imageLookup = __webpack_require__(9);

var _imageLookup2 = _interopRequireDefault(_imageLookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const topCountQuery = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query topCount($bump: String!, $topCountType: String!) {
    topCount(bump: $bump, topCountType: $topCountType) {
      name
      count
    }
  }
`, {
    data: "topCount",
    name: "topCountQuery"
});

let BumpDisplay = class BumpDisplay extends _react2.default.PureComponent {
    render() {
        if (this.props.topCountQuery.loading) {
            return _react2.default.createElement(
                'div',
                null,
                'loading...'
            );
        } else {
            return _react2.default.createElement(
                'div',
                { style: { height: "5vh", width: "100vw" } },
                _react2.default.createElement(
                    'svg',
                    { version: '1.1', style: { height: "100%" }, viewBox: '0 0 96 96' },
                    _react2.default.createElement(
                        'g',
                        { id: 'yay', display: this.props.bump == "yay" ? "inline-block" : "none" },
                        _react2.default.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement(
                            'g',
                            null,
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement('path', { d: 'M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z', style: { fill: "#8845AD" } })
                            ),
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement('path', { d: 'M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z', style: { fill: "#8845AD" } })
                            )
                        ),
                        _react2.default.createElement('path', { d: 'M72.594,60.545 C60.612,84.509 36.3,84.494 24.486,60.525', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } })
                    ),
                    _react2.default.createElement(
                        'g',
                        { id: 'grrr', display: this.props.bump == "grrr" ? "inline-block" : "none" },
                        _react2.default.createElement('path', { d: 'M48.54,93.5 C23.687,93.5 3.54,73.353 3.54,48.5 C3.54,23.647 23.687,3.5 48.54,3.5 C73.393,3.5 93.54,23.647 93.54,48.5 C93.54,73.353 73.393,93.5 48.54,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M72.487,77.332 C84.376,46.657 12.746,46.391 24.497,77.291', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement(
                            'g',
                            null,
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M35.233,45.69 C30.814,45.69 25.607,33.807 25.607,29.388 C25.607,24.97 30.814,29.69 35.233,29.69 C39.651,29.69 43.233,33.272 43.233,37.69 C43.233,42.109 39.651,45.69 35.233,45.69 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement('path', { d: 'M35.29,43.621 C34.036,43.621 33.019,42.604 33.019,41.35 C33.019,40.097 34.036,39.08 35.29,39.08 C36.544,39.08 37.56,40.097 37.56,41.35 C37.56,42.604 36.544,43.621 35.29,43.621 z', style: { fill: "#8845AD" } })
                            ),
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M61.767,45.69 C66.186,45.69 71.393,33.807 71.393,29.388 C71.393,24.97 66.186,29.69 61.767,29.69 C57.349,29.69 53.767,33.272 53.767,37.69 C53.767,42.109 57.349,45.69 61.767,45.69 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement('path', { d: 'M60.71,43.621 C61.964,43.621 62.981,42.604 62.981,41.35 C62.981,40.097 61.964,39.08 60.71,39.08 C59.456,39.08 58.44,40.097 58.44,41.35 C58.44,42.604 59.456,43.621 60.71,43.621 z', style: { fill: "#8845AD" } })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'g',
                        { id: 'dunno', display: this.props.bump == "dunno" ? "inline-block" : "none" },
                        _react2.default.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M55.789,72.839 C55.949,62.268 25.613,68.799 25.899,55.218', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 36.884,34.521 36.884,38.939 C36.884,43.358 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M21.254,34.54 C19.321,34.54 17.754,32.973 17.754,31.04 C17.754,29.107 19.321,27.54 21.254,27.54 C23.187,27.54 24.754,29.107 24.754,31.04 C24.754,32.973 23.187,34.54 21.254,34.54 z', style: { fill: "#8845AD" } }),
                        _react2.default.createElement('path', { d: 'M67.136,40.5 C62.718,40.5 59.136,36.918 59.136,32.5 C59.136,28.082 62.718,24.5 67.136,24.5 C71.555,24.5 79.521,34.521 79.521,38.939 C79.521,43.358 71.555,40.5 67.136,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M63.891,34.54 C61.958,34.54 60.391,32.973 60.391,31.04 C60.391,29.107 61.958,27.54 63.891,27.54 C65.824,27.54 67.391,29.107 67.391,31.04 C67.391,32.973 65.824,34.54 63.891,34.54 z', style: { fill: "#8845AD" } })
                    ),
                    _react2.default.createElement(
                        'g',
                        { id: 'meh', display: this.props.bump == "meh" ? "inline-block" : "none" },
                        _react2.default.createElement('path', { d: 'M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement('path', { d: 'M70.681,59.458 C66.551,61.225 24.128,58.624 21.955,58.867', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                        _react2.default.createElement(
                            'g',
                            null,
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M30.918,29.723 L18.082,29.56', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement(
                                    'g',
                                    null,
                                    _react2.default.createElement('path', { d: 'M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    _react2.default.createElement('path', { d: 'M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z', style: { fill: "#8845AD" } })
                                )
                            ),
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M78.918,29.723 L66.082,29.56', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                _react2.default.createElement(
                                    'g',
                                    null,
                                    _react2.default.createElement('path', { d: 'M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z', style: { fillOpacity: "0", stroke: "#8845AD", strokeWidth: "5" } }),
                                    _react2.default.createElement('path', { d: 'M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z', style: { fill: "#8845AD" } })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
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
};
exports.default = (0, _reactApollo.compose)(topCountQuery)(BumpDisplay);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = __webpack_require__(5);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(1);

var _reactRedux = __webpack_require__(6);

var _actions = __webpack_require__(3);

var _reactAutocomplete = __webpack_require__(45);

var _reactAutocomplete2 = _interopRequireDefault(_reactAutocomplete);

var _hashbump = __webpack_require__(4);

var _hashbump2 = _interopRequireDefault(_hashbump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const suggestionsQuery = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query suggestions($partialHashtag: String!) {
    suggestions(partialHashtag: $partialHashtag)
  }
`, {
    name: "suggestionsQuery",
    options: {
        variables: { partialHashtag: "!" }
    }
});

const hashtagQuery = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query hashtag($name: String!) {
    hashtag(name: $name) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`, {
    name: "hashtagQuery",
    options: {
        variables: { name: "" }
    }
});

const addHashtagMutation = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation addHashtag($name: String!) {
    addHashtag(name: $name) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`);

let HashtagAutocomplete = class HashtagAutocomplete extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: [] };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGetItemValue = this.handleGetItemValue.bind(this);
        this.handleRenderItem = this.handleRenderItem.bind(this);
    }

    handleRenderItem(item, isHighlighted) {
        return _react2.default.createElement(
            'div',
            { className: isHighlighted ? _hashbump2.default.autocompleteRenderHighlightedItem : _hashbump2.default.autocompleteRenderItem },
            item.term
        );
    }

    handleGetItemValue(item) {
        return item.term;
    }

    handleChange(event) {
        const suggestionsQuery = this.props.suggestionsQuery;
        const hashtagQuery = this.props.hashtagQuery;
        const currentHashtagName = event.target.value;

        this.props.dispatch((0, _actions.setCurrentHashtagName)(currentHashtagName));
        this.setState({ value: currentHashtagName, items: this.state.items });

        suggestionsQuery.refetch({ partialHashtag: currentHashtagName }).then(dataObject => {
            const suggestions = JSON.parse(dataObject.data.suggestions[0]).suggest.analyzedSuggestion[`${currentHashtagName}`].suggestions;

            hashtagQuery.refetch({ name: currentHashtagName }).then(dataObject => {
                if (dataObject.data.hashtag) {
                    this.props.dispatch((0, _actions.setCurrentHashtagName)(dataObject.data.hashtag.name));
                } else {
                    this.props.dispatch((0, _actions.setCurrentHashtagName)(currentHashtagName));
                }
                this.setState({ items: suggestions });
            });
        });
    }

    handleSelect(val) {
        const hashtagQuery = this.props.hashtagQuery;

        hashtagQuery.refetch({ name: val }).then(dataObject => {
            if (dataObject.data.hashtag) {
                this.props.dispatch((0, _actions.setCurrentHashtagName)(dataObject.data.hashtag.name));
            } else {
                this.props.dispatch((0, _actions.setCurrentHashtagName)(val));
            }
        });
        this.setState({ value: val });
    }

    render() {

        return _react2.default.createElement(_reactAutocomplete2.default, {
            getItemValue: this.handleGetItemValue,
            renderItem: this.handleRenderItem,
            items: this.state.items,
            value: this.state.value,
            onChange: this.handleChange,
            onSelect: this.handleSelect,
            inputProps: {
                size: "30"
            },
            wrapperStyle: {
                display: "inline-block"
            },
            menuStyle: {
                background: "#e4be45",
                position: "fixed"
            }
        });
    }
};
exports.default = (0, _reactApollo.compose)((0, _reactRedux.connect)(), hashtagQuery, suggestionsQuery, addHashtagMutation)(HashtagAutocomplete);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.currentHashtagName = currentHashtagName;
function currentHashtagName(state = "", action) {
    switch (action.type) {
        case 'SET_CURRENT_HASHTAG_NAME':
            return action.hashtagName;
        default:
            return state;
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hashbump-logo-2.1d23e4579aaf0aaa22df9d983cce6923.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("graphql-server-koa");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-autocomplete");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map