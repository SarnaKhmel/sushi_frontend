import React from "react";
import { Block, PostBlock, TitleBlock, Image } from "./Post.styled";
const Post = ({ post }) => {
  console.log(post);
  const { title, text, picture } = post[0];
  return (
    <Block>
      <PostBlock>
        post
        {/* <Image src={picture} alt={name} />
        <TitleBlock>
          <h2>{name}</h2>
          <p>{text}</p>
        </TitleBlock> */}
      </PostBlock>
    </Block>
  );
};

export default Post;
