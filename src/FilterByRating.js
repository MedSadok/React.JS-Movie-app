import React, { Component } from "react";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
      tmp_rating: null
    };
  }
  onClickRate = i => {
    this.props.getRating(i);
    this.setState({
      rating: i
    });
  };
  render() {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      star.push(
        <span
          className={
            this.state.rating >= i ? "fa fa-star checked" : "fa fa-star"
          }
          onClick={this.onClickRate.bind(this, i)}
        />
      );
    }
    return star;
  }
}
export default Rating;
