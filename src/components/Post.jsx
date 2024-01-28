import PropTypes from "prop-types";
import React from "react";
import classis from "./Post.module.css";

const names = ["Maximilian", "Manuel"];

const Post = ({ author, body }) => {
  console.log(typeof body);
  return (
    <div className={classis.post}>
      <p>{author ?? "-"}</p>
      <p>{body ?? "-"}</p>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.any,
};

export default Post;
