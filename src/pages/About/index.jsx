import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("About...");
  }, []);
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
