import React from "react";
import { DotSpinner } from "@uiball/loaders";

function Loader() {
  return(
    <div className="justify-content-center d-flex">
        <DotSpinner size={100} speed={0.9} color="red"/>
    </div>
  )
}

export default Loader;
