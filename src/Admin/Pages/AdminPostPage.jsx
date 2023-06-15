import React from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "../AddPost/AddPost";
import styled, { css } from "styled-components";
import { fetchPosts } from "../../Redux/slices/posts";
import PostTable from "../PostTable/PostTable";
const AdminPostPage = () => {
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    // dispatch(fetchProducts());
    dispatch(fetchPosts());
  }, [dispatch]);

  const [activeBlocks, setActiveBlocks] = useState([false, false, false]);

  const toggleBlock = (blockNumber) => {
    setActiveBlocks((prevActiveBlocks) => {
      const newActiveBlocks = [...prevActiveBlocks];
      newActiveBlocks[blockNumber] = !prevActiveBlocks[blockNumber];
      return newActiveBlocks;
    });
  };

  console.log(posts);
  return (
    <>
      <LayoutAdmin>
        {posts.status === "loaded" ? (
          <>
            <Container>
              <LabelBlock>
                <Label onClick={() => toggleBlock(0)}>Додати пост</Label>
                <Label
                  onClick={() => {
                    toggleBlock(1);
                  }}>
                  Всі пости
                </Label>
              </LabelBlock>

              {activeBlocks[0] && (
                <Block $active={activeBlocks[0]}>
                  <AddPost />
                </Block>
              )}

              {activeBlocks[1] && (
                <Block $active={activeBlocks[1]}>
                  <PostTable posts={posts} />
                </Block>
              )}
            </Container>
          </>
        ) : (
          <Container>
            <Block>Loading ....</Block>
          </Container>
        )}
      </LayoutAdmin>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: grey;
  min-height: 100vh;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
  min-height: 50vh;
  width: 100vw;
  border-bottom: 1px solid black;
  display: none;
  opacity: 0;
  transition: opacity 3s ease;

  ${(props) =>
    props.$active &&
    css`
      display: block;
      transition: opacity 3s ease;
      opacity: 1;
    `}
`;

const LabelBlock = styled.div`
  margin-top: 10px;
  font-size: 24px;
`;
const Label = styled.button`
  color: white;
  color: black;
  font-size: 24px;
  &:hover {
    color: #007bff;
  }
`;

// const Text = styled.p`
//   color: black;
//   text-decoration: none;
//   display: block;
//   &:hover {
//     color: #007bff;
//   }
// `;

// const Btn = styled.button`
//   color: red;
//   text-decoration: none;
//   &:hover {
//     color: #007bff;
//   }
// `;
export default AdminPostPage;
