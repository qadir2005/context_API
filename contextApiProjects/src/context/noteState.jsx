import { Children } from "react";
import noteContext from "./noteContext";

const noteState = (props)=>{

    const abc = {
        name:"Abdul Qadir",
        age : 19,
    }

    return(

        <noteContext.Provider value={abc}>
        {props.children}
    </noteContext.Provider>
    )
}
export default noteState; 