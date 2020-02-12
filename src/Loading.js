import React from "react";
import Loader from "./Loader";

const Loading = Component => {
  return props => {
    return props.Loading ? <Loader /> : <Component {...props} />;
  };
};

export default Loading;
