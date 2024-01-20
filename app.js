import React from "react";
import ReactDOM from "react-dom/client";

// Single div rendering
// const heading = React.createElement("h1", {id:"head1"}, "Hello World Maa sarala");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ***** nested html rendering ****/

// Create element
const parent = React.createElement
    (
        "div",
        { id: "parent" },
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement(
                "h1",
                {id : "head1"},
                "Namaste Maa Sarala"
            ),
            React.createElement(
                "h2",
                {id : "head2"},
                "Namaste Maa Sarala h2"
            )
            ]
        )
    );

// create root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);