import React from "react";
import Post from "../Components/Post/Post";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePosts } from "../Redux/slices/posts";
//test data мають бути через props
// import posts from "../testData/posts.json";

const PostPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  console.log(post);
  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOnePosts(id));
    // dispatch(fetchOnePosts("645e6b5d97af508141f677b1"));
    // dispatch(fetchPosts());
  }, [dispatch]);

  //const post = filterPostsById(posts, id);
  const status = post.status;

  return (
    <Layout>
      {status === "loading" && <>Loading...</>}
      {status === "loaded" && <Post post={post} />}
    </Layout>
  );
};

export default PostPage;
