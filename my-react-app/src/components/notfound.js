/* Applyed inline CSS to "h1" tag */

import React from "react";

export default function Not(){
    const style = {
        color : "orange",
        background : "black", 
        border : "4px dashed red"                          
    }
    return(
        <h1 style={style}>Sorry Page Not Found!!!!!</h1>
    );
}