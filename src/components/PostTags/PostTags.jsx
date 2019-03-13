import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Tag from "./Tag";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Tag>{tag}</Tag>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
