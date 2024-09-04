import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
  let addPost = () => {
    // let text = newPostElement.current.value;
    // props.addPost();
    // props.updateNewPostText('');
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''));

    // props.dispatch(updateNewPostTextActionCreator(''));

  }

  let onPostChange = (text) => {
    //props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={props.postsData} />);
  // return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} />)
};

export default MyPostsContainer;
