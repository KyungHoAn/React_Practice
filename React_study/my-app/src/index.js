import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Libray";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

reportWebVitals();
