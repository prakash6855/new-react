import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hiii there</h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click to visit google",
// };
// const anotherElement = (
//   <a href="https://google.com" target="blank">
//     Visit google
//   </a>
// );

const anotherUser=" Virtual user";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to enter to google website",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // ReactElement
  // </React.StrictMode>,
  // <MyApp/>
    ReactElement
);
