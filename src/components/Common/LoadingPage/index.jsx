import { Spin } from "antd";
import { useEffect } from "react";

const LoadingPage = () => {
  useEffect(() => {
    console.log(`LoadingPage...`);
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        margin: "auto",
        marginTop: "30%",
      }}
    >
      <Spin tip="Loading Page ..." size="medium"></Spin>
    </div>
  );
};
export default LoadingPage;
