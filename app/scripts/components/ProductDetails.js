/**
 * This file renders the product details
 *
 */
import React from 'react';

const ProductDetails = ({description}) => {

        return (
            <div className="elc-product-details">
                <h2>Product Details</h2>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>

        );

}

// Export out the React Component
export default ProductDetails;