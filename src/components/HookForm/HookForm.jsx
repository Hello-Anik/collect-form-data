import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
   const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', name, email );
   }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name}/>
                <br/>
                <input type="email" name="email" defaultValue={email} onChange={emailOnChange} id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;