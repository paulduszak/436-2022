import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../contexts";

function Post({ title, content, author }) {
  const { secondaryColor } = useContext(ThemeContext);
  console.log("Post rendered");
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  );
}

export default React.memo(Post);
//export default Post;
