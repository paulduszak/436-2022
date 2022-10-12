import { useState, useEffect, useReducer } from "react";
import { useResource } from "react-request-hook";
import { v4 as uuidv4 } from "uuid";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";

import appReducer from "./reducers";

import { ThemeContext, StateContext } from "./contexts";

function App() {
  const initialPosts = [
    {
      title: "My first post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
    },
    {
      title: "My second post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}’s Blog`;
    } else {
      document.title = "Blog";
    }
  }, [user]);

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  // useEffect(() => {
  //   fetch("/api/themes")
  //     .then((result) => result.json())
  //     .then((themes) => setTheme(themes));
  // }, []);

  // useEffect(() => {
  //   fetch("/api/posts")
  //     .then((result) => result.json())
  //     .then((posts) => dispatch({ type: "FETCH_POSTS", posts }));
  // }, []);

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data });
    }
  }, [posts]);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header title="Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />

          <UserBar />
          <PostList />
          {state.user && <CreatePost />}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
