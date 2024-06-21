import React from "react";
import FormProduct from './formProduct.js';

const  Reducer = () => {
  const initialState = "product";
  const reducer = (state, action) => {
    
    switch (action.type) {
      case 'product':
        
        return <div ><FormProduct  /></div>;
      case 'user':
        return <div>user</div>;
      default:
        return state;

    };
}




  const [state, dispatch] = React.useReducer(reducer, initialState);
   
    return (
      <div>
      <button onClick={() => dispatch({ type: 'product' })}>product</button>
      <button onClick={() => dispatch({ type: 'user' })}>نقصان</button>
      {state}
      
    </div>
    );
  }


export default Reducer;