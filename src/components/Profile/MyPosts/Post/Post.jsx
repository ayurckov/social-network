import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src="https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj" alt="#" />
        {props.message}
        <div>{props.likes} likes</div>
      </div>
      
    );
}

export default Post;