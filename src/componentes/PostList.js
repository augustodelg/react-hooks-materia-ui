import { Fragment } from "react";
import { Post } from "./Post";

// DEPRECATED

export const PostList = ({ posts }) => {
  return (
    <Fragment>
      {posts.map((aPost) => (
        <Post key={aPost.id} {...aPost} />
      ))}
    </Fragment>
  );
};
