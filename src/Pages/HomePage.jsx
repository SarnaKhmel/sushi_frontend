import React from "react";
import Test from "../Components/Test";
import Layout from "../Layout/Layout";

import Posts from "../Components/Posts/Posts";
import images from "../testData/posts.json";
const HomePage = () => {
  return (
    <div>
      <Layout>
        <Posts images={images} />
        <Test />
      </Layout>
    </div>
  );
};

export default HomePage;
