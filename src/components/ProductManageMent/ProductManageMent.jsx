import React, { useState } from 'react';
import ProductManageForm from './ProductManageForm';
import ProductTable from './ProductTable';

const ProductManageMent = () => {

    const [products, setProducts] = useState([]);
    const handleAddProduct = newProduct => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }
    return (
        <div>
            <ProductManageForm handleAddProduct={handleAddProduct}></ProductManageForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManageMent;