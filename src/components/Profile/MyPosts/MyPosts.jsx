import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";



const MyPosts = (props) => {
  let postElement = props.postsData.map((p) => <Post message={p.message} likes={p.likes}/>)


  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    // props.addPost();
    // props.updateNewPostText('');
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''));

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));

  }

  return (
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement} cols="30" rows="10" value={props.newPostText} 
        onChange={onPostChange} />
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
