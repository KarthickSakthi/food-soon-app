/**
 * HMR - Hot Module Replacement
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
 * Tree shaking - Removing unwanted code
 * 
 * Transitive dependency
*/
import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = ()=>(<div><h1>Namaste</h1></div>) // react Element
const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = ()=>(
    <div>
    {Title()}
    <h1>Heading Component</h1>
    </div>
)
root.render(<HeadingComponent/>);

