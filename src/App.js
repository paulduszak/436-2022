import UserBar from "./user/UserBar";
import PostList from "./post/PostList";

function App() {
  const posts = [
    {
      title: "My first post",
      content: "Some content",
      author: "Paul",
    },
    {
      title: "My second post",
      content: "Some content",
      author: "Paul",
    },
  ];

  return (
    <div>
      <UserBar />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
