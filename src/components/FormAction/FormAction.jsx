import React from 'react';

const FormAction = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('number'))
    }
    return (
        <div>

           <form action={handleFormSubmit}>
                <input type="text" name='name' placeholder='Enter Name' />
                <br />
                <input type="number" name="number" id="" placeholder='enter number' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;