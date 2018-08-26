import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Hope New",
        email: "Jdoe@gmail.com",
        phone: "+37124226"
      },
      {
        id: 2,
        name: "Hope Old",
        email: "hold@gmail.com",
        phone: "+371243266"
      },
      {
        id: 3,
        name: "Henry Jonson",
        email: "HJonson@gmail.com",
        phone: "+371245836"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
