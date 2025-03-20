import { CreatePost } from "./components/CreatePost";
import Post from "./components/Post";
import { LayoutCenter } from "./layout/LayoutCenter";

function App() {
  return (
    <>
      <LayoutCenter>
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
      </LayoutCenter>
    </>
  );
}

export default App;
