import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE"
      });
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 border-info ">
              <div className="card-body">
                <h4 className="card-title text-center">
                  {name}
                  <i
                    onClick={this.onShowClick}
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "#17a2b8"
                    }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        padding: " 0 30px 0  0",
                        cursor: "pointer",
                        float: "right",
                        color: "#17a2b8"
                      }}
                    />
                  </Link>
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
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
