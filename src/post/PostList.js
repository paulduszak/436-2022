import Post from "./Post";

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((p, i) => (
        <Post {...p} key={p.id} />
      ))}
    </div>
  );
}
