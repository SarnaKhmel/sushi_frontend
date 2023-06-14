import React from "react";
import { Block, PostBlock, TitleBlock, Image } from "./Post.styled";
const Post = ({ post }) => {
  console.log(post);
  const { title, text, imageUrl } = post;
  return (
    <Block>
      <PostBlock>
        <Image src={imageUrl} alt={title} />
        <TitleBlock>
          <h2>{title}</h2>
          <p>{text}</p>
        </TitleBlock>
      </PostBlock>
    </Block>
  );
};

export default Post;
