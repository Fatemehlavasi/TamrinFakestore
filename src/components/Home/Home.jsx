import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import Card from '../Card/Card';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import '../Home/Home.style.css'
const Home = ({ todos, setTodos, setForm, setFormStatus }) => {
   
    // search
    const [search, setSearch] = useState('')
    //  filter
    const [filter, setFilter] = useState('allData')
    return (
        <div className='container'>
        <div className='main'>
            <div className='Sidbar'>kkkkkkkk</div>
            <div className='Card-user'>
                <div className='Butoonadd'>
                    <h1>PhoneContect</h1>
                    <Link to={`/Form`}>
                        <button className='btn-adduser'>ADD USER</button>
                    </Link>
                </div>
           
            <Search search={search} setSearch={setSearch} />
           
                <Filter setFilter={setFilter}  />
                <div className='container-card'>
                {/* <Delete handelDelet={handelDelet} showMsg={showMsg} handelShowDisMsg={handelShowDisMsg} /> */}
                {todos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : todo.state === filter)).map(todo => (
                    <Card todo={todo} setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos}  />
                ))}


                
            </div>

            </div>
            </div>
        </div>
    );
};

export default Home;