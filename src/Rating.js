import React from "react";

function rating(s) {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= s) arr.push(<span className="fa fa-star checked" />);
    else arr.push(<span className="fa fa-star " />);
  }
  return arr;
}
const Rating = props => <div>{rating(props.rate)}</div>;

export default Rating;
