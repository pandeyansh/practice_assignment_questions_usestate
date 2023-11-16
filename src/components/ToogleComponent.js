import { useState } from "react";
function ToogleComponent () {
    const[IsShown,setIsShown]=useState(false);
    const toggleState = ()=>{
        setIsShown (!IsShown);
    };
    return(
        <div>
            {IsShown ? (
                <div>
                    <h2>Content is Visible</h2>
                    <button onClick={toggleState}>Hide</button>
        </div>
    ) : (
        <div>
            <h2>Content is Hidden</h2>
            <button onClick={toggleState}>Show</button>
        </div>
    )}
    </div>
    );
}
export default ToogleComponent;