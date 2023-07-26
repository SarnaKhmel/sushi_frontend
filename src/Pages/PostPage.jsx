import React from "react";
import Post from "../Components/Post/Post";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePosts } from "../Redux/slices/posts";

const PostPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOnePosts(id));
  }, [dispatch]);

  const status = post.status;

  return (
    <Layout>
      {status === "loading" && <>Loading...</>}
      {status === "loaded" && <Post post={post} />}
    </Layout>
  );
};

export default PostPage;
