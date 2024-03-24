import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElement = props.postsData.map((p) => <Post message={p.message} likes={p.likes}/>)


  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement} cols="30" rows="10"></textarea>
        <div className="buttons">
          <button onClick={ addPost }>Add post</button>
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
