import React from "react";
import Post from "../Components/Post/Post";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePosts, fetchPosts } from "../Redux/slices/posts";
import Loader from "../Components/Loader/Loader";

const PostPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOnePosts(id));
    dispatch(fetchPosts());
  }, [dispatch]);

  const status = post.status;

  return (
    <Layout>
      {status === "loading" && <Loader />}
      {status === "loaded" && <Post post={post} posts={posts} />}
    </Layout>
  );
};

export default PostPage;
