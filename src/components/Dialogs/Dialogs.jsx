import React from "react";
import stylles from "./Dialogs.module.css"; 
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData.map((el) => <Message message={el.message} /> )

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
