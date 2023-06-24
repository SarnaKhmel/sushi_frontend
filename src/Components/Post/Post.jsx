import React from "react";
import { Block, PostBlock, TitleBlock, Image } from "./Post.styled";
import { baseUrl } from "../../Utils/baseUrl";
const Post = ({ post }) => {
  const { title, text, imageUrl } = post;

  console.log(post);
  console.log(`${baseUrl}${imageUrl}`);
  return (
    <Block>
      <PostBlock>
        <Image src={`${baseUrl}${imageUrl}`} alt={title} />
        <TitleBlock>
          <h2>{title}</h2>
          <p>{text}</p>
        </TitleBlock>
      </PostBlock>
    </Block>
  );
};

export default Post;
