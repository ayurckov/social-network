import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state from './redux/state';


rerenderEntireTree(state);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App state={state} addPost={addPost} />
//     </BrowserRouter>
//   </React.StrictMode>
// ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
