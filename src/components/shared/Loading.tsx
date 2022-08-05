import React from "react";
interface loadingProps {
    text? : string
}
export const Loading = (loadingProps : loadingProps)  => {

    return(<div style={{display:"flex"}}>{loadingProps.text}<div className="lds-loading"><div></div><div></div><div></div></div></div>)
}