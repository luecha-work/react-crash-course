import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home...");
  }, []);

  return (
    <div>
      <h1>home page</h1>
    </div>
  );
};

export default Home;
