import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtagName } from '../store/actions';
import imageLookup from '../utility/image-lookup';

const hashtagQuery = graphql(gql`
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
        variables: {name: ""}
    },
});

const bumpHashtagMutation = graphql(gql`
  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {
    bumpHashtag(name: $currentHashtag, bump: $bump) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`
, {
    name: "bumpHashtagMutation"
}
);

const addHashtagMutation = graphql(gql`
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

class BumpButton extends React.PureComponent {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {        
        const hashtagQuery = this.props.hashtagQuery;
        const bumpHashtagMutation = this.props.bumpHashtagMutation;
        const addHashtagMutation = this.props.addHashtagMutation;

        hashtagQuery.refetch({name: this.props.currentHashtagName})
            .then(dataObject => {
                if (!dataObject.data.hashtag) {
                    addHashtagMutation({variables: {currentHashtag: this.props.currentHashtagName}})
                        .then(hashtag => {
                            bumpHashtagMutation({variables: {currentHashtag: this.props.currentHashtagName, bump: this.props.bump}}).
                                then(
                                    () => {
                                        hashtagQuery.refetch({name: this.props.currentHashtagName});
                                    });
                        });
                }
                else {
                    bumpHashtagMutation({variables: {currentHashtag: this.props.currentHashtagName, bump: this.props.bump}}).
                        then(
                            () => {
                                hashtagQuery.refetch({name: this.props.currentHashtagName});
                            });
                }
            });
    }

    componentWillUpdate() {
        const hashtagQuery = this.props.hashtagQuery;
        
        hashtagQuery.refetch({name: this.props.currentHashtagName});
    }

    render() {
        let count = 0;
        
        if(this.props.hashtagQuery.hashtag) {

            count = this.props.hashtagQuery.hashtag[`${this.props.bump}Count`];
        }
        
        return (
                <button>
                <h1>{count}</h1>
                <img src={imageLookup(this.props.bump)} onClick={this.handleClick} />
                </button>
        );
    }
}

export default compose(
    connect(state => ({ currentHashtagName: state.currentHashtagName })),
    hashtagQuery,
    bumpHashtagMutation,
    addHashtagMutation
)(BumpButton);
