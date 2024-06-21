import React,{state} from "react";
import Submit from "./submit.js";
import FormCategory from './forms/FormCategory.js';
import ShowTableCategory from './ConainerCategory.js';
import FormProduct from './forms/FormProduct.js';
import Menu from './components/NavBar/Menu.js';

let dataProduct = [];
let dataCategory = [];
let newDataCategory = null;
 const initialState = {
  activeForm: null, // Initially, no form is open
};





function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_CATEGORY_FORM':
      return { ...state, activeForm: 'category' };
    case 'OPEN_PRODUCT_FORM':
      return { ...state, activeForm: 'product' };
      
    case 'ADD_CATEGORY':{
      return {
        ...state,
          activeForm: null, // Close form after adding
      };
    }
 
    case 'ADD_PRODUCT':{
      return {
        ...state,
        dataProduct: [...state.dataProduct, action.payload],
        activeForm: null, // Close form after adding
      };
    }
      
      
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
 

 
const [state, dispatch] = React.useReducer(reducer, initialState);

const [create,setCreate] = React.useState(false);


/*
function getData(data) {
  alert(dataCategory);
  dataCategory.push(data);

}
*/


  const handleAddCategory = (data) => {
    dataCategory.push(data);
    newDataCategory = data;
    dispatch({ type: 'ADD_CATEGORY'});
  };



  const renderForm = () => {
    switch (state.activeForm) {
      case 'product':
        return <FormProduct />;
      case 'category':
        return <FormCategory onSubmit={handleAddCategory} />;
      default:
        return null;
    }
  };






  const openForm = {
    openCategory: () => dispatch({ type: 'OPEN_CATEGORY_FORM' }),
    openProduct: () => dispatch({ type: 'OPEN_PRODUCT_FORM' }),
  };



  return(<div style={{marginTop: "100px"}}>
  <Menu open = {openForm} data = {dataCategory} />
    {renderForm()}
      {dataCategory.length > 0 && <ShowTableCategory
        data={dataCategory} category={true}
        /*
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
        category={true}
        // Indicate displaying categories*/
      />}    
    
    
  </div>);
};



export default User;