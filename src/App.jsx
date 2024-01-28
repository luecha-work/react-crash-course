import { useState } from "react";
import Post from "./components/Post";

const add = (a, b) => {
  return a + b;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
      <Post author="Test" body={1} />
      <Post />
    </main>
  );
}

export default App;
