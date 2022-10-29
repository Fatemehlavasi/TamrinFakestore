import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Delete from '../Delete/Delete';
import '../Card/Cart.style.css'
const Card = ({ setForm, setFormStatus, setTodos, todos, todo}) => {

    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    console.log(handelCheck)
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    
//  Delete

    const [showMsg, setShowMag] = useState('none');
    const [user, setuser] = useState('0')

    const handelDelet = () => {
        setTodos(todos.filter(todo => todo.user !== user))
        handelShowDisMsg()

    }
    const handelShowMsg = user => {
        setShowMag('flex')
        setuser(user)

    }
    const handelShowDisMsg = () => {
        setShowMag('none')
    }
    // del

    return (
        <>
        
        <div className='cart'>

            <div className='cart-user'>
            <div className='cart-delete'>
                <Delete handelDelet={handelDelet} showMsg={showMsg} handelShowDisMsg={handelShowDisMsg} />
            </div>
                    <Link to={`/contacts/${todo.user}`}>
                        <img style={{ width: '50px' }} src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`} alt="avatar" />
                    </Link>


                {/* <div>
                    <h5>{todo.user}</h5>
                </div> */}
                <div className='hide-name'>
                    <h4>{todo.name}</h4>
                </div>
                <div className="favorait">
                    <h4>{todo.lastName}</h4>
                </div>
                <div className='hide-phone'>
                    <h4>{todo.phone}</h4>
                </div>
               
                <div className='hide-age'>
                    <h4>{todo.age}</h4>
                </div>
                <div className='hide-Country'>
                    <h4> {todo.Country}</h4>
                </div>
                <div className='hide-City'>
                    <h4>{todo.City}</h4>
                </div>
                <div className='hide-email'>
                    <h4>{todo.email}</h4>
                </div>
                <div onClick={() => handelCheck(todo.user)}  >
                    <h4>{todo.state ? <i class="fa-solid fa-heart text-danger" ></i> : <i  class="fa-regular fa-heart " ></i>}</h4>
                </div>
                <div className='btn-del'>
                    <button onClick={() => handelShowMsg(todo.user)}>
                       <span>delete</span> 
                    </button>
                    <Link to={`/Form`}>
                        <button onClick={() => handleUpdate(todo)}>
                           <span>Update</span> 
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
};

export default Card;