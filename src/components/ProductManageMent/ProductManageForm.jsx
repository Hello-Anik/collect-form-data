import React from 'react';

const ProductManageForm = ({handleAddProduct}) => {
    const handleSubmit = e => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity =e.target.quantity.value;
        
        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProduct(newProduct);
    }
    return (
        <div>
            <h3>Add A Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' /><br />
                <input type="number" name="price" placeholder='Product Price' /><br />
                <input type="text" name='quantity' placeholder='Product-quantity' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductManageForm;