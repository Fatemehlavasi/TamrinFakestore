import React , {useState} from 'react'
import '../Contactus/Contactus.style.scss'


const Contactus = () => {
 
    const [form , setForm] = useState([
        {
            name:"",
            phone:"",
         
        }
    ])
        const SubmitForm = (e)=>{
   
            e.preventDefault();
            alert("به زودی با شما تماس خواهیم گرفت از صبر شما متشکریم");
            setForm({...form , name:"" , phone:"" })
        }
   
        const handelSend = (e)=>{
        setForm({...form , [e.target.name]: e.target.value});
        }
   
       return(
           <div  className='Contacts'>
               <h2>
                   شما می توانید با ما در ارتباط باشید 
               </h2>
               <p>
                 به زودی با شما تماس خواهیم گرفت از صبر شما متشکریم 
               </p>
               <form onSubmit={SubmitForm} >
                <label>نام و نام خانوادگی </label>
                <input value={form.name} onChange={handelSend}/>
                <label>شماره تماس </label>
                <input value={form.phone} onChange={handelSend}/>
         
                  
                   <button type={'submit'}>ثبت </button>
               </form>
           </div>
       )
  
}

export default Contactus