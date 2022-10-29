import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Page/CardView.styles.css';
const CardView = ({ todos }) => {

    const [contact, setContact] = useState({})
    const { user } = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user === Number(user))[0])
    }, [])

    return (
        <div className='Container'>
            <div className='Viwecard'>
                    <div className='imag'  >
                        <img  src={`https://avatars.dicebear.com/api/avataaars/:${contact.user}.svg`} alt="avatar" />
                    </div>
                    <div className='Card-Body' >
                    
                        <div class="card-body" >
                            <h5>name : {contact.name}</h5>
                        </div>
                        <div class="card-body" >
                            <h5>lastName : {contact.lastName}</h5>
                        </div>
                        <div class="card-body" >
                            <h5> phone : {contact.phone}</h5>
                        </div>
                        <div class="card-body"  style={{ cursor: 'pointer' }}>
                            <h5>state : {contact.state ?  <i class="fa-solid fa-heart text-danger" ></i> : <i  class="fa-regular fa-heart " ></i>}</h5>
                        </div>
                        <div class="card-body" >
                            <h5>age : {contact.age}</h5>
                        </div>
                        <div class="card-body" >
                            <h5> Country : {contact.Country}</h5>
                        </div>
                        <div class="card-body" >
                            <h5>City : {contact.City}</h5>
                        </div>
                        <div class="card-body" >
                            <h5> Email :{contact.email}</h5>
                        </div>
                    </div>
                    <Link to={'/'}>
                    <button className='btnview'>
                        <i class="fa-solid fa-arrow-left"></i> Home
                    </button>
                </Link>
                </div>
           
            

        </div>

    );
};

export default CardView;