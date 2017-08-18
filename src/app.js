// ----------------------
// IMPORTS

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { gql, graphql } from 'react-apollo';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

// Helper to merge expected React PropTypes to Apollo-enabled component
import { mergeData } from 'kit/lib/apollo';

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';

// Styles
// import './styles.global.css';
// import css from './styles.css';
// import sass from './styles.scss';
// import less from './styles.less';


import hashbumpStyle from './style/hashbump.scss';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './hashbump-logo-2.svg';

import { connect } from 'react-redux';
import { setCurrentHashtag } from './store/actions.js';

import BumpButton  from './components/bumpButton.js';
import HashtagAutocomplete from './components/hashtagAutocomplete.js';
import BumpDisplay from './components/bumpDisplay.js';


// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
class App extends Component {

    render() {        
        return (
                <div className={hashbumpStyle.hashbump}>
                <Helmet
            title="hashbump"
            meta={[{
                name: 'description',
                content: 'bump that hashtag',
            }]} />
                <div>
                <img src={logo} alt="hashbump" />
                </div>
                <hr />
                <div style={{height: "30vh"}}>
                <div style={{float: "left", width: "50%" }}>
                <BumpDisplay bump="yay" topCountType="all-time" />
                <BumpDisplay bump="grrr" topCountType="all-time" />
                <BumpDisplay bump="dunno" topCountType="all-time" />
                <BumpDisplay bump="meh" topCountType="all-time" />
                </div>
                <div style={{float: "right", width: "50%" }}>
                <BumpDisplay bump="yay" topCountType="today" />
                <BumpDisplay bump="grrr" topCountType="today" />
                <BumpDisplay bump="dunno" topCountType="today" />
                <BumpDisplay bump="meh" topCountType="today" />
                </div>
                </div>
                <div>
                <div>
                <div className={hashbumpStyle.hashtag}>
                </div>
                <HashtagAutocomplete />
                </div>
                <BumpButton bump="yay"/>
                <BumpButton bump="grrr"/>
                <BumpButton bump="dunno"/>
                <BumpButton bump="meh"/>
                </div>
                </div>
        );

    }
}


export default App;
