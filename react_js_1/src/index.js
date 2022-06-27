import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: "1", name: "Pasha" },
  { id: "2", name: "Masha" },
  { id: "3", name: "Pupa" },
  { id: "4", name: "Lupa" },
  { id: "5", name: "Galagala" }
];

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "Fine!" }
];

let postDate = [
  { id: "1", message: "Всем хорошего дня!", likeCount: "44" },
  { id: "2", message: "С днем города!", likeCount: "13" },
  {
    id: "3",
    message: "Не всех можно потерять, но всех можно забыть :(",
    likeCount: "4",
  },
  { id: "4", message: "Abgegfgfe", likeCount: "0" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postDate={postDate}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
