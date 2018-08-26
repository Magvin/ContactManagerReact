import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = e => {
    const showInfo = document.querySelector(".list-group");
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card mb3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title text-center">
            {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
          </h4>
          {showContactInfo ? null : (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
