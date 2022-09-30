import React from "react";
// import Children2 from "./contextChildren2";
import {Consumer} from "./R077_ContextApi";

class contextChildren extends React.Component {
    render() {
        return(
            // <Children2/>
            <Consumer>
                {contextValue=>
                <button onClick={e=> contextValue.setStateFunc("react200")}>
                {contextValue.name}_button
                </button>
                }
            </Consumer>
        )
    }
}

export default contextChildren