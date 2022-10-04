import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../Form/Form.style.css'
import pic from '../../Imags/pic.png'
const Form = ({ setTodos, todos, form, setForm, setFormStatus, FormStatus }) => {
    const back =useNavigate();
    //  start  code form
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        back('/')
        event.preventDefault()
        if (FormStatus === 'add') {
            setTodos([...todos, { user: Math.floor(Math.random() * 1000), name: form.name, lastName: form.lastName, phone: form.phone, age: form.age, Country: form.Country, City: form.City, email: form.email }])
        }
        else {
            setTodos(todos.map(todo => todo.user === form.user ? form : todo))
        }
        setForm({ name: '', lastName: '', phone: '', age: '', Country: '', City: '', email: '' })
        setFormStatus('add')
    }
    // ende code form


    return (
        <div className='Container-Form'>
            <div className='Form-header'>
                <div  className='Form-headerspan'>
                <h1>ContactsUs</h1>
                <h4>fdrrf fkvkf lkfkfd dlkfdlk  ldkfvjfj fkvjkv</h4>
                </div>
                
            </div>
            <picture className='pic-form'>
                <img src={pic} alt="" />
            </picture>
            <div className='form-data'>
                <form onSubmit={handleSubmit} className="form-submit">
                    <lable htmlFor={'name'}>Name:</lable>
                    <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'lastName'}>lastName:</lable>
                    <input type='text' name='lastName' value={form.lastName} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'phone'}>Phone:</lable>
                    <input type='number' name='phone' value={form.phone} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'City'}>City:</lable>
                    <input type='text' name='City' value={form.City} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'Country'}>Country:</lable>
                    <input type='text' name='Country' value={form.Country} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'email'}>Email:</lable>
                    <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='' />
                    <lable htmlFor={'age'}>age:</lable>
                    <input type='number' name='age' value={form.age} onChange={handleChange} placeholder='' />

                    <button type='submit'onClick={handleSubmit} className="btn-submit" >
                        {FormStatus === 'add' ? 'submit' : 'update'}
                    </button>

                </form>
            </div>
            <Link to={`/`}>
                <button className='btn-home' >{'<----Home'}</button>
            </Link>
            <div className='Form-Footer'></div>
        </div>
    );
};

export default Form;