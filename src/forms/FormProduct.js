import React from 'react';
import "./form_products.css";

let divForm = (
  <div className="form-container">
    <form id="productForm" className="product-form">
      <div className="product-details">

        <div className="product-price">
          <div className="product-title">
            <input type="text" placeholder="title" id="title" />
          </div>

          <div className="price">
            <input type="number" placeholder="price" id="price" />
          </div>

          <div className="product-image">
            <input type="file" id="image" placeholder="enter image URL" />
          </div>
        </div>

        <div className="x">
          <div className="product-taxes">
            <input type="number" placeholder="taxes" id="taxes" />
          </div>

          <div className="product-ads">
            <input type="number" placeholder="ads" id="ads" />
          </div>

          <div className="product-discount">
            <input type="number" placeholder="discount" id="discount" />
          </div>
        </div>

        <div className="product-total">
          <label htmlFor="total">Total</label>
          <small id="total"></small>
        </div>
      </div>

      <div className="product-category">
        <select id="selectedCategory">
          <option value="">Choose a Category</option>
        </select>
      </div>

      <div className="product-quantity">
        <input type="number" placeholder="quantity" id="count" value="1" />
      </div>

      <div className="form-buttons">
        <button id="onClickButtonProduct" className="create">create</button>
        <button id="closeFormProduct" className="close">Close</button>
      </div>
    </form>
  </div>
);


const FormProduct = () => {
  return (
    <div>
      {divForm}
    </div>
  );
};

export default FormProduct;
