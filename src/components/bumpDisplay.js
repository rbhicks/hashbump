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
                    <div style={{
                        height: "5vh",
                        width: "100vw",
                        marginTop: "1vh",
                        marginBottom: "1vh",
                    }}>
                    <svg version="1.1" style={{height: "100%"}} viewBox="0 0 96 96">
                    <g id="yay" display={this.props.bump == "yay" ? "inline-block" : "none"}>
                    <path d="M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <g>
                    <g>
                    <path d="M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z" style={{fill: "#8845AD"}}/>
                    </g>
                    <g>
                    <path d="M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z" style={{fill:"#8845AD"}}/>
                    </g>
                    </g>
                    <path d="M72.594,60.545 C60.612,84.509 36.3,84.494 24.486,60.525" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    </g>
                    <g id="grrr" display={this.props.bump == "grrr" ? "inline-block" : "none"}>
                    <path d="M48.54,93.5 C23.687,93.5 3.54,73.353 3.54,48.5 C3.54,23.647 23.687,3.5 48.54,3.5 C73.393,3.5 93.54,23.647 93.54,48.5 C93.54,73.353 73.393,93.5 48.54,93.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M72.487,77.332 C84.376,46.657 12.746,46.391 24.497,77.291" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <g>
                    <g>
                    <path d="M35.233,45.69 C30.814,45.69 25.607,33.807 25.607,29.388 C25.607,24.97 30.814,29.69 35.233,29.69 C39.651,29.69 43.233,33.272 43.233,37.69 C43.233,42.109 39.651,45.69 35.233,45.69 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M35.29,43.621 C34.036,43.621 33.019,42.604 33.019,41.35 C33.019,40.097 34.036,39.08 35.29,39.08 C36.544,39.08 37.56,40.097 37.56,41.35 C37.56,42.604 36.544,43.621 35.29,43.621 z" style={{fill:"#8845AD"}}/>
                    </g>
                    <g>
                    <path d="M61.767,45.69 C66.186,45.69 71.393,33.807 71.393,29.388 C71.393,24.97 66.186,29.69 61.767,29.69 C57.349,29.69 53.767,33.272 53.767,37.69 C53.767,42.109 57.349,45.69 61.767,45.69 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M60.71,43.621 C61.964,43.621 62.981,42.604 62.981,41.35 C62.981,40.097 61.964,39.08 60.71,39.08 C59.456,39.08 58.44,40.097 58.44,41.35 C58.44,42.604 59.456,43.621 60.71,43.621 z" style={{fill:"#8845AD"}}/>
                    </g>
                    </g>
                    </g>

                    <g id="dunno" display={this.props.bump == "dunno" ? "inline-block" : "none"}>
                    <path d="M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M55.789,72.839 C55.949,62.268 25.613,68.799 25.899,55.218" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 36.884,34.521 36.884,38.939 C36.884,43.358 28.918,40.5 24.5,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M21.254,34.54 C19.321,34.54 17.754,32.973 17.754,31.04 C17.754,29.107 19.321,27.54 21.254,27.54 C23.187,27.54 24.754,29.107 24.754,31.04 C24.754,32.973 23.187,34.54 21.254,34.54 z" style={{fill:"#8845AD"}}/>
                    <path d="M67.136,40.5 C62.718,40.5 59.136,36.918 59.136,32.5 C59.136,28.082 62.718,24.5 67.136,24.5 C71.555,24.5 79.521,34.521 79.521,38.939 C79.521,43.358 71.555,40.5 67.136,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M63.891,34.54 C61.958,34.54 60.391,32.973 60.391,31.04 C60.391,29.107 61.958,27.54 63.891,27.54 C65.824,27.54 67.391,29.107 67.391,31.04 C67.391,32.973 65.824,34.54 63.891,34.54 z" style={{fill:"#8845AD"}}/>
                    </g>
                    <g id="meh" display={this.props.bump == "meh" ? "inline-block" : "none"}>
                    <path d="M48.5,93.5 C23.647,93.5 3.5,73.353 3.5,48.5 C3.5,23.647 23.647,3.5 48.5,3.5 C73.353,3.5 93.5,23.647 93.5,48.5 C93.5,73.353 73.353,93.5 48.5,93.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M70.681,59.458 C66.551,61.225 24.128,58.624 21.955,58.867" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <g>
                    <g>
                    <path d="M30.918,29.723 L18.082,29.56" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <g>
                    <path d="M24.5,40.5 C20.082,40.5 16.5,36.918 16.5,32.5 C16.5,28.082 20.082,24.5 24.5,24.5 C28.918,24.5 32.5,28.082 32.5,32.5 C32.5,36.918 28.918,40.5 24.5,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M24,34.27 C22.746,34.27 21.73,33.254 21.73,32 C21.73,30.746 22.746,29.73 24,29.73 C25.254,29.73 26.27,30.746 26.27,32 C26.27,33.254 25.254,34.27 24,34.27 z" style={{fill:"#8845AD"}}/>
                    </g>
                    </g>
                    <g>
                    <path d="M78.918,29.723 L66.082,29.56" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <g>
                    <path d="M72.5,40.5 C68.082,40.5 64.5,36.918 64.5,32.5 C64.5,28.082 68.082,24.5 72.5,24.5 C76.918,24.5 80.5,28.082 80.5,32.5 C80.5,36.918 76.918,40.5 72.5,40.5 z" style={{fillOpacity: "0", stroke: "#8845AD", strokeWidth:"5"}}/>
                    <path d="M72,34.27 C70.746,34.27 69.73,33.254 69.73,32 C69.73,30.746 70.746,29.73 72,29.73 C73.254,29.73 74.27,30.746 74.27,32 C74.27,33.254 73.254,34.27 72,34.27 z" style={{fill:"#8845AD"}}/>
                    </g>
                    </g>
                    </g>
                    </g>
                    </svg>
                    <h1 style={{
                        display: "inline-block",
                        paddingLeft: "0.5vw",
                    }}>#{this.props.topCountQuery.topCount.name}:&ensp;{this.props.topCountQuery.topCount.count}</h1>
                    </div>
            );
        }
    }
}

export default compose(
    topCountQuery
)(BumpDisplay);
