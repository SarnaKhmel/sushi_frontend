import React from "react";
import Layout from "../Layout/Layout";
const ErrorPage = ({ error }) => {
  return (
    <Layout>
      <h2 style={{ top: 200, backgroundColor: "lightblue" }}>Error</h2>
      {error}
    </Layout>
  );
};

export default ErrorPage;
