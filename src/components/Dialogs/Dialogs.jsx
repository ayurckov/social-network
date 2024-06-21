import React from "react";
import stylles from "./Dialogs.module.css"; 
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData.map((el) => <Message message={el.message} /> )

    let newMessageBody = props.newMessageBody;


    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    // let newMessageElement = React.createRef();

    // let addMessages = () => {
    //   let text = newMessageElement.current.value;
    //   alert(text);
    // }

  return (
    <div className={stylles.dialogs}>
      <div className={stylles.dialogsItems}>
        {dialogsElements}

      </div>
      <div className={stylles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={ newMessageBody }
                         onChange={ onNewMessageChange }
                         placeholder="enter your message"></textarea></div>
          <div><button onClick={ onSendMessageClick }>send</button></div>
        </div>
        
        {/* <textarea ref={ newMessageElement } cols="30" rows="10"></textarea>
        <div className="addMessage">
        <button onClick={ addMessages }>add</button>
        </div> */}
      </div>
      
    </div>
  );
};

export default Dialogs;
