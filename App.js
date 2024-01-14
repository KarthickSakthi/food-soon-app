const heading = React.createElement("h1",{id:"heading",xyz:"tag"},"hello world from react");
const container = React.createElement("div",{id:"parent",xyz:"tag"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 second tag")])] , 
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 second tag")])]);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

