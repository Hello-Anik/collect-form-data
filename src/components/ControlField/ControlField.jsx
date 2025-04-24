import React, { useState } from 'react';

const ControlField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        if(password.length < 6) {
            setError('password must be 6 characters longer')
         }
         else{
             setError('')
         }
       
    }
    const handleOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
      
    }
   
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"  placeholder='Enter Email' required/><br />
                <input type="password" name="password" onChange={handleOnChange}  placeholder='Enter Password ' defaultValue={password} required/><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color : 'red'}}> <small>{error}</small> </p>
        </div>

    );
};

export default ControlField;