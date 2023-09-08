import React, { useState } from "react";
import {
  Block,
  PostBlock,
  TitleBlock,
  Image,
  ArrowBlock,
  ImageBlock,
  ImageBlockMobile,
  ArrowBlockM,
} from "./Post.styled";
import { baseUrl } from "../../Utils/baseUrl";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Post = ({ post, posts }) => {
  const combinedPosts = [post, ...posts.items];

  const uniqueArray = combinedPosts.filter(
    (item, index, array) =>
      index === array.findIndex((element) => element._id === item._id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextPost = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const goToPreviousPost = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const currentPost = uniqueArray[currentIndex];

  if (!currentPost) {
    setCurrentIndex(0);
    return;
  }

  const { title, text, imageUrl } = currentPost;

  return (
    <Block>
      <PostBlock>
        <ImageBlock>
          <Image src={`${baseUrl}${imageUrl}`} alt={title} loading="lazy" />
        </ImageBlock>
        <ImageBlock>
          <ArrowBlock onClick={goToPreviousPost}>
            <AiOutlineArrowLeft />
          </ArrowBlock>
          <ArrowBlock onClick={goToNextPost}>
            <AiOutlineArrowRight />
          </ArrowBlock>
        </ImageBlock>
        <TitleBlock>
          <h2>{title}</h2>
          <p>{text}</p>
        </TitleBlock>
      </PostBlock>
    </Block>
  );
};

export default Post;
