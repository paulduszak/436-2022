import { useContext } from "react";

import Post from "./Post";
import { StateContext } from "../contexts";

export default function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;
  return (
    <div>
      {posts.map((p, i) => (
        <Post {...p} key={p.id} />
      ))}
    </div>
  );
}