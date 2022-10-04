import React from "react";
import "../Delete/Delete.style.css"
function Delete( { handelDelet , showMsg , handelShowDisMsg}) {
    
    
    return(
        <div style={{display:showMsg}} className='Delete'>
            
            <div>are yoy Delet contact?</div>
            <div>
                <button onClick={handelDelet}>Yes</button>
                <button onClick={handelShowDisMsg}>No</button>
            </div>
      </div> 
    )
}
export default Delete