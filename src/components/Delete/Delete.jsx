import React from "react";
import "../Delete/Delete.style.css"
function Delete( { handelDelet , showMsg , handelShowDisMsg}) {
    
    
    return(
        <div style={{display:showMsg}} className='Delete'>
            
            <div><p>do you Delete contact?</p></div>
            <div>
                <button onClick={handelDelet}>Yes</button>
                <button onClick={handelShowDisMsg}>No</button>
            </div>
      </div> 
    )
}
export default Delete
