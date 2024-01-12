import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'It\'s my second post', likes: 1},
    {id: 2, message: 'It\'s my first post', likes: 23 }
  ]

  let postElement = postsData.map((p) => <Post message={p.message} likes={p.likes}/>)

  return (
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="buttons">
          <button>Add post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div>
        <h3>New post</h3>
      </div>
        { postElement }
    </div>
  );
};

export default MyPosts;
