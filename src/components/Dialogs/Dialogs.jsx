import React from "react";
import stylles from "./Dialogs.module.css"; 
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsData = [
        {name: 'Sasha', id: 1},
        {name: 'Andrew', id: 2},
        {name: 'Vladimir', id: 3},
        {name: 'Roman', id: 4},
        {name: 'Gleb', id: 5}
    ]

    let messagesData = [
        {message: 'Sup!', id: 1},
        {message: 'What are you doing right now?', id: 2},
        {message: 'See again', id: 3},
    ]

    let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData.map((el) => <Message message={el.message} /> )

  return (
    <div className={stylles.dialogs}>
      <div className={stylles.dialogsItems}>
        {dialogsElements}

        
      </div>
      <div className={stylles.messages}>
        {messagesElements}

      </div>
    </div>
  );
};

export default Dialogs;
