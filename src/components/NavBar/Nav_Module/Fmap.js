import React from "react"; 
import '/src/css/categories.css';
  function dataCategory(dataC) {
    
    let category =  dataC.map((item,index) => {
      return(<div key ={index}>
      <button  className = "tablinks"  onClick ={() => alert(item.name)}>{item.name}</button>
      </div>);
    });
  
    return category;
  }

export default dataCategory;