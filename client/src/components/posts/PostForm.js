import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const propTypes = {
  addPost: PropTypes.func.isRequired
};

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form class="form my-1" onSubmit={e => onSubmit(e)}>
        <textarea
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type="submit" value="Submit" class="btn btn-dark my-1" />
      </form>
    </div>
  );
};

PostForm.propTypes = propTypes;

export default connect(
  null,
  { addPost }
)(PostForm);
