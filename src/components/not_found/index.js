import React from "react";
class NotFound extends React.Component {
  render() {
    window.location.href = "#";
    return <div>404</div>;
  }
}

export default NotFound;
