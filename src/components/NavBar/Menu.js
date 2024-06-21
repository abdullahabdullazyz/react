import React from 'react';
import Nav from './Nav.js';

import { FaTelegramPlane } from 'react-icons/fa';


//import '/src/css/menuSubmit.css';
const Menu = ({open,data}) => {
  
  const [stateFo,setF] = React.useState(false);
  const [stateTab,setT] = React.useState(false);
  
  return(
    <>
    
<div className="menu-2">
 <div className="menusubmit">
 <div className="buttonMenu"> 
       <div className="menuButton" className ="d-flex justify-content-center">
       <button onClick = {() => setF(!stateFo)}> &#9776;</button>
       </div>
      
       <div className="menuButton">
      <button onClick = {() => setT(!stateTab)}><FaTelegramPlane size={50} color="#0088cc" /></button>
      </div> 
 </div>
 </div>
 </div>
 
{stateFo && (
        <ul>
         <li>
         <button onClick={open.openProduct}>فتح نموذج المنتج</button>
         </li>
         
          <li>
          <button onClick ={open.openCategory}> addcategory </button>
          </li>
          
        </ul>
      )}
{stateTab && (<Nav dataC={data} />)}
  </>
    );
};

export default Menu;