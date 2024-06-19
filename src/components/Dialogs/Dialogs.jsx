import React from "react";
import stylles from "./Dialogs.module.css"; 
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData.map((el) => <Message message={el.message} /> )

    let newMessageElement = React.createRef();

    let addMessages = () => {
      let text = newMessageElement.current.value;
      alert(text);
    }

  return (
    <div className={stylles.dialogs}>
      <div className={stylles.dialogsItems}>
        {dialogsElements}

        
      </div>
      <div className={stylles.messages}>
        {messagesElements}
        
        <textarea ref={ newMessageElement } cols="30" rows="10"></textarea>
        <div className="addMessage">
        <button onClick={ addMessages }>add</button>
        </div>
      </div>
      
    </div>
  );
};

export default Dialogs;
