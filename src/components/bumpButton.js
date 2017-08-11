import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtag } from '../store/actions';

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
`);

class BumpButton extends React.PureComponent {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);

        this.imageLookup = {yay: "../hashbump-yay.svg",
                            grrr: "../hashbump-grrr.svg",
                            dunno: "../hashbump-dunno.svg",
                            meh: "../hashbump-meh.svg"};
    }
    
    handleClick() {
        this.props.mutate({variables: {currentHashtag: this.props.currentHashtag.name, bump: this.props.bump}}).
            then(
                dataObject => {
                    this.props.dispatch(setCurrentHashtag(dataObject.data.bumpHashtag));
                });
    }

    render() {
        return (
                <button>
                <h1>{this.props.currentHashtag[`${this.props.bump}Count`]}</h1>
                <img src={this.imageLookup[this.props.bump]} onClick={this.handleClick} />
                </button>
        );
    }
}

export default compose(
    connect(state => ({ currentHashtag: state.currentHashtag })),
    bumpHashtagMutation,
)(BumpButton);
