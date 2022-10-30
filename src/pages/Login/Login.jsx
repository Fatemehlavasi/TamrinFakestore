
import '../Login/Login.style.scss'
// import {Link} from "react- router-dom";

const Login = ()=>{

  
    const hadelSabt = ()=>{
        alert("شما با موفقیت وارد شدید")
    }
    return(
        <div  className="InputLogin">
            <p>فرم ورود</p>
            <div className='Inputs' >
            <label className='lableinput'>نام کاربری :</label>
            <input type={"text"} />
            <label>رمز عبور :</label>
            <input type={"text"} />
            </div>
            <button onClick={hadelSabt}> ثبت </button>  
         
           
   
            
        </div>
    );
}


export default Login;