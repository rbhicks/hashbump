import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setCurrentHashtag } from '../store/actions';

const mutation = gql`
  mutation bumpHashtag($currentHashtag: String!, $bump: String!) {
    bumpHashtag(name: $currentHashtag, bump: $bump) {
      name
      yayCount
      grrrCount
      dunnoCount
      mehCount
    }
  }
`;

@connect(state => ({ currentHashtag: state.currentHashtag }))
@graphql(mutation)
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
        const count = `${this.props.bump}Count`;

        this.props.mutate(this.props.currentHashtag, count);
    }

    render() {
        return (
                <button><img src={this.imageLookup[this.props.bump]} onClick={this.handleClick} /></button>
        );
    }
}

export default BumpButton;
