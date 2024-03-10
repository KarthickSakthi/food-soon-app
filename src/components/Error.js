import React from "react";
import { useRouteError } from "react-router-dom";

export function Error(){
    const error = useRouteError();
    console.log("error",error)
    return <h1>{`Oops! ${error.status} :: ${error.statusText}`}</h1>
}