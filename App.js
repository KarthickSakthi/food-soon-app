/**
 * HMR - Hot Module Reloading
 * File Watcher Algorithm - c++
 * Building
 * Minification
 * Manages Dev and prod build 
 * Superfast building Algorithm
 * Image optimization
 * Caching while development
 * Compression
 * Compatible with older version of browzers
 * it add polyfills
 * HTTPS on dev
 * Manage the port number
 * Consistent hashing algorithms
 * Zero config bundler
 * 
 * Transitive dependency
*/
import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{id:"heading",xyz:"tag"},"hello world from react");
const container = React.createElement("div",{id:"parent",xyz:"tag"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 second tag")])] , 
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am h1 second tag")])]);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

