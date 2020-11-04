import React, { Component } from "react";

import PropTypes from "prop-types";

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
  }
  handleName(event) {
    event.preventDefault();
    alert(this.props.name);
  }
  render() {
    return (
      <div>
        <img
          className="image"
          src={this.props.myimg}
          alt="myimage"
          onClick={this.handleName}
        />
      </div>
    );
  }
}
ProfileComponent.defaultProps = {
  name: "Hboub ",
};
ProfileComponent.propTypes = {
  name: PropTypes.string,
};