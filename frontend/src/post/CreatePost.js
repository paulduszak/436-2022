import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useResource } from "react-request-hook";

import { StateContext } from "../contexts";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const [post, createPost] = useResource(({ title, content, author }) => ({
    url: "/posts",
    method: "post",
    data: { title, content, author },
  }));

  // ensure the newly created post didn't return an error, handle if it did
  // useEffect(() => {
  //   if (post?.data?.error) {
  //     setError(true)
  //     //alert(post.data.error.code);
  //   }
  // }, [post]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost({ title, content, author: user });
        dispatch({
          type: "CREATE_POST",
          title,
          content,
          author: user,
          id: uuidv4(),
        });
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
}
