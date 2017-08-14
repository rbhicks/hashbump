import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import imageLookup from '../utility/image-lookup';





const topCountQuery = graphql(gql`
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




class BumpDisplay extends React.PureComponent {
    render() {
        if (this.props.topCountQuery.loading) {
            return (<div>loading...</div>);
        }
        else {
            return (
                    <div>
                    <h1>#{this.props.topCountQuery.topCount.name}  {this.props.topCountQuery.topCount.count}</h1>
                    <img src="../hashbump-yay.svg" />
                    </div>
            );
        }
    }
}

export default compose(
    topCountQuery
)(BumpDisplay);
