import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {}, "I am an H1");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)