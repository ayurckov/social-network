import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
       postsData={props.postsData}
       dispatch={props.dispatch} 
       newPostText={props.newPostText} />
    </div>
    
  );
};

export default Profile;
