import React, { Component } from "react";
import "./UserLinks.css";
import UserLink from "./UserLink";

class UserLinks extends Component {
  getLinkElements() {
    const {
      config: { userLinks }
    } = this.props;
    return userLinks.map(link => (
      <li key={link.label}>
        <UserLink href={link.url}>{link.label}</UserLink>
      </li>
    ));
  }

  render() {
    const {
      config: { userLinks }
    } = this.props;
    if (!userLinks) {
      return null;
    }
    return (
      <article>
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
          {this.getLinkElements()}
        </ul>
      </article>
    );
  }
}

export default UserLinks;
