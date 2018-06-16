import React, { Component } from "react";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <ul id="users-listing">
          {this.state.users.map( (user, index) => {
            return (
              <li key={index}>
                <img src={user.avatar} alt={user.first_name + ' ' + user.last_name} width="80" height="80" />
                <label>{user.first_name + ' ' + user.last_name}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
