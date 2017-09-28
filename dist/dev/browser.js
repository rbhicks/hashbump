webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_app__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_webfontloader__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_webfontloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_webfontloader__);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

/* NPM */

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


/* ReactQL */

// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code.  Note:  This first is imported
// first, since it sets up our app's settings


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// ----------------------

// Create a new browser Apollo client
var client = Object(__WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = Object(__WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.hydrate(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
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
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_app__["a" /* default */], null)
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



__WEBPACK_IMPORTED_MODULE_9_webfontloader___default.a.load({
  google: {
    families: ['Fira Sans', 'sans-serif']
  }
});

doRender();

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_reducers_counter__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_reducers_suggestionsReducer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_reducers_valueReducer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_main__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_global_css__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_global_css__);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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


/* App */

// Example counter reducer.  This simply increments the counter by +1





// Main component -- i.e. the 'root' React component in our app


// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


// ----------------------

/* REDUCERS */

// Add our custom `counter` reducer, with the initial state as a zero count.
// Note:  The initial state (3rd param) will automatically be wrapped in
// `seamless-immutable` by the kit's Redux init code, so plain objects are
// automatically immutable by default
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('counter', __WEBPACK_IMPORTED_MODULE_1_src_reducers_counter__["a" /* default */], { count: 0 });

__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('suggestions', __WEBPACK_IMPORTED_MODULE_2_src_reducers_suggestionsReducer__["a" /* default */], { suggestions: null });
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('value', __WEBPACK_IMPORTED_MODULE_3_src_reducers_valueReducer__["a" /* default */], { value: '' });

/* GRAPHQL */

// Enable the internal GraphQL server.  This will do two things:
//
// 1.  On the server, it will set-up the necessary route handlers to 'listen'
// to incoming GraphQL requests on `/graphql`, as well as (by default) set-up
// the GraphiQL IDE
//
// 2.  On the client, it will append the correct server URL so that we can
// call the ReactQL host properly, and let the server handle our requests
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].enableGraphQLServer();

/* SERVER */

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (false) {
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

  var cert = require('src/cert/self_signed');
  config.enableSSL({ key: cert.key, cert: cert.cert });

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
  config.setGraphQLSchema(require('src/graphql/schema').default);

  /* CUSTOM ROUTES */

  // We can add custom routes to the web server easily, by using
  // `config.add<Get|Post|Put|Patch>Route()`.  Note:  These are server routes only.
  config.addGetRoute('/test', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
      var stateDump;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // For demo purposes, let's get a JSON dump of the current Redux state
              // to see that we can expect its contents
              stateDump = JSON.stringify(ctx.store.getState());

              // Display a simple message, along with the Redux dump.  Note that this
              // won't contain a full `apollo` response, because it hasn't passed through
              // the React handler -- but it *does* mean we can still manipulate the state
              // from within our root, or fire action handlers!

              ctx.body = 'Hello from your ReactQL route. Redux dump: ' + stateDump;

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  /* CUSTOM 404 HANDLER */

  // By default, if the server gets a route request that results in a 404,
  // it will set `ctx.status = 404` but continue to render the <NotFound>
  // block as normal.  If we want to add our own custom handler, we can use
  // `config.set404Handler()` as below.
  //
  // Note:  This only applies to SERVER routes.  On the client, the
  // <NotFound> block will *always* run.

  config.set404Handler(function (ctx) {
    // Like above, we'll grab a dump of the store state again -- this time,
    // it *will* contain a full `apollo` dump because in order to figure out that
    // a route has hit a 404, it will already have rendered the React chain
    // and retrieved any relevant GraphQL
    var stateDump = JSON.stringify(ctx.store.getState());

    // Explicitly set the return status to 404.  This is done for us by
    // default if we don't have a custom 404 handler, but left to the function
    // otherwise (since we might not always want to return a 404)
    ctx.status = 404;

    // Set the body
    ctx.body = 'This route does not exist on the server - Redux dump: ' + stateDump;
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
  config.setErrorHandler(function (e, ctx /* `next` is unused in this example */) {
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
  config.getKoaApp(function (app) {
    // First, we'll add a new `engine` key to the app.context`
    // prototype (that per-request `ctx` extends) that can be
    // used in the middleware below, to set a `Powered-By` header.
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';

    // We'll also add a generic error handler, that prints out to the console.
    // Note: This is a 'lower-level' than `config.setErrorHandler()` because
    // it's not middleware -- it's for errors that happen at the server level
    app.on('error', function (e) {
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
  config.addMiddleware(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Let's add a custom header so we can see middleware in action
              ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!

              // For the fun of it, let's demonstrate that we can fire Redux actions
              // and it'll manipulate the state on the server side!  View the SSR version
              // to see that the counter is now 1 and has been passed down the wire
              ctx.store.dispatch({ type: 'INCREMENT_COUNTER' });

              // Always return `next()`, otherwise the request won't 'pass' to the next
              // middleware in the stack (likely, the React handler)
              return _context2.abrupt('return', next());

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
}

// In app.js, we need to export the root component we want to mount as the
// starting point to our app.  We'll just export the `<Main>` component.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_src_components_main__["a" /* default */]);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = suggestionsReducer;


function suggestionsReducer(state, action) {
    if (action.type === 'UPDATE_SUGGESTIONS') {
        return state.merge({
            suggestions: action.suggestions
        });
    }
    return state;
}

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valueReducer;


function valueReducer(state, action) {
    if (action.type === 'UPDATE_VALUE') {
        return state.merge({
            value: action.value
        });
    }
    return state;
}

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_lib_routing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_graphql__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_routes__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_redux__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_stats__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_styles__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_HashbumpContainer_js__ = __webpack_require__(229);
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


// Routing via React Router


// <Helmet> component for setting the page title/meta tags


/* ReactQL */

// NotFound 404 handler for unknown routes


/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so






// // Styles
// import css from './main.scss';

// // Get the ReactQL logo.  This is a local .svg file, which will be made
// // available as a string relative to [root]/dist/assets/img/
// import logo from './reactql-logo.svg';




// ----------------------

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_src_components_HashbumpContainer_js__["a" /* default */], null);
});

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_messages_gql__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_messages_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_messages_gql__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Now, let's create a GraphQL-enabled component...

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


// ----------------------

// Since this component needs to 'listen' to GraphQL data, we wrap it in
// `react-apollo`'s `graphql` HOC/decorator and pass in the query that this
// component requires.   Note: This is not to be confused with the `graphql`
// lib, which is used on the server-side to initially define the schema
var GraphQLMessage = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_src_graphql_queries_all_messages_gql___default.a), _dec(_class = function (_React$PureComponent) {
  _inherits(GraphQLMessage, _React$PureComponent);

  function GraphQLMessage() {
    _classCallCheck(this, GraphQLMessage);

    return _possibleConstructorReturn(this, (GraphQLMessage.__proto__ || Object.getPrototypeOf(GraphQLMessage)).apply(this, arguments));
  }

  _createClass(GraphQLMessage, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      // Since we're dealing with async GraphQL data, we defend against the
      // data not yet being loaded by checking to see that we have the `message`
      // key on our returned object

      var message = data.message && data.message.text;

      // Apollo will tell us whether we're still loading.  We can also use this
      // check to ensure we have a fully returned response
      var isLoading = data.loading ? 'yes' : 'nope';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Message from GraphQL server: ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'em',
            null,
            message
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Currently loading?: ',
          isLoading
        )
      );
    }
  }]);

  return GraphQLMessage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
GraphQLMessage.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
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


/***/ }),

/***/ 210:
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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(211).definitions));

module.exports = doc;

/***/ }),

/***/ 211:
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Home */
/* unused harmony export Page */
/* unused harmony export WhenNotFound */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__ = __webpack_require__(93);
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



/* ReactQL */

// NotFound 404 handler for unknown routes


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
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
var Page = function Page(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Changed route: ',
    match.params.name
  );
};

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

// Create a route that will be displayed when the code isn't found
var WhenNotFound = function WhenNotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__["a" /* NotFound */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Unknown route - the 404 handler was triggered!'
    )
  );
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(94);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component that demonstrates using a part of the Redux store
// outside of Apollo.  We can use config.addReducer(key, reducer) in `src/app.js`
// to add custom Redux reducers

// ----------------------
// IMPORTS

/* NPM */



// HOC/decorator to listen to Redux store state


// ----------------------

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
var ReduxCounter = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* connect */])(function (state) {
  return { counter: state.counter };
}), _dec(_class = function (_React$PureComponent) {
  _inherits(ReduxCounter, _React$PureComponent);

  function ReduxCounter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReduxCounter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReduxCounter.__proto__ || Object.getPrototypeOf(ReduxCounter)).call.apply(_ref, [this].concat(args))), _this), _this.triggerIncrement = function () {
      _this.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  _createClass(ReduxCounter, [{
    key: 'render',
    value: function render() {
      var count = this.props.counter.count;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Listening to Redux counter: ',
          count
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.triggerIncrement },
          'Increment'
        )
      );
    }
  }]);

  return ReduxCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
ReduxCounter.propTypes = {
  counter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  })
};
ReduxCounter.defaultProps = {
  counter: {
    count: 0
  } };


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_scss__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stats_scss__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Simple <Stats> component that displays our current environment.

// ----------------------
// IMPORTS

/* NPM */

// React


/* App */

// Styles


// ----------------------

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  // We can pull the environment from `process.env.NODE_ENV`, which is set
  // to either 'development' | 'production' on both the server and in the browser
  var info = [['Environment', "development"]];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_1__stats_scss___default.a.data },
    info.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

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
});

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"data":"data-1TlbpCj5FlrOdqUTJqH60F"};

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_less__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_less__);
// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */


/* App */

// Styles




// ----------------------

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.styleExamples },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.example },
      'Styled by CSS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.example },
      'Styled by SASS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_3__styles_less___default.a.example },
      'Styled by LESS'
    )
  );
});

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"styleExamples":"styleExamples-1odAJW6hJJkT1H4az7KebJ","example":"example-HDBhpRi1XOtosKy5rqCSL"};

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3x1WZ3q5Zomb6qbpAqayqQ"};

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-Qwu6EO0LZh1IVEfs-9zO_"};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashbumpContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_system__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rebass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_x_ray__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_x_ray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_x_ray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hashtags_js__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AutoSuggest_js__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TopHashtags_js__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Header_js__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BumpButton_js__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_js__ = __webpack_require__(291);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var HashbumpContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(function (state) {
    return { suggestions: state.suggestions,
        value: state.value };
}), _dec(_class = function (_Component) {
    _inherits(HashbumpContainer, _Component);

    function HashbumpContainer(props) {
        _classCallCheck(this, HashbumpContainer);

        var _this = _possibleConstructorReturn(this, (HashbumpContainer.__proto__ || Object.getPrototypeOf(HashbumpContainer)).call(this, props));

        _this.suggestionsHandler = _this.suggestionsHandler.bind(_this);
        _this.valueHandler = _this.valueHandler.bind(_this);
        return _this;
    }

    _createClass(HashbumpContainer, [{
        key: 'suggestionsHandler',
        value: function suggestionsHandler(suggestions) {
            this.props.dispatch({ type: 'UPDATE_SUGGESTIONS',
                suggestions: suggestions });
        }
    }, {
        key: 'valueHandler',
        value: function valueHandler(value) {
            var finalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.props.dispatch({ type: 'UPDATE_VALUE',
                value: value });

            if (!finalize) {
                if (value !== '') {
                    var loweredValue = value.toLowerCase();
                    var suggestions = __WEBPACK_IMPORTED_MODULE_6__hashtags_js__["a" /* default */].filter(function (hashtag) {
                        return hashtag.name.toLowerCase().startsWith(loweredValue);
                    });

                    this.suggestionsHandler(suggestions);
                } else {
                    this.suggestionsHandler(null);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var suggestions = this.props.suggestions.suggestions;
            var value = this.props.value.value;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_rebass__["Provider"],
                { theme: __WEBPACK_IMPORTED_MODULE_11__theme_js__["a" /* default */] },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"],
                    { align: 'center', justify: 'center' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_rebass__["Box"],
                        { width: [1, 1, 1 / 2], bg: __WEBPACK_IMPORTED_MODULE_11__theme_js__["b" /* hashbumpColorGold */] },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Header_js__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"],
                            { wrap: true },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TopHashtags_js__["a" /* default */], { title: 'Top Hashtags Ever',
                                topYay: '#anoctopusandamoose: 7',
                                topGrrr: '#anoctopusandamoose: 11',
                                topDunno: '#anoctopusandamoose: 13',
                                topMeh: '#anoctopusandamoose: 17' }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TopHashtags_js__["a" /* default */], { title: 'Top Hashtags This Week',
                                topYay: '#anoctopusandamoose: 17',
                                topGrrr: '#anoctopusandamoose: 13',
                                topDunno: '#anoctopusandamoose: 11',
                                topMeh: '#anoctopusandamoose: 7' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"],
                            { align: 'center', justify: 'center' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__AutoSuggest_js__["a" /* default */], {
                                suggestions: suggestions,
                                value: value,
                                suggestionsHandler: this.suggestionsHandler.bind(this),
                                valueHandler: this.valueHandler.bind(this)
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"],
                            { align: 'center', justify: 'center' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_4_rebass__["Box"],
                                { width: [1, 1 / 4, 1 / 3], ml: [1, 0, 0], mr: [1, 0, 0] },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_4_rebass__["Flex"],
                                    { align: 'center', justify: 'center' },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BumpButton_js__["a" /* default */], { bumpType: 'yay', buttonImageSource: __WEBPACK_IMPORTED_MODULE_11__theme_js__["a" /* default */].yaySvgSource, bumpCount: '17' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BumpButton_js__["a" /* default */], { bumpType: 'grrr', buttonImageSource: __WEBPACK_IMPORTED_MODULE_11__theme_js__["a" /* default */].grrrSvgSource, bumpCount: '17' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BumpButton_js__["a" /* default */], { bumpType: 'dunno', buttonImageSource: __WEBPACK_IMPORTED_MODULE_11__theme_js__["a" /* default */].dunnoSvgSource, bumpCount: '17' }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BumpButton_js__["a" /* default */], { bumpType: 'meh', buttonImageSource: __WEBPACK_IMPORTED_MODULE_11__theme_js__["a" /* default */].mehSvgSource, bumpCount: '17' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HashbumpContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var hashtags = [{ name: "love" }, { name: "TagsForLikes" }, { name: "TagsForLikesApp" }, { name: "TFLers" }, { name: "tweegram" }, { name: "photooftheday" }, { name: "20likes" }, { name: "amazing" }, { name: "smile" }, { name: "follow4follow" }, { name: "like4like" }, { name: "look" }, { name: "instalike" }, { name: "igers" }, { name: "picoftheday" }, { name: "food" }, { name: "instadaily" }, { name: "instafollow" }, { name: "followme" }, { name: "girl" }, { name: "iphoneonly" }, { name: "instagood" }, { name: "bestoftheday" }, { name: "instacool" }, { name: "instago" }, { name: "all_shots" }, { name: "follow" }, { name: "webstagram" }, { name: "colorful" }, { name: "style" }, { name: "swag" }, { name: "fun" }, { name: "instagramers" }, { name: "pretty" }, { name: "nature" }, { name: "lol" }, { name: "dog" }, { name: "hair" }, { name: "onedirection" }, { name: "sunset" }, { name: "throwbackthursday" }, { name: "beach" }, { name: "statigram" }, { name: "friends" }, { name: "hot" }, { name: "funny" }, { name: "blue" }, { name: "life" }, { name: "art" }, { name: "instahub" }, { name: "photo" }, { name: "cool" }, { name: "pink" }, { name: "clouds" }, { name: "textgram" }, { name: "family" }, { name: "igaddict" }, { name: "awesome" }, { name: "girls" }, { name: "my" }, { name: "bored" }, { name: "baby" }, { name: "music" }, { name: "red" }, { name: "green" }, { name: "water" }, { name: "harrystyles" }, { name: "black" }, { name: "party" }, { name: "white" }, { name: "yum" }, { name: "flower" }, { name: "2012" }, { name: "night" }, { name: "instalove" }, { name: "niallhoran" }, { name: "jj_forum" }, { name: "sky" }, { name: "sun" }, { name: "summer" }, { name: "beautiful" }, { name: "sunrise" }, { name: "flowers" }, { name: "tree" }, { name: "twilight" }, { name: "beauty" }, { name: "light" }, { name: "cloudporn" }, { name: "skylovers" }, { name: "dusk" }, { name: "weather" }, { name: "day" }, { name: "iphonesia" }, { name: "mothernature" }, { name: "ocean" }, { name: "lake" }, { name: "sand" }, { name: "reflection" }, { name: "shore" }, { name: "waterfoam" }, { name: "seashore" }, { name: "waves" }, { name: "wave" }, { name: "orange" }, { name: "skyporn" }, { name: "horizon" }, { name: "gorgeous" }, { name: "warm" }, { name: "view" }, { name: "morning" }, { name: "silhouette" }, { name: "instasky" }, { name: "all_sunsets" }, { name: "petal" }, { name: "petals" }, { name: "plants" }, { name: "blossom" }, { name: "sopretty" }, { name: "spring" }, { name: "flowerstagram" }, { name: "flowersofinstagram" }, { name: "flowerstyles_gf" }, { name: "flowerslovers" }, { name: "flowerporn" }, { name: "botanical" }, { name: "floral" }, { name: "florals" }, { name: "insta_pick_blossom" }, { name: "flowermagic" }, { name: "instablooms" }, { name: "bloom" }, { name: "blooms" }, { name: "floweroftheday" }, { name: "sunny" }, { name: "sunnyday" }, { name: "sunnydays" }, { name: "sunlight" }, { name: "sunshine" }, { name: "shine" }, { name: "skywatcher" }, { name: "thesun" }, { name: "sunrays" }, { name: "beautifulday" }, { name: "goodday" }, { name: "goodweather" }, { name: "instasunny" }, { name: "instasun" }, { name: "clearskies" }, { name: "clearsky" }, { name: "blueskies" }, { name: "lookup" }, { name: "bright" }, { name: "brightsun" }, { name: "cloud" }, { name: "skies" }, { name: "cloudy" }, { name: "instacloud" }, { name: "instaclouds" }, { name: "gloomy" }, { name: "skyline" }, { name: "overcast" }, { name: "epicsky" }, { name: "crazyclouds" }, { name: "cloud_skye" }, { name: "skyback" }, { name: "insta_sky_lovers" }, { name: "iskyhub" }, { name: "rain" }, { name: "raining" }, { name: "rainyday" }, { name: "pouring" }, { name: "rainydays" }, { name: "puddle" }, { name: "umbrella" }, { name: "rainyweather" }, { name: "rainydayz" }, { name: "splash" }, { name: "downpour" }, { name: "instarain" }, { name: "snow" }, { name: "snowing" }, { name: "winter" }, { name: "cold" }, { name: "ice" }, { name: "frosty" }, { name: "frost" }, { name: "chilly" }, { name: "snowflakes" }, { name: "instawinter" }, { name: "instasnow" }, { name: "snowfall" }, { name: "blizzard" }, { name: "season" }, { name: "seasons" }, { name: "instaspring" }, { name: "springtime" }, { name: "color" }, { name: "ilovespring" }, { name: "trees" }, { name: "summertime" }, { name: "clearskys" }, { name: "instasummer" }, { name: "bluesky" }, { name: "vacationtime" }, { name: "summerweather" }, { name: "summertimeshine" }, { name: "fall" }, { name: "autumn" }, { name: "leaves" }, { name: "falltime" }, { name: "instafall" }, { name: "instaautumn" }, { name: "leaf" }, { name: "foliage" }, { name: "autumnweather" }, { name: "fallweather" }, { name: "holidays" }, { name: "christmas" }, { name: "wintertime" }, { name: "staywarm" }, { name: "holidayseason" }, { name: "animals" }, { name: "animal" }, { name: "pet" }, { name: "cat" }, { name: "dogs" }, { name: "cats" }, { name: "cute" }, { name: "pets" }, { name: "animales" }, { name: "animallovers" }, { name: "pets_of_instagram" }, { name: "petstagram" }, { name: "petsagram" }, { name: "puppy" }, { name: "pup" }, { name: "eyes" }, { name: "dogs_of_instagram" }, { name: "dogsitting" }, { name: "dogsofinstagram" }, { name: "ilovemydog" }, { name: "instagramdogs" }, { name: "dogstagram" }, { name: "dogoftheday" }, { name: "lovedogs" }, { name: "lovepuppies" }, { name: "hound" }, { name: "adorable" }, { name: "doglover" }, { name: "instapuppy" }, { name: "instadog" }, { name: "catsagram" }, { name: "catstagram" }, { name: "kitten" }, { name: "kitty" }, { name: "kittens" }, { name: "catsofinstagram" }, { name: "ilovemycat" }, { name: "instagramcats" }, { name: "catoftheday" }, { name: "lovecats" }, { name: "furry" }, { name: "sleeping" }, { name: "lovekittens" }, { name: "catlover" }, { name: "instacat" }, { name: "horses" }, { name: "horse" }, { name: "horsesofinstagram" }, { name: "horseshow" }, { name: "horseshoe" }, { name: "horses_of_instagram" }, { name: "horsestagram" }, { name: "instahorses" }, { name: "wild" }, { name: "mane" }, { name: "grass" }, { name: "field" }, { name: "farm" }, { name: "pony" }, { name: "ponies" }, { name: "ilovemyhorse" }, { name: "babyhorse" }, { name: "gallop" }, { name: "jockey" }, { name: "rider" }, { name: "riders" }, { name: "riding" }, { name: "insects" }, { name: "insect" }, { name: "bug" }, { name: "bugs" }, { name: "bugslife" }, { name: "macro" }, { name: "closeup" }, { name: "instanature" }, { name: "macrogardener" }, { name: "macrophotography" }, { name: "creature" }, { name: "creatures" }, { name: "macro_creature_feature" }, { name: "wildlife" }, { name: "nature_shooters" }, { name: "earth" }, { name: "naturelover" }, { name: "lovenature" }, { name: "fish" }, { name: "aquarium" }, { name: "fishtank" }, { name: "fishporn" }, { name: "instafish" }, { name: "swim" }, { name: "swimming" }, { name: "coral" }, { name: "reef" }, { name: "reeftank" }, { name: "tropical" }, { name: "tropicalfish" }, { name: "aquaria" }, { name: "saltwater" }, { name: "freshwater" }, { name: "watertank" }, { name: "me" }, { name: "instamood" }, { name: "guy" }, { name: "fashion" }, { name: "portrait" }, { name: "selfie" }, { name: "selfienation" }, { name: "selfies" }, { name: "handsome" }, { name: "instaselfie" }, { name: "selfietime" }, { name: "face" }, { name: "shamelessselefie" }, { name: "igdaily" }, { name: "lady" }, { name: "kik" }, { name: "sweet" }, { name: "guys" }, { name: "boy" }, { name: "boys" }, { name: "dude" }, { name: "friend" }, { name: "friendship" }, { name: "chill" }, { name: "happy" }, { name: "live" }, { name: "forever" }, { name: "bff" }, { name: "bf" }, { name: "gf" }, { name: "best" }, { name: "bestfriend" }, { name: "lovethem" }, { name: "bestfriends" }, { name: "goodfriends" }, { name: "besties" }, { name: "memories" }, { name: "goodtimes" }, { name: "goodtime" }, { name: "goodmorning" }, { name: "daytime" }, { name: "morn" }, { name: "awake" }, { name: "wakeup" }, { name: "wake" }, { name: "wakingup" }, { name: "ready" }, { name: "sleepy" }, { name: "breakfast" }, { name: "tired" }, { name: "sluggish" }, { name: "bed" }, { name: "snooze" }, { name: "earlybird" }, { name: "gettingready" }, { name: "goingout" }, { name: "instamorning" }, { name: "work" }, { name: "early" }, { name: "fresh" }, { name: "refreshed" }, { name: "goodnight" }, { name: "nighttime" }, { name: "sleep" }, { name: "sleeptime" }, { name: "sleepyhead" }, { name: "instagoodnight" }, { name: "nightynight" }, { name: "lightsout" }, { name: "bedtime" }, { name: "rest" }, { name: "nightowl" }, { name: "dark" }, { name: "moonlight" }, { name: "moon" }, { name: "out" }, { name: "passout" }, { name: "knockout" }, { name: "knockedout" }, { name: "partying" }, { name: "instaparty" }, { name: "instafun" }, { name: "crazy" }, { name: "chilling" }, { name: "kickit" }, { name: "kickinit" }, { name: "outfit" }, { name: "funtime" }, { name: "funtimes" }, { name: "birthday" }, { name: "bday" }, { name: "instabday" }, { name: "birthdaycake" }, { name: "cake" }, { name: "celebrate" }, { name: "candle" }, { name: "candles" }, { name: "young" }, { name: "old" }, { name: "years" }, { name: "instacake" }, { name: "happybirthday" }, { name: "instabirthday" }, { name: "born" }, { name: "wedding" }, { name: "weddingparty" }, { name: "celebration" }, { name: "bride" }, { name: "groom" }, { name: "bridesmaids" }, { name: "happiness" }, { name: "unforgettable" }, { name: "weddingdress" }, { name: "weddinggown" }, { name: "weddingcake" }, { name: "smiles" }, { name: "together" }, { name: "ceremony" }, { name: "romance" }, { name: "marriage" }, { name: "weddingday" }, { name: "instawed" }, { name: "instawedding" }, { name: "congrats" }, { name: "congratulations" }, { name: "thanksgiving" }, { name: "thanks" }, { name: "giving" }, { name: "turkey" }, { name: "turkeyday" }, { name: "foodporn" }, { name: "holiday" }, { name: "happythanksgiving" }, { name: "stuffing" }, { name: "feast" }, { name: "thankful" }, { name: "blessed" }, { name: "halloween" }, { name: "oct" }, { name: "october" }, { name: "31" }, { name: "scary" }, { name: "spooky" }, { name: "boo" }, { name: "scared" }, { name: "costume" }, { name: "ghost" }, { name: "pumpkin" }, { name: "pumpkins" }, { name: "pumpkinpatch" }, { name: "carving" }, { name: "candy" }, { name: "jackolantern" }, { name: "creepy" }, { name: "trickortreat" }, { name: "trick" }, { name: "treat" }, { name: "hauntedhouse" }, { name: "haunted" }, { name: "tistheseason" }, { name: "happyholidays" }, { name: "elves" }, { name: "lights" }, { name: "presents" }, { name: "gifts" }, { name: "gift" }, { name: "decorations" }, { name: "ornaments" }, { name: "carols" }, { name: "santa" }, { name: "santaclaus" }, { name: "christmas2014" }, { name: "xmas" }, { name: "christmastree" }, { name: "jolly" }, { name: "merrychristmas" }, { name: "happynewyear" }, { name: "newyearsday" }, { name: "newyear" }, { name: "2015" }, { name: "2014" }, { name: "newyearseve" }, { name: "newyears" }, { name: "newyears2015" }, { name: "bye2014" }, { name: "hello2015" }, { name: "donewith2014" }, { name: "newyearsresolution" }, { name: "goals" }, { name: "dec31" }, { name: "jan1" }, { name: "dec312013" }, { name: "jan12014" }, { name: "newyearscelebration" }, { name: "newyearsparty" }, { name: "vacation" }, { name: "winter2014" }, { name: "happyholidays2014" }, { name: "parties" }, { name: "fam" }, { name: "mom" }, { name: "dad" }, { name: "brother" }, { name: "sister" }, { name: "brothers" }, { name: "sisters" }, { name: "bro" }, { name: "sis" }, { name: "siblings" }, { name: "father" }, { name: "mother" }, { name: "related" }, { name: "children" }, { name: "kids" }, { name: "familytime" }, { name: "babies" }, { name: "cuddly" }, { name: "cuddle" }, { name: "small" }, { name: "lovely" }, { name: "kid" }, { name: "igbabies" }, { name: "childrenphoto" }, { name: "toddler" }, { name: "instababy" }, { name: "infant" }, { name: "tiny" }, { name: "little" }, { name: "instakids" }, { name: "child" }, { name: "play" }, { name: "instacute" }, { name: "illustration" }, { name: "drawing" }, { name: "draw" }, { name: "picture" }, { name: "artist" }, { name: "sketch" }, { name: "sketchbook" }, { name: "paper" }, { name: "pen" }, { name: "pencil" }, { name: "artsy" }, { name: "instaart" }, { name: "gallery" }, { name: "masterpiece" }, { name: "creative" }, { name: "instaartist" }, { name: "graphic" }, { name: "graphics" }, { name: "artoftheday" }, { name: "photos" }, { name: "pic" }, { name: "pics" }, { name: "pictures" }, { name: "snapshot" }, { name: "exposure" }, { name: "composition" }, { name: "focus" }, { name: "capture" }, { name: "moment" }, { name: "hdr" }, { name: "hdriphoneographer" }, { name: "hdrspotters" }, { name: "hdrstyles_gf" }, { name: "hdri" }, { name: "hdroftheday" }, { name: "hdriphonegraphy" }, { name: "hdrepublic" }, { name: "hdr_lovers" }, { name: "awesome_hdr" }, { name: "hdrphotography" }, { name: "hdrimage" }, { name: "hdr_gallery" }, { name: "hdr_love" }, { name: "hdrfreak" }, { name: "hdrama" }, { name: "hdrart" }, { name: "hdrphoto" }, { name: "hdrfusion" }, { name: "hdrmania" }, { name: "hdrstyles" }, { name: "ihdr" }, { name: "str8hdr" }, { name: "hdr_edits" }, { name: "blackandwhite" }, { name: "bnw" }, { name: "monochrome" }, { name: "instablackandwhite" }, { name: "monoart" }, { name: "insta_bw" }, { name: "bnw_society" }, { name: "bw_lover" }, { name: "bw_photooftheday" }, { name: "bw" }, { name: "bw_society" }, { name: "bw_crew" }, { name: "bwwednesday" }, { name: "insta_pick_bw" }, { name: "bwstyles_gf" }, { name: "irox_bw" }, { name: "igersbnw" }, { name: "bwstyleoftheday" }, { name: "monotone" }, { name: "monochromaticnoir" }, { name: "fineart_photobw" }, { name: "minimalism" }, { name: "minimalist" }, { name: "minimal" }, { name: "minimalistic" }, { name: "minimalistics" }, { name: "minimalove" }, { name: "minimalobsession" }, { name: "minimalninja" }, { name: "instaminim" }, { name: "minimalisbd" }, { name: "simple" }, { name: "simplicity" }, { name: "keepitsimple" }, { name: "minimalplanet" }, { name: "minimalhunter" }, { name: "minimalista" }, { name: "minimalismo" }, { name: "lessismore" }, { name: "simpleandpure" }, { name: "negativespace" }, { name: "abstract" }, { name: "abstractart" }, { name: "abstracters_anonymous" }, { name: "abstract_buff" }, { name: "abstraction" }, { name: "abstracto" }, { name: "stayabstract" }, { name: "instaabstract" }, { name: "instagrammers" }, { name: "comment" }, { name: "shoutout" }, { name: "iphoneography" }, { name: "androidography" }, { name: "filter" }, { name: "filters" }, { name: "hipster" }, { name: "contests" }, { name: "insta" }, { name: "instafamous" }, { name: "popularpic" }, { name: "popularphoto" }, { name: "architecture" }, { name: "building" }, { name: "architexture" }, { name: "city" }, { name: "buildings" }, { name: "skyscraper" }, { name: "urban" }, { name: "design" }, { name: "cities" }, { name: "town" }, { name: "street" }, { name: "arts" }, { name: "architecturelovers" }, { name: "lines" }, { name: "archilovers" }, { name: "architectureporn" }, { name: "lookingup" }, { name: "archidaily" }, { name: "geometry" }, { name: "perspective" }, { name: "geometric" }, { name: "pattern" }, { name: "streetart" }, { name: "streetphotography" }, { name: "sprayart" }, { name: "urbanart" }, { name: "urbanwalls" }, { name: "wall" }, { name: "wallporn" }, { name: "graffitiigers" }, { name: "stencilart" }, { name: "graffiti" }, { name: "instagraffiti" }, { name: "artwork" }, { name: "mural" }, { name: "graffitiporn" }, { name: "stencil" }, { name: "streetartistry" }, { name: "stickerart" }, { name: "pasteup" }, { name: "instagraff" }, { name: "instagrafite" }, { name: "streetarteverywhere" }, { name: "vsco" }, { name: "vscocam" }, { name: "vscogood" }, { name: "vscophile" }, { name: "vscogrid" }, { name: "vscogram" }, { name: "vscorussia" }, { name: "vscodaily" }, { name: "liveauthentic" }, { name: "vscobest" }, { name: "bestofvsco" }, { name: "livefolk" }, { name: "vscoedit" }, { name: "vscofilm" }, { name: "vsco_hub" }, { name: "vscofeature" }, { name: "vscoonly" }, { name: "justgoshoot" }, { name: "vsconature" }, { name: "vscolove" }, { name: "vscophoto" }, { name: "vscobrasil" }, { name: "vscostyle" }, { name: "vscoturkey" }, { name: "vscoaward" }, { name: "topvsco" }, { name: "instavsco" }, { name: "vscolover" }, { name: "vscomoment" }, { name: "vscoeurope" }, { name: "afterlight" }, { name: "vscolife" }, { name: "vscoism" }, { name: "vscovisuals" }, { name: "vscoapp" }, { name: "vscoartist" }, { name: "vscogallery" }, { name: "vscoph" }, { name: "vscocamphotos" }, { name: "visualsoflife" }, { name: "igmasters" }, { name: "visualsgang" }, { name: "vscolovers" }, { name: "vscovibe" }, { name: "letsgosomewhere" }, { name: "neverstopexploring" }, { name: "vscoexpo" }, { name: "vscocamgram" }, { name: "vscogang" }, { name: "streetdreamsmag" }, { name: "vscocamonly" }, { name: "socality" }, { name: "vscomania" }, { name: "lifeofadventure" }, { name: "vscocool" }, { name: "vscomoscow" }, { name: "peoplescreatives" }, { name: "thatsdarling" }, { name: "instafood" }, { name: "yummy" }, { name: "dinner" }, { name: "lunch" }, { name: "tasty" }, { name: "delish" }, { name: "delicious" }, { name: "eating" }, { name: "foodpic" }, { name: "foodpics" }, { name: "eat" }, { name: "hungry" }, { name: "foodgasm" }, { name: "foods" }, { name: "dessert" }, { name: "desserts" }, { name: "chocolate" }, { name: "icecream" }, { name: "dessertporn" }, { name: "sweettooth" }, { name: "drink" }, { name: "drinks" }, { name: "slurp" }, { name: "pub" }, { name: "bar" }, { name: "liquor" }, { name: "thirst" }, { name: "thirsty" }, { name: "cocktail" }, { name: "cocktails" }, { name: "drinkup" }, { name: "glass" }, { name: "can" }, { name: "beer" }, { name: "beers" }, { name: "wine" }, { name: "coffee" }, { name: "cafe" }, { name: "instacoffee" }, { name: "cafelife" }, { name: "caffeine" }, { name: "mug" }, { name: "coffeeaddict" }, { name: "coffeegram" }, { name: "coffeeoftheday" }, { name: "cotd" }, { name: "coffeelover" }, { name: "coffeelovers" }, { name: "coffeeholic" }, { name: "coffiecup" }, { name: "coffeelove" }, { name: "coffeemug" }, { name: "coffeelife" }, { name: "tea" }, { name: "teatime" }, { name: "instatea" }, { name: "tealife" }, { name: "ilovetea" }, { name: "teaaddict" }, { name: "tealover" }, { name: "tealovers" }, { name: "teagram" }, { name: "healthy" }, { name: "teaoftheday" }, { name: "teacup" }, { name: "teastagram" }, { name: "teaholic" }, { name: "tealove" }, { name: "stylish" }, { name: "nails" }, { name: "model" }, { name: "dress" }, { name: "shoes" }, { name: "heels" }, { name: "styles" }, { name: "purse" }, { name: "jewelry" }, { name: "shopping" }, { name: "glam" }, { name: "instafashion" }, { name: "girly" }, { name: "skirt" }, { name: "swagger" }, { name: "jacket" }, { name: "pants" }, { name: "shirt" }, { name: "polo" }, { name: "swagg" }, { name: "man" }, { name: "tshirt" }, { name: "sneakers" }, { name: "jeans" }, { name: "dope" }, { name: "ootd" }, { name: "outfitoftheday" }, { name: "lookoftheday" }, { name: "fashiongram" }, { name: "currentlywearing" }, { name: "lookbook" }, { name: "wiwt" }, { name: "whatiwore" }, { name: "whatiworetoday" }, { name: "ootdshare" }, { name: "clothes" }, { name: "wiw" }, { name: "mylook" }, { name: "fashionista" }, { name: "todayimwearing" }, { name: "instastyle" }, { name: "outfitpost" }, { name: "fashionpost" }, { name: "todaysoutfit" }, { name: "fashiondiaries" }, { name: "nail" }, { name: "sparkles" }, { name: "gliter" }, { name: "nailart" }, { name: "opi" }, { name: "essie" }, { name: "unhas" }, { name: "preto" }, { name: "branco" }, { name: "rosa" }, { name: "shiny" }, { name: "polish" }, { name: "nailpolish" }, { name: "nailswag" }, { name: "Hair" }, { name: "hairstyle" }, { name: "instahair" }, { name: "hairstyles" }, { name: "haircolour" }, { name: "haircolor" }, { name: "hairdye" }, { name: "hairdo" }, { name: "haircut" }, { name: "longhairdontcare" }, { name: "braid" }, { name: "straighthair" }, { name: "longhair" }, { name: "straight" }, { name: "curly" }, { name: "brown" }, { name: "blonde" }, { name: "brunette" }, { name: "hairoftheday" }, { name: "hairideas" }, { name: "braidideas" }, { name: "perfectcurls" }, { name: "hairfashion" }, { name: "hairofinstagram" }, { name: "coolhair" }, { name: "makeup" }, { name: "instamakeup" }, { name: "cosmetic" }, { name: "cosmetics" }, { name: "eyeshadow" }, { name: "lipstick" }, { name: "gloss" }, { name: "mascara" }, { name: "palettes" }, { name: "eyeliner" }, { name: "lip" }, { name: "lips" }, { name: "tar" }, { name: "concealer" }, { name: "foundation" }, { name: "powder" }, { name: "eyebrows" }, { name: "lashes" }, { name: "lash" }, { name: "glue" }, { name: "glitter" }, { name: "crease" }, { name: "primers" }, { name: "base" }, { name: "jewels" }, { name: "jewel" }, { name: "gems" }, { name: "gem" }, { name: "gemstone" }, { name: "bling" }, { name: "stones" }, { name: "stone" }, { name: "trendy" }, { name: "accessories" }, { name: "crystals" }, { name: "accessory" }, { name: "instajewelry" }, { name: "jewelrygram" }, { name: "fashionjewelry" }, { name: "bracelets" }, { name: "bracelet" }, { name: "armcandy" }, { name: "armswag" }, { name: "wristgame" }, { name: "braceletstacks" }, { name: "braceletsoftheday" }, { name: "fashionlovers" }, { name: "armparty" }, { name: "wristwear" }, { name: "earrings" }, { name: "earring" }, { name: "earringsoftheday" }, { name: "earringaddict" }, { name: "earringstagram" }, { name: "piercing" }, { name: "piercings" }, { name: "pierced" }, { name: "earringswag" }, { name: "earringfashion" }, { name: "earringlove" }, { name: "highheels" }, { name: "platgorm" }, { name: "tall" }, { name: "instaheels" }, { name: "fashionshoes" }, { name: "shoelover" }, { name: "instashoes" }, { name: "highheelshoes" }, { name: "heelsaddict" }, { name: "loveheels" }, { name: "iloveheels" }, { name: "shoestagram" }, { name: "shoe" }, { name: "kicks" }, { name: "instakicks" }, { name: "sneaker" }, { name: "sneakerhead" }, { name: "sneakerheads" }, { name: "solecollector" }, { name: "soleonfire" }, { name: "nicekicks" }, { name: "igsneakercommunity" }, { name: "sneakerfreak" }, { name: "sneakerporn" }, { name: "shoeporn" }, { name: "nike" }, { name: "sneakerholics" }, { name: "sneakerfiend" }, { name: "shoegasm" }, { name: "kickstagram" }, { name: "walklikeus" }, { name: "peepmysneaks" }, { name: "flykicks" }, { name: "tattoo" }, { name: "tattoos" }, { name: "tat" }, { name: "ink" }, { name: "inked" }, { name: "tattooed" }, { name: "tattoist" }, { name: "coverup" }, { name: "sleevetattoo" }, { name: "handtattoo" }, { name: "chesttattoo" }, { name: "tatted" }, { name: "instatattoo" }, { name: "bodyart" }, { name: "tatts" }, { name: "tats" }, { name: "amazingink" }, { name: "tattedup" }, { name: "inkedup" }, { name: "bellyrings" }, { name: "navel" }, { name: "earlobe" }, { name: "ear" }, { name: "bellybuttonring" }, { name: "lipring" }, { name: "modifications" }, { name: "bodymods" }, { name: "piercingaddict" }, { name: "bellybar" }, { name: "bellybuttonpiercing" }, { name: "zaynmalik" }, { name: "louistomlinson" }, { name: "liampayne" }, { name: "1d" }, { name: "directioner" }, { name: "1direction" }, { name: "niall" }, { name: "harry" }, { name: "zayn" }, { name: "liam" }, { name: "louis" }, { name: "leeyum" }, { name: "zjmalik" }, { name: "justin" }, { name: "bieber" }, { name: "bieberfever" }, { name: "beiber" }, { name: "beiberfever" }, { name: "justinbieberswag" }, { name: "boyfriend" }, { name: "justindrewbieber" }, { name: "juju" }, { name: "justinb" }, { name: "justindb" }, { name: "biebs" }, { name: "neversaynever" }, { name: "belieber" }, { name: "believe" }, { name: "believetour" }, { name: "bieberlove" }, { name: "taylor" }, { name: "swift" }, { name: "taylorswift" }, { name: "country" }, { name: "singer" }, { name: "singing" }, { name: "song" }, { name: "swifties" }, { name: "swiftie" }, { name: "flawless" }, { name: "tswift" }, { name: "lovesong" }, { name: "katy" }, { name: "perry" }, { name: "katyperry" }, { name: "lovethissong" }, { name: "kp" }, { name: "katykats" }, { name: "katykat" }, { name: "katycats" }, { name: "katycat" }, { name: "caligirls" }, { name: "californiagirls" }, { name: "partofme" }, { name: "instaperry" }, { name: "extraterrestrial" }, { name: "teenagedream" }, { name: "wideawake" }, { name: "payne" }, { name: "photoofthedayleeyum" }, { name: "leeyumm" }, { name: "leeyumpayne" }, { name: "brilliam" }, { name: "horan" }, { name: "nialler" }, { name: "niallerhoran" }, { name: "niallerwins" }, { name: "niallers" }, { name: "nialljameshoran" }, { name: "niallisbeautiful" }, { name: "nialhoranfacts" }, { name: "niallimagine" }, { name: "niallisperfect" }, { name: "tomlinson" }, { name: "louistomlinsonfacts" }, { name: "louistomlinsontohostteenchoice2013" }, { name: "louistomlinsonimagine" }, { name: "louistomlinsonfanfic" }, { name: "louistomlinsonfact" }, { name: "tommo" }, { name: "lilo" }, { name: "loulou" }, { name: "lou" }, { name: "boobear" }, { name: "fabulouis" }, { name: "malik" }, { name: "malikbaby" }, { name: "directioners" }, { name: "zainmalik" }, { name: "loveonedirection" }, { name: "lovezayn" }, { name: "lovemalik" }, { name: "lovedirectioners" }, { name: "welovezayn" }, { name: "amazayn" }, { name: "djmalik" }, { name: "harrystylesimagine" }, { name: "hazza" }, { name: "hazzastyles" }, { name: "harryedwardstyles" }, { name: "harreh" }, { name: "harold" }, { name: "haroldstyles" }, { name: "harryimagine" }, { name: "lilwayne" }, { name: "@lilwayneofficial_" }, { name: "lil" }, { name: "wayne" }, { name: "liltunechi" }, { name: "weezy" }, { name: "ymcmb" }, { name: "youngmoney" }, { name: "cashmoney" }, { name: "tunechi" }, { name: "wayniac" }, { name: "weezyf" }, { name: "teamweezy" }, { name: "teamtunechi" }, { name: "trukfit" }, { name: "skate" }, { name: "famous" }, { name: "rapper" }, { name: "rich" }, { name: "hiphop" }, { name: "thecarter" }, { name: "drake" }, { name: "drizzy" }, { name: "drizzydrake" }, { name: "drakequotes" }, { name: "ovoxo" }, { name: "ovo" }, { name: "xo" }, { name: "teamdrizzy" }, { name: "teamdrake" }, { name: "instadrake" }, { name: "yolo" }, { name: "takecare" }, { name: "headlines" }, { name: "beat" }, { name: "rap" }, { name: "selenagomez" }, { name: "selena" }, { name: "gomez" }, { name: "selly" }, { name: "sel" }, { name: "selenamariegomez" }, { name: "selenator" }, { name: "selenators" }, { name: "sellyselena" }, { name: "selala" }, { name: "cutie" }, { name: "pickles" }, { name: "wowp" }, { name: "wizardsofwaverlyplace" }, { name: "mileycyrus" }, { name: "miley" }, { name: "cyrus" }, { name: "mileyraycyrus" }, { name: "hannahmontana" }, { name: "hannah" }, { name: "montana" }, { name: "disney" }, { name: "loveher" }, { name: "instamiley" }, { name: "instacyrus" }, { name: "pop" }, { name: "breakout" }, { name: "cantbetamed" }, { name: "destiny" }, { name: "smilers" }, { name: "nobodysperfect" }, { name: "actress" }, { name: "destinyhopecyrus" }, { name: "destinycyrus" }, { name: "demilovato" }, { name: "demi" }, { name: "lovato" }, { name: "demetria" }, { name: "lovatics" }, { name: "lovatic" }, { name: "lovaticforever" }, { name: "ddlovato" }, { name: "devonne" }, { name: "staystrong" }, { name: "giveyourheartabreak" }, { name: "ariana" }, { name: "arianagrande" }, { name: "grande" }, { name: "instaariana" }, { name: "instagrande" }, { name: "arianator" }, { name: "victorious" }, { name: "redhair" }, { name: "teamariana" }, { name: "catvalentine" }, { name: "caterinavalentine" }, { name: "caterina" }, { name: "chrisbrown" }, { name: "chris" }, { name: "cb" }, { name: "breezy" }, { name: "rnb" }, { name: "teambreezy" }, { name: "dancer" }, { name: "chrisbreezy" }, { name: "rihanna" }, { name: "rihannanavy" }, { name: "navy" }, { name: "rihannanavi" }, { name: "rihannafenty" }, { name: "rihannadiamonds" }, { name: "diamonds" }, { name: "unapologetic" }, { name: "riri" }, { name: "robyn" }, { name: "fenty" }, { name: "rih" }, { name: "rihnavy" }, { name: "robynfenty" }, { name: "austin" }, { name: "mahone" }, { name: "austinmahone" }, { name: "amahone" }, { name: "austinm" }, { name: "mahomie" }, { name: "texas" }, { name: "talented" }, { name: "mahomies" }, { name: "mahomiegram" }, { name: "mahomieforever" }, { name: "saysomething" }, { name: "sayyourejustafriend" }, { name: "whataboutlove" }, { name: "bangabanga" }, { name: "5sos" }, { name: "5secondsofsummer" }, { name: "luke" }, { name: "lukehemmings" }, { name: "lukey" }, { name: "ashton" }, { name: "ash" }, { name: "ashtonirwin" }, { name: "calum" }, { name: "cal" }, { name: "calumhood" }, { name: "michael" }, { name: "mike" }, { name: "michaelclifford" }, { name: "boyband" }, { name: "5sosfans" }, { name: "5sosfamily" }, { name: "5sosfam" }, { name: "fivesecondsofsummer" }, { name: "genre" }, { name: "songs" }, { name: "melody" }, { name: "dubstep" }, { name: "beats" }, { name: "jam" }, { name: "myjam" }, { name: "partymusic" }, { name: "newsong" }, { name: "remix" }, { name: "favoritesong" }, { name: "bestsong" }, { name: "bumpin" }, { name: "repeat" }, { name: "listentothis" }, { name: "goodmusic" }, { name: "instamusic" }, { name: "movies" }, { name: "theatre" }, { name: "video" }, { name: "movie" }, { name: "film" }, { name: "films" }, { name: "videos" }, { name: "actor" }, { name: "cinema" }, { name: "dvd" }, { name: "amc" }, { name: "instamovies" }, { name: "star" }, { name: "moviestar" }, { name: "hollywood" }, { name: "goodmovie" }, { name: "flick" }, { name: "flicks" }, { name: "instaflick" }, { name: "instaflicks" }, { name: "books" }, { name: "book" }, { name: "read" }, { name: "reading" }, { name: "reader" }, { name: "page" }, { name: "pages" }, { name: "kindle" }, { name: "nook" }, { name: "library" }, { name: "author" }, { name: "bookworm" }, { name: "readinglist" }, { name: "imagine" }, { name: "plot" }, { name: "climax" }, { name: "story" }, { name: "literature" }, { name: "literate" }, { name: "stories" }, { name: "words" }, { name: "text" }, { name: "videogames" }, { name: "games" }, { name: "gamer" }, { name: "gaming" }, { name: "instagaming" }, { name: "instagamer" }, { name: "playinggames" }, { name: "online" }, { name: "onlinegaming" }, { name: "videogameaddict" }, { name: "instagame" }, { name: "gamestagram" }, { name: "gamerguy" }, { name: "gamergirl" }, { name: "gamin" }, { name: "game" }, { name: "winning" }, { name: "playing" }, { name: "electronics" }, { name: "technology" }, { name: "tech" }, { name: "electronic" }, { name: "device" }, { name: "gadget" }, { name: "gadgets" }, { name: "instatech" }, { name: "geek" }, { name: "techie" }, { name: "nerd" }, { name: "techy" }, { name: "computers" }, { name: "laptops" }, { name: "hack" }, { name: "screen" }, { name: "iphone" }, { name: "apple" }, { name: "appleiphone" }, { name: "ios" }, { name: "iphone3g" }, { name: "iphone3gs" }, { name: "iphone4" }, { name: "iphone5" }, { name: "mobile" }, { name: "instaiphone" }, { name: "phone" }, { name: "smartphone" }, { name: "iphonegraphy" }, { name: "iphoneographer" }, { name: "iphoneology" }, { name: "iphoneographers" }, { name: "iphonegraphic" }, { name: "iphoneogram" }, { name: "teamiphone" }, { name: "android" }, { name: "androidonly" }, { name: "google" }, { name: "googleandroid" }, { name: "droid" }, { name: "instandroid" }, { name: "instaandroid" }, { name: "instadroid" }, { name: "ics" }, { name: "jellybean" }, { name: "samsung" }, { name: "samsunggalaxys2" }, { name: "samsunggalaxy" }, { name: "androidographer" }, { name: "androidinstagram" }, { name: "androidnesia" }, { name: "androidcommunity" }, { name: "teamdroid" }, { name: "teamandroid" }, { name: "fslc" }, { name: "followshoutoutlikecomment" }, { name: "TagsForLikesFSLC" }, { name: "f4f" }, { name: "s4s" }, { name: "l4l" }, { name: "c4c" }, { name: "followback" }, { name: "shoutoutback" }, { name: "likeback" }, { name: "commentback" }, { name: "pleasefollow" }, { name: "pleaseshoutout" }, { name: "pleaselike" }, { name: "pleasecomment" }, { name: "teamfslcback" }, { name: "fslcback" }, { name: "follows" }, { name: "shoutouts" }, { name: "likes" }, { name: "comments" }, { name: "fslcalways" }, { name: "followforfollow" }, { name: "teamfollowback" }, { name: "followher" }, { name: "followbackteam" }, { name: "followhim" }, { name: "followall" }, { name: "followalways" }, { name: "follower" }, { name: "following" }, { name: "shout" }, { name: "shoutouter" }, { name: "shoutoutforshoutout" }, { name: "shoutout4shoutout" }, { name: "so" }, { name: "so4so" }, { name: "ilovemyfollowers" }, { name: "sobackteam" }, { name: "soback" }, { name: "shout_out" }, { name: "liker" }, { name: "likes4likes" }, { name: "likeforlike" }, { name: "likesforlikes" }, { name: "liketeam" }, { name: "likebackteam" }, { name: "likeall" }, { name: "likealways" }, { name: "liking" }, { name: "comment4comment" }, { name: "commenter" }, { name: "commenting" }, { name: "comments4comments" }, { name: "commentteam" }, { name: "commentbackteam" }, { name: "commentbelow" }, { name: "commentall" }, { name: "commentalways" }, { name: "travel" }, { name: "traveling" }, { name: "visiting" }, { name: "instatravel" }, { name: "trip" }, { name: "travelling" }, { name: "tourism" }, { name: "tourist" }, { name: "instapassport" }, { name: "instatraveling" }, { name: "mytravelgram" }, { name: "travelgram" }, { name: "travelingram" }, { name: "igtravel" }, { name: "cars" }, { name: "car" }, { name: "ride" }, { name: "drive" }, { name: "driver" }, { name: "sportscar" }, { name: "vehicle" }, { name: "vehicles" }, { name: "road" }, { name: "freeway" }, { name: "highway" }, { name: "sportscars" }, { name: "exotic" }, { name: "exoticcar" }, { name: "exoticcars" }, { name: "speed" }, { name: "tire" }, { name: "tires" }, { name: "spoiler" }, { name: "muffler" }, { name: "race" }, { name: "racing" }, { name: "wheel" }, { name: "wheels" }, { name: "rim" }, { name: "rims" }, { name: "engine" }, { name: "horsepower" }, { name: "motorcycle" }, { name: "motorcycles" }, { name: "bike" }, { name: "rideout" }, { name: "biker" }, { name: "bikergang" }, { name: "helmet" }, { name: "cycle" }, { name: "bikelife" }, { name: "streetbike" }, { name: "cc" }, { name: "instabike" }, { name: "instamotor" }, { name: "motorbike" }, { name: "instamotorcycle" }, { name: "instamoto" }, { name: "instamotogallery" }, { name: "supermoto" }, { name: "cruisin" }, { name: "cruising" }, { name: "bikestagram" }, { name: "skateboarding" }, { name: "skating" }, { name: "skater" }, { name: "instaskater" }, { name: "sk8" }, { name: "sk8er" }, { name: "sk8ing" }, { name: "sk8ordie" }, { name: "board" }, { name: "longboard" }, { name: "longboarding" }, { name: "kickflip" }, { name: "ollie" }, { name: "skatephotoaday" }, { name: "skateanddestroy" }, { name: "skateeverydamnday" }, { name: "skatespot" }, { name: "skaterguy" }, { name: "skatergirl" }, { name: "skatepark" }, { name: "skateboard" }, { name: "skatelife" }, { name: "health" }, { name: "fitness" }, { name: "fit" }, { name: "fitnessmodel" }, { name: "fitnessaddict" }, { name: "fitspo" }, { name: "workout" }, { name: "bodybuilding" }, { name: "cardio" }, { name: "gym" }, { name: "train" }, { name: "training" }, { name: "instahealth" }, { name: "healthychoices" }, { name: "active" }, { name: "strong" }, { name: "motivation" }, { name: "determination" }, { name: "lifestyle" }, { name: "diet" }, { name: "getfit" }, { name: "cleaneating" }, { name: "eatclean" }, { name: "exercise" }, { name: "instafit" }, { name: "gymlife" }, { name: "pushpullgrind" }, { name: "grindout" }, { name: "flex" }, { name: "instafitness" }, { name: "trainhard" }, { name: "grow" }, { name: "dedication" }, { name: "strength" }, { name: "ripped" }, { name: "swole" }, { name: "fitnessgear" }, { name: "muscle" }, { name: "shredded" }, { name: "squat" }, { name: "bigbench" }, { name: "sweat" }, { name: "grind" }, { name: "sports" }, { name: "sport" }, { name: "football" }, { name: "soccer" }, { name: "basketball" }, { name: "futball" }, { name: "ball" }, { name: "gametime" }, { name: "crowd" }, { name: "fans" }, { name: "player" }, { name: "score" }, { name: "goal" }, { name: "action" }, { name: "kick" }, { name: "throw" }, { name: "pass" }, { name: "win" }, { name: "run" }, { name: "runner" }, { name: "running" }, { name: "runtoinspire" }, { name: "furtherfasterstronger" }, { name: "seenonmyrun" }, { name: "trailrunning" }, { name: "trailrunner" }, { name: "runchat" }, { name: "runhappy" }, { name: "time2run" }, { name: "happyrunner" }, { name: "marathon" }, { name: "runners" }, { name: "trailrun" }, { name: "instarunner" }, { name: "instarun" }, { name: "workouttime" }, { name: "dance" }, { name: "dancing" }, { name: "dancerecital" }, { name: "ballet" }, { name: "dancers" }, { name: "dancefloor" }, { name: "danceshoes" }, { name: "instaballet" }, { name: "studio" }, { name: "instadance" }, { name: "cheer" }, { name: "choreography" }, { name: "flexible" }, { name: "flexibility" }, { name: "practice" }, { name: "cheerleading" }, { name: "cheerleader" }, { name: "cheerathletics" }, { name: "stunt" }, { name: "stunting" }, { name: "tumbling" }, { name: "jump" }, { name: "toetouch" }, { name: "box" }, { name: "stretch" }, { name: "scale" }, { name: "scorpion" }, { name: "backtuck" }, { name: "instacheer" }, { name: "cheerstagram" }, { name: "cheerperfection" }, { name: "cheerclassic" }, { name: "instacheerleader" }, { name: "cheerislife" }, { name: "cheering" }, { name: "cheersport" }, { name: "cheerpassion" }, { name: "cheerpractice" }, { name: "gymnastics" }, { name: "gymnastic" }, { name: "gymnast" }, { name: "gymnasts" }, { name: "gymnastique" }, { name: "gymnastlife" }, { name: "beam" }, { name: "vault" }, { name: "bars" }, { name: "flip" }, { name: "git" }, { name: "leap" }, { name: "highbar" }, { name: "flipping" }, { name: "basket" }, { name: "baller" }, { name: "hoop" }, { name: "balling" }, { name: "court" }, { name: "net" }, { name: "backboard" }, { name: "shoot" }, { name: "instaballer" }, { name: "instaball" }, { name: "nba" }, { name: "bball" }, { name: "futbol" }, { name: "team" }, { name: "soccerball" }, { name: "instafutbol" }, { name: "soccergame" }, { name: "fifa" }, { name: "worldcup" }, { name: "footballgame" }, { name: "footballseason" }, { name: "footballgames" }, { name: "footballplayer" }, { name: "jersey" }, { name: "stadium" }, { name: "yards" }, { name: "yardline" }, { name: "pads" }, { name: "touchdown" }, { name: "catch" }, { name: "quarterback" }, { name: "nfl" }, { name: "superbowl" }, { name: "kickoff" }, { name: "baseball" }, { name: "bases" }, { name: "homerun" }, { name: "bat" }, { name: "swing" }, { name: "pitcher" }, { name: "mlb" }, { name: "firstbase" }, { name: "secondbase" }, { name: "thirdbase" }, { name: "inning" }, { name: "baseballbat" }, { name: "mitt" }, { name: "gloves" }, { name: "hockey" }, { name: "hockeystick" }, { name: "puck" }, { name: "rink" }, { name: "icerink" }, { name: "hockeyplayer" }, { name: "hockeyplayers" }, { name: "fight" }, { name: "shot" }, { name: "hockeygram" }, { name: "stanleycup" }, { name: "hockeylife" }, { name: "pucklife" }, { name: "nhl" }, { name: "superbowlxlviii" }, { name: "xlviii" }, { name: "superbowl2014" }, { name: "2014superbowl" }, { name: "superbowl48" }, { name: "48" }, { name: "seavsden" }, { name: "sb48" }, { name: "broncos" }, { name: "seahawks" }, { name: "seattle" }, { name: "denver" }, { name: "sunday" }, { name: "superbowlweekend" }, { name: "sea" }, { name: "gohawks" }, { name: "12s" }, { name: "seahawksnation" }, { name: "seattleseahawks" }, { name: "hawks" }, { name: "goseahawks" }, { name: "goseattle" }, { name: "superbowlxlvii" }, { name: "xlvii" }, { name: "gobroncos" }, { name: "unitedinorange" }, { name: "broncosnation" }, { name: "denverbroncos" }, { name: "bronco" }, { name: "godenver" }, { name: "teammanning" }, { name: "letsgobroncos" }, { name: "49ers" }, { name: "niners" }, { name: "ninernation" }, { name: "questforsix" }, { name: "quest4six" }, { name: "redandgold" }, { name: "faithful" }, { name: "sanfrancsico" }, { name: "ninersfaithful" }, { name: "49ersfaithful" }, { name: "sfniners" }, { name: "sf49ers" }, { name: "superbowl2013" }, { name: "2013superbowl" }, { name: "harbowl" }, { name: "harbaughbowl" }, { name: "superbowl47" }, { name: "47" }, { name: "sb47" }, { name: "ravens" }, { name: "ravensnation" }, { name: "baltimoreravens" }, { name: "ravensfan" }, { name: "nola" }, { name: "baltimore" }, { name: "blackandpurple" }, { name: "raylewis" }, { name: "rayray" }, { name: "school" }, { name: "class" }, { name: "classess" }, { name: "teacher" }, { name: "teachers" }, { name: "student" }, { name: "students" }, { name: "classmates" }, { name: "classmate" }, { name: "peer" }, { name: "homework" }, { name: "textbook" }, { name: "textbooks" }, { name: "messingaround" }, { name: "working" }, { name: "job" }, { name: "myjob" }, { name: "office" }, { name: "company" }, { name: "mygrind" }, { name: "dayjob" }, { name: "ilovemyjob" }, { name: "dailygrind" }, { name: "business" }, { name: "biz" }, { name: "workinglate" }, { name: "computer" }, { name: "instajob" }, { name: "instalife" }, { name: "lmao" }, { name: "lmfao" }, { name: "hilarious" }, { name: "laugh" }, { name: "laughing" }, { name: "wacky" }, { name: "silly" }, { name: "witty" }, { name: "instahappy" }, { name: "joke" }, { name: "jokes" }, { name: "joking" }, { name: "epic" }, { name: "funnypictures" }, { name: "haha" }, { name: "humor" }, { name: "quote" }, { name: "quotes" }, { name: "quoteoftheday" }, { name: "instagramhub" }, { name: "tbt" }, { name: "true" }, { name: "nofilter" }, { name: "word" }, { name: "throwbackthursdays" }, { name: "tbts" }, { name: "throwback" }, { name: "tb" }, { name: "instatbt" }, { name: "instatb" }, { name: "reminisce" }, { name: "reminiscing" }, { name: "backintheday" }, { name: "back" }, { name: "instamemory" }, { name: "miss" }, { name: "instamoment" }, { name: "throwbackthursdayy" }, { name: "throwbackthursdayyy" }, { name: "instagramdirect" }, { name: "instadirect" }, { name: "directmessage" }, { name: "direct" }, { name: "message" }, { name: "messageme" }, { name: "instadirectme" }, { name: "tumblr" }, { name: "tumblrlife" }, { name: "tumblrphoto" }, { name: "tumblrphotos" }, { name: "tumblrlove" }, { name: "tumblrpic" }, { name: "tumblrpics" }, { name: "tumblrposts" }, { name: "tumblrpost" }, { name: "perfect" }, { name: "tumblrpicture" }, { name: "tumblrpictures" }, { name: "tumblrthings" }, { name: "tumblrstuff" }, { name: "instatumblr" }, { name: "tumblrgram" }, { name: "kikme" }, { name: "kikmessenger" }, { name: "kikit" }, { name: "kikster" }, { name: "kikmebored" }, { name: "kikmeguys" }, { name: "kikmessanger" }, { name: "boredkikme" }, { name: "kikmeplease" }, { name: "kikmessage" }, { name: "kikmee" }, { name: "kikmemaybe" }, { name: "kikplease" }, { name: "letskik" }, { name: "instakik" }, { name: "snapchat" }, { name: "snap" }, { name: "chat" }, { name: "snapchatme" }, { name: "snapchatmenow" }, { name: "snapchatit" }, { name: "snapchatster" }, { name: "snapchatmguys" }, { name: "snapchatmegirl" }, { name: "snapchatmeimbored" }, { name: "snapchatmeplease" }, { name: "snapit" }, { name: "snapchatmemaybe" }, { name: "instasnapchat" }, { name: "letssnapchat" }, { name: "askfm" }, { name: "ask" }, { name: "askmeanything" }, { name: "askfmme" }, { name: "questions" }, { name: "question" }, { name: "opinions" }, { name: "anonymous" }, { name: "askme" }, { name: "askmestuff" }, { name: "leavequestions" }, { name: "justask" }, { name: "justquestion" }, { name: "askfmit" }, { name: "askmemaybe" }, { name: "askforask" }, { name: "asknow" }, { name: "askaway" }, { name: "askmesomething" }, { name: "spamme" }, { name: "linkinbio" }, { name: "money" }, { name: "cash" }, { name: "dough" }, { name: "bills" }, { name: "crisp" }, { name: "benjamin" }, { name: "benjamins" }, { name: "franklin" }, { name: "franklins" }, { name: "bank" }, { name: "payday" }, { name: "hundreds" }, { name: "twentys" }, { name: "fives" }, { name: "ones" }, { name: "100s" }, { name: "20s" }, { name: "greens" }, { name: "instarich" }, { name: "capital" }, { name: "stacks" }, { name: "stack" }, { name: "bread" }, { name: "paid" }, { name: "colors" }, { name: "yellow" }, { name: "indigo" }, { name: "violet" }, { name: "rainbow" }, { name: "rainbowcolors" }, { name: "colour" }, { name: "roygbiv" }, { name: "instacolor" }, { name: "colorgram" }, { name: "colores" }, { name: "vibrant" }, { name: "multicolor" }, { name: "multicolored" }, { name: "instacolorful" }, { name: "colorworld" }, { name: "spiritual" }, { name: "faith" }, { name: "god" }, { name: "grace" }, { name: "pray" }, { name: "prayers" }, { name: "praying" }, { name: "amen" }, { name: "religion" }, { name: "coexist" }, { name: "spirituality" }, { name: "trust" }, { name: "peace" }, { name: "calm" }, { name: "mind" }, { name: "soul" }, { name: "hope" }, { name: "wisdom" }, { name: "compassion" }, { name: "forgiveness" }, { name: "knowledge" }, { name: "meditation" }, { name: "meditate" }, { name: "guidance" }, { name: "hijab" }, { name: "hijaboftheday" }, { name: "hotd" }, { name: "hijabfashion" }, { name: "hijabilookbook" }, { name: "thehijabstyle" }, { name: "hijabmodesty" }, { name: "modesty" }, { name: "hijabstyle" }, { name: "hijabistyle" }, { name: "fashionhijabis" }, { name: "hijablife" }, { name: "hijabspiration" }, { name: "hijabcandy" }, { name: "hijabdaily" }, { name: "hijablove" }, { name: "hijabswag" }, { name: "modestclothing" }, { name: "fashionmodesty" }, { name: "slayqueen" }, { name: "hashbump" }];

/* harmony default export */ __webpack_exports__["a"] = (hashtags);

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var __Suggestions = function __Suggestions(props) {

    var hasSuggestions = props.suggestions && props.suggestions.length !== 0;

    if (!hasSuggestions) {
        return null;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Absolute"],
        { width: [1], pl: [1] },
        props.suggestions.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
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
            );
        })
    );
};

var _Suggestions = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["withTheme"])(__Suggestions);

var AutoSuggest = function (_PureComponent) {
    _inherits(AutoSuggest, _PureComponent);

    function AutoSuggest(props) {
        _classCallCheck(this, AutoSuggest);

        var _this = _possibleConstructorReturn(this, (AutoSuggest.__proto__ || Object.getPrototypeOf(AutoSuggest)).call(this, props));

        _this.onKeyDownSuggestionsHandler = _this.onKeyDownSuggestionsHandler.bind(_this);
        _this.onMouseOverSuggestionsHandler = _this.onMouseOverSuggestionsHandler.bind(_this);
        return _this;
    }

    _createClass(AutoSuggest, [{
        key: 'onMouseOverSuggestionsHandler',
        value: function onMouseOverSuggestionsHandler(event) {

            var suggestions = [];

            this.props.suggestions.forEach(function (item, i) {
                suggestions[i] = Object.assign({}, item);
            });

            suggestions.forEach(function (item) {
                if (item.selected === true) item.selected = false;
                if (item.name === event.target.innerText) {
                    item.selected = true;
                }
            });
            this.props.suggestionsHandler(suggestions);
        }
    }, {
        key: 'onKeyDownSuggestionsHandler',
        value: function onKeyDownSuggestionsHandler(event) {
            var _this2 = this;

            if (!this.props.suggestions) return;

            var suggestions = [];

            this.props.suggestions.forEach(function (item, i) {
                suggestions[i] = Object.assign({}, item);
            });

            var value = this.props.value.value;

            var selectionExists = suggestions && suggestions.find(function (item) {
                return item.selected === true;
            });

            switch (event.keyCode) {
                // up
                case 38:
                    if (selectionExists) {
                        suggestions.find(function (item, i) {
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
                        suggestions.find(function (item, i) {
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
                        suggestions.find(function (item) {
                            if (item.selected === true) {
                                item.selected = false;
                                _this2.props.valueHandler(item.name, true);
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
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_rebass__["Relative"],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Input"], { bg: this.props.theme.hashtagAutoSuggest.inputBg,
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
                    onChange: function onChange(event) {
                        _this3.props.valueHandler(event.target.value);
                    },
                    onKeyDown: this.onKeyDownSuggestionsHandler
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Suggestions, {
                    suggestions: this.props.suggestions,
                    onClickSuggestions: function onClickSuggestions(event) {
                        _this3.props.suggestionsHandler(null);
                        _this3.props.valueHandler(event.target.innerText, true);
                    },
                    onMouseOverSuggestions: this.onMouseOverSuggestionsHandler
                })
            );
        }
    }]);

    return AutoSuggest;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["withTheme"])(AutoSuggest));

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);




var _TopHashtags = function _TopHashtags(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
    { width: props.theme.topHashtags.boxWidth,
      pl: props.theme.topHashtags.boxPl,
      pr: props.theme.topHashtags.boxPr,
      pt: props.theme.topHashtags.boxPt },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Label"],
      { is: props.theme.topHashtags.labelIs,
        fontSize: props.theme.topHashtags.labelFontSize,
        pb: props.theme.topHashtags.labelPb,
        color: props.theme.topHashtags.labelColor },
      props.title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
      { align: props.theme.topHashtags.flexAlign },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.yaySvgSource }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topYay
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
      { align: props.theme.topHashtags.flexAlign },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.grrrSvgSource }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topGrrr
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
      { align: props.theme.topHashtags.flexAlign },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.dunnoSvgSource }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topDunno
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
      { align: props.theme.topHashtags.flexAlign },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.topHashtags.inlineImageDisplay,
        width: props.theme.topHashtags.inlineImageWidth,
        src: props.theme.mehSvgSource }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
        { display: props.theme.topHashtags.infoBoxDisplay,
          fontSize: props.theme.topHashtags.infoBoxFontSize,
          color: props.theme.topHashtags.infoBoxColor,
          pl: props.theme.topHashtags.infoBoxPl },
        props.topMeh
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["withTheme"])(_TopHashtags));

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);




var _Header = function _Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.header.logoImageDisplay, width: props.theme.header.logoImageWidth, src: props.theme.hashbumpLogoSvgSource }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
      { ml: props.theme.header.nameBoxMl, pr: props.theme.header.nameBoxPr, pt: props.theme.header.nameBoxPt },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Flex"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rebass__["Label"],
          { display: props.theme.header.nameLabelDisplay, fontSize: props.theme.header.nameLabelFontSize, color: props.theme.header.nameLabelLeftColor },
          'hash'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rebass__["Label"],
          { display: props.theme.header.nameLabelDisplay, fontSize: props.theme.header.nameLabelFontSize, color: props.theme.header.nameLabelRightColor },
          'bump'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["withTheme"])(_Header));

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);




var _BumpButton = function _BumpButton(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Box"],
        { bumpType: props.bumpType, p: props.theme.bumpButton.boxP, width: props.theme.bumpButton.width },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rebass__["Image"], { display: props.theme.bumpButton.imageDisplay, src: props.buttonImageSource }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rebass__["Text"],
            { center: true, color: props.theme.bumpButton.color, fontSize: props.theme.bumpButton.fontSize },
            props.bumpCount
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["withTheme"])(_BumpButton));

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hashbumpColorGold; });
/* unused harmony export hashbumpColorGreen */
/* unused harmony export hashbumpColorPurple */

var hashbumpColorGold = "#e4be45";
var hashbumpColorGreen = "#2f9b4c";
var hashbumpColorPurple = "#8845ad";

var theme = {
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

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createClient */
/* unused harmony export getNetworkInterface */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_env__ = __webpack_require__(294);
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library


/* ReactQL */

// Configuration


// Get environment, to figure out where we're running the GraphQL server


// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside any set by `config.setApolloOptions` and defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloClientOptions, opt));
}

// Wrap `createNetworkInterface` to attach middleware
function getNetworkInterface(uri) {
  var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
    uri: uri,
    opts: __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloNetworkOptions
  });

  // Attach middleware
  networkInterface.use(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloMiddleware.map(function (f) {
    return { applyMiddleware: f };
  }));
  networkInterface.useAfter(__WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].apolloAfterware.map(function (f) {
    return { applyAfterware: f };
  }));

  return networkInterface;
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  var uri = __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLServer ? '' + Object(__WEBPACK_IMPORTED_MODULE_2_kit_lib_env__["a" /* getServerURL */])() + __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint : __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint;

  return createClient({
    networkInterface: getNetworkInterface(uri)
  });
}

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getServerURL;
/* eslint-disable import/prefer-default-export */

// Environment-aware functions

// Get the protocol://host:port of where the current server would bind
function getServerURL() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "8081";
  var allowSSL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Check for SSL
  if (allowSSL && null) {
    var _stub = 'https://' + (host || "localhost");

    // If we're on port 443, that's 'regular' SSL so no need to specify port
    if (null === '443') return _stub;
    return _stub + ':' + null;
  }

  // Plain HTTP
  var stub = 'http://' + (host || "localhost");

  // If we're on port 80, that's 'regular' HTTP so no need to specify port
  if (port === '80') return stub;
  return stub + ':' + port;
}

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_config__ = __webpack_require__(54);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-underscore-dangle */

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


// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
var hasState = !!(!false && window.__STATE__);

// Helper function that 'unwinds' the `config.reducers` Map, and provides
// the `reducer` function or `initialState` (wrapped in `seamless-immutable`)
// depending on what we asked for
function unwind() {
  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Unwind `config.reducers`.  If we're looking for the `reducer`, we'll
  // wrap this in a `defaultReducer` function that properly handles the Redux
  // 'undefined' sentinel value, or calls 'real' reducer if it's not undefined.
  //
  // If we're not looking for reducers, it'll pull out the `initialState`
  // variable instead, which we'll further process below
  var r = Object.assign.apply(Object, [{}].concat(_toConsumableArray([].concat([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_3_kit_config__["a" /* default */].reducers)).map(function (arr) {
    return _defineProperty({}, arr[0], reducer ? function defaultReducer(state, action) {
      // If `state` === undefined, this is Redux sending a sentinel value
      // to check our set-up.  So we'll send back a plain object to prove
      // that we're properly handling our reducer
      if (typeof state === 'undefined') return {};

      // Otherwise, call our real reducer with the {state, action}
      return arr[1].reducer(state, action);
    } : arr[1].initialState);
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // If not, we're looking for the state -- so let's map it and wrap the
  // object in `seamless-immutable`, to avoid side-effects with Redux
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(r).map(function (key) {
    return _defineProperty({}, key, __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default()(hasState && window.__STATE__[key] || r[key]));
  }))));
}

function createNewStore(apolloClient) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware(), __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
  !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));

  return store;
}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Simple class to act as a singleton for app-wide configuration.

// We'll start with a common config that can be extended separately by the
// server/client, to provide environment-specific functionality
var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

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


  _createClass(Common, [{
    key: 'addReducer',
    value: function addReducer(key, reducer) {
      var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof reducer !== 'function') {
        throw new Error('Can\'t add reducer for \'' + key + '\' - reducer must be a function');
      }
      this.reducers.set(key, {
        reducer: reducer,
        initialState: initialState
      });
    }

    /* GRAPHQL */

    // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
    // can be overridden

  }, {
    key: 'enableGraphQLServer',
    value: function enableGraphQLServer() {
      var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/graphql';
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLServer = true;
      this.graphQLEndpoint = endpoint;
      this.graphiQL = graphiQL;
    }

    // Set an external GraphQL URI for use with Apollo

  }, {
    key: 'setGraphQLEndpoint',
    value: function setGraphQLEndpoint(uri) {
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLEndpoint = uri;
      this.graphiQL = graphiQL;
    }

    // Register Apollo middleware function

  }, {
    key: 'addApolloMiddleware',
    value: function addApolloMiddleware(middlewareFunc) {
      this.apolloMiddleware.push(middlewareFunc);
    }

    // Register Apollo afterware function

  }, {
    key: 'addApolloAfterware',
    value: function addApolloAfterware(afterwareFunc) {
      this.apolloAfterware.push(afterwareFunc);
    }

    // Apollo Client options.  These will be merged in with the `createClient`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloClientOptions',
    value: function setApolloClientOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloClientOptions = opt;
    }

    // Apollo Network options.  These will be merged in with the `createNetworkInterface`
    // default options defined in `kit/lib/apollo.js`

  }, {
    key: 'setApolloNetworkOptions',
    value: function setApolloNetworkOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.apolloNetworkOptions = opt;
    }
  }]);

  return Common;
}();

// Placeholder for the class we'll attach


var Config = void 0;

// Server Config extensions.  This is wrapped in a `SERVER` block to avoid
// adding unnecessary functionality to the client bundle.  Every byte counts!
if (false) {
  Config = function (_Common) {
    _inherits(ServerConfig, _Common);

    function ServerConfig() {
      _classCallCheck(this, ServerConfig);

      // Create a set for routes -- to retrieve based on insertion order
      var _this = _possibleConstructorReturn(this, (ServerConfig.__proto__ || Object.getPrototypeOf(ServerConfig)).call(this));

      _this.routes = new Set();

      // Koa application function. But default, this is null
      _this.koaAppFunc = null;

      // Flag for setting whether plain HTTP should be disabled
      _this.enableHTTP = true;

      // Force SSL. Rewrites all non-SSL queries to SSL.  False, by default.
      _this.enableForceSSL = false;

      // Options for enabling SSL. By default, this is null. If SSL is enabled
      // in userland, this would instead hold an object of options
      _this.sslOptions = null;

      // Custom middleware -- again, based on insertion order
      _this.middleware = new Set();

      // GraphQL schema (if we're using an internal server)
      _this.graphQLSchema = null;

      // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
      // this === true, this will default to `/graphql`.  If it's a string, it'll
      // default to the string value
      _this.graphiQL = false;

      // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
      _this.enableBodyParser = true;
      _this.bodyParserOptions = {};

      // CORS options for `koa-cors`
      _this.corsOptions = {};
      return _this;
    }

    /* WEB SERVER / SSR */

    // Get access to Koa's `app` instance, for adding custom instantiation
    // or doing something that's not covered by other functions


    _createClass(ServerConfig, [{
      key: 'getKoaApp',
      value: function getKoaApp(func) {
        this.koaAppFunc = func;
      }

      // Enable SSL. Normally, you'd use an upstream proxy like Nginx to handle
      // SSL. But if you want to run a 'bare' Koa HTTPS web server, you can pass
      // in the certificate details here and it'll respond to SSL requests

    }, {
      key: 'enableSSL',
      value: function enableSSL(opt) {
        // At a minimum, we should have `key` and `cert` -- check for those
        if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object' || !opt.key || !opt.cert) {
          throw new Error('Cannot enable SSL. Missing `key` and/or `cert`');
        }
        this.sslOptions = opt;
      }

      // Force SSL. Rewrites all non-SSL queries to SSL. Any options here are
      // passed to `koa-sslify`, the SSL enforcement middleware

    }, {
      key: 'forceSSL',
      value: function forceSSL() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.enableForceSSL = opt;
      }

      // Disable plain HTTP.  Note this should only be used if you've also set
      // `enableSSL()` and you don't want dual-HTTP+SSL config

    }, {
      key: 'disableHTTP',
      value: function disableHTTP() {
        this.enableHTTP = false;
      }

      // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
      // each request.  By default, body parsing is enabled.

    }, {
      key: 'disableBodyParser',
      value: function disableBodyParser() {
        this.enableBodyParser = false;
      }
    }, {
      key: 'setBodyParserOptions',
      value: function setBodyParserOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.bodyParserOptions = opt;
      }

      // 404 handler for the server.  By default, `kit/entry/server.js` will
      // simply return a 404 status code without modifying the HTML render.  By
      // setting a handler here, this will be returned instead

    }, {
      key: 'set404Handler',
      value: function set404Handler(func) {
        if (typeof func !== 'function') {
          throw new Error('404 handler must be a function');
        }
        this.handler404 = func;
      }

      // Error handler.  If this isn't defined, the server will simply return a
      // 'There was an error. Please try again later.' message, and log the output
      // to the console.  Override that behaviour by passing a (e, ctx, next) -> {} func

    }, {
      key: 'setErrorHandler',
      value: function setErrorHandler(func) {
        if (typeof func !== 'function') {
          throw new Error('Error handler must be a function');
        }
        this.errorHandler = func;
      }

      // Add custom middleware.  This should be an async func, for use with Koa

    }, {
      key: 'addMiddleware',
      value: function addMiddleware(middlewareFunc) {
        this.middleware.add(middlewareFunc);
      }

      // Adds a custom server route to attach to our Koa router

    }, {
      key: 'addRoute',
      value: function addRoute(method, route) {
        for (var _len = arguments.length, handlers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          handlers[_key - 2] = arguments[_key];
        }

        this.routes.add({
          method: method,
          route: route,
          handlers: handlers
        });
      }

      // Adds custom GET route

    }, {
      key: 'addGetRoute',
      value: function addGetRoute(route) {
        for (var _len2 = arguments.length, handlers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          handlers[_key2 - 1] = arguments[_key2];
        }

        this.addRoute.apply(this, ['get', route].concat(handlers));
      }

      // Adds custom POST route

    }, {
      key: 'addPostRoute',
      value: function addPostRoute(route) {
        for (var _len3 = arguments.length, handlers = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          handlers[_key3 - 1] = arguments[_key3];
        }

        this.addRoute.apply(this, ['post', route].concat(handlers));
      }

      // Adds custom PUT route

    }, {
      key: 'addPutRoute',
      value: function addPutRoute(route) {
        for (var _len4 = arguments.length, handlers = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          handlers[_key4 - 1] = arguments[_key4];
        }

        this.addRoute.apply(this, ['put', route].concat(handlers));
      }

      // Adds custom PATCH route

    }, {
      key: 'addPatchRoute',
      value: function addPatchRoute(route) {
        for (var _len5 = arguments.length, handlers = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          handlers[_key5 - 1] = arguments[_key5];
        }

        this.addRoute.apply(this, ['patch', route].concat(handlers));
      }

      // Adds custom DELETE route

    }, {
      key: 'addDeleteRoute',
      value: function addDeleteRoute(route) {
        for (var _len6 = arguments.length, handlers = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          handlers[_key6 - 1] = arguments[_key6];
        }

        this.addRoute.apply(this, ['delete', route].concat(handlers));
      }

      // Set the GraphQL schema. This should only be called on the server, otherwise
      // the bundle size passed by the `schema` object will be unnecessarily inflated

    }, {
      key: 'setGraphQLSchema',
      value: function setGraphQLSchema(schema) {
        this.graphQLSchema = schema;
      }

      // CORS options, for `koa-cors` instantiation

    }, {
      key: 'setCORSOptions',
      value: function setCORSOptions() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        this.corsOptions = opt;
      }
    }]);

    return ServerConfig;
  }(Common);
} else {
  // For the client config, we'll extend `Common` by default -- but if we need
  // anything unique to the browser in the future, we'd add it here...
  Config = function (_Common2) {
    _inherits(ClientConfig, _Common2);

    function ClientConfig() {
      _classCallCheck(this, ClientConfig);

      return _possibleConstructorReturn(this, (ClientConfig.__proto__ || Object.getPrototypeOf(ClientConfig)).apply(this, arguments));
    }

    return ClientConfig;
  }(Common);
}

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config
/* harmony default export */ __webpack_exports__["a"] = (new Config());

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* unused harmony export Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(35);
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { render: function render(_ref) {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Redirect */], { to: to, from: from, push: push })
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

/***/ })

},[107]);
//# sourceMappingURL=browser.js.map