import React, { useState } from 'react';

const Submit = ({open}) => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };
  
  return (
    <div>
      <button onClick={handleClick}>اضغط لعرض القائمة</button>
      {showList &&
      (
        <ul>
         <li>
         <button onClick={open.openProduct}>فتح نموذج المنتج</button>
         </li>
         
          <li>
          <button onClick ={open.openCategory}> addcategory </button>
          </li>
          
        </ul>
      )}
    </div>
  );
}

export default Submit;


/*
import React from 'react';
const Submit = () => {
  return(
<div class="menu-2">
 <div class="menusubmit">
 <div class="buttonMenu"> 
 
       <div id="menutab" class="menuButton">
        &#9776;
      </div>
      
       <div id="buttonMenuAdding" class="menuButton">
        &#9776;
      </div>     
 </div>
 </div>
 </div>
 <div class="show-container-button-adding" id="displayMenue">
   
    <div class="menue-container">
        <button id="buttonAddProduct">إضافه منتج</button>
       <button id="buttonAddCategory">إضافه صنف</button>
       </div>
       
 </div>
 );
}
*/

