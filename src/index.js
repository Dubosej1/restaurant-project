import "./style.css";
import "./sass/style.scss";

import React from "react";
import ReactDOM from "react-dom";

function Root() {
    return <h1>Hello, world.</h1>;
}

ReactDOM.render(<Root />, document.getElementById("root"));
