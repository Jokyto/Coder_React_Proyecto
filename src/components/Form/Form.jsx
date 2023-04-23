import React from 'react'
import Input from './InputForm';



export default function Form(props) {
    function handleSubmit(evt){
        evt.preventDefault();
    }

    return (
    <form onSubmit={handleSubmit} className='container'>
        <Input/>
    </form>
    );
}
