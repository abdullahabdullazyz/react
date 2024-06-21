import React, { useState, useReducer } from "react";
import Submit from "./submit.js";
import FormCategory from './forms/FormCategory.js';
import ShowTableCategory from './ConainerCategory.js';
import FormProduct from './forms/FormProduct.js'; // Assuming FormProduct exists



const initialState = {
  activeForm: null, // Initially, no form is open
  dataCategory: [],
  dataProduct: [],
};


function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_CATEGORY_FORM':
      return { ...state, activeForm: 'category' };
    case 'OPEN_PRODUCT_FORM':
      return { ...state, activeForm: 'product' };
    case 'ADD_CATEGORY':
      return {
        ...state,
        dataCategory: [...state.dataCategory, action.payload],
        activeForm: null, // Close form after adding
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        dataProduct: [...state.dataProduct, action.payload],
        activeForm: null, // Close form after adding
      };
      
      
    case 'EDIT_CATEGORY':
      // Implement logic to edit a specific category in dataCategory
      return state; // Update state with edited data
    case 'EDIT_PRODUCT':
      // Implement logic to edit a specific product in dataProduct
      return state; // Update state with edited data
    case 'DELETE_CATEGORY':
      // Implement logic to delete a specific category from dataCategory
      return state; // Update state with filtered data
    case 'DELETE_PRODUCT':
      // Implement logic to delete a specific product from dataProduct
      return state; // Update state with filtered data
    default:
      return state;
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openForm = {
    openCategory: () => dispatch({ type: 'OPEN_CATEGORY_FORM' }),
    openProduct: () => dispatch({ type: 'OPEN_PRODUCT_FORM' }),
  };

  const handleAddCategory = (data) => {
    dispatch({ type: 'ADD_CATEGORY', payload: data });
  };

  const handleAddProduct = (data) => {
    dispatch({ type: 'ADD_PRODUCT', payload: data });
  };

  const handleEditCategory = (id, newData) => {
    // Implement logic to update the category with the given id in dataCategory
    dispatch({ type: 'EDIT_CATEGORY', payload: { id, newData } });
  };

  const handleEditProduct = (id, newData) => {
    // Implement logic to update the product with the given id in dataProduct
    dispatch({ type: 'EDIT_PRODUCT', payload: { id, newData } });
  };

  const handleDeleteCategory = (id) => {
    // Implement logic to remove the category with the given id from dataCategory
    dispatch({ type: 'DELETE_CATEGORY', payload: id });
  };

  const handleDeleteProduct = (id) => {
    // Implement logic to remove the product with the given id from dataProduct
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const renderForm = () => {
    switch (state.activeForm) {
      case 'category':
        return <FormCategory onSubmit={handleAddCategory} />;
      case 'product':
        return <FormProduct onSubmit={handleAddProduct} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Submit open={openForm} />

      {renderForm()}

      {state.dataCategory.length > 0 && <ShowTableCategory
        data={state.dataCategory}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
        category={true} // Indicate displaying categories
      />}
      
      {state.dataProduct.length > 0 && <ShowTableCategory
        data={state.dataProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        category={false} // Indicate displaying products
      />}
    </div>
  );
};

export default User;



import React from 'react';



const ShowTableCategory = ({ data, onEdit, onDelete, category }) => {
  const tableHeaders = category
    ? ['اسم الصنف', 'وصف الصنف', 'تعديل', 'حذف']
    : ['اسم المنتج', 'وصف المنتج', 'سعر المنتج', 'تعديل', 'حذف'];

  const tableRows = data.map((item) => {
    const id = item.id || item._id; // Assuming each item has an ID property
    const editAction = () => {
      // Implement logic to open the edit form for the given item
    };
    const deleteAction = () => {
      onDelete(id);
    };

    return (
      <tr key={id}>
        {category ? (
          <>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </>
        ) : (
          <>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
          </>
        )}
        <td>
          <button onClick={editAction}>تعديل</button>
        </td>
        <td>
          <button onClick={deleteAction}>حذف</button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default ShowTableCategory;
