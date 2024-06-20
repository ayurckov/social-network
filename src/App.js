import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { addPost } from './redux/state';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Dialogs' element={<Dialogs 
            dialogsData={props.state.messagesPage.dialogsData} 
            messagesData={props.state.messagesPage.messagesData} />} />
          <Route path='/Profile' element={<Profile 
          postsData={props.state.profilePage.postsData} 
          addPost = {props.addPost}
          newPostText = {props.state.profilePage.newPostText}
          updateNewPostText = {props.updateNewPostText} />} />
          
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
    );
}

export default App;
