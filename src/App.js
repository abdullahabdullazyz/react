import React,{useRef,useReducer,useMemo,useEffect} from "react";

import Header from './components/Header.js';
import Nav from './components/Navigation.js';
import User from './User.js';

import SocialIcons from './components/Footer.js';

 const App = () => {
 const initialState = "null";
 const navUseRef  = useRef("none");
 const navElement = useRef(null);




function reducer (state, action) {
   alert(state);
    switch (action.type) {
      case 'product':
        return "product";
      case 'user':
        return "user";
      default:
        return state;
    };
}



const [state, dispatch] = useReducer(reducer, initialState);


//alert(state) product or user
function renderConponent() {
  
  switch (state) {
    case 'product':
      return <User />;
      break;
    case 'user':
      return "user"
      break;
    default:
      return null;
  }
  
}



function toggleMenu () {
  
  let stateMenu = navUseRef.current;
  let statElement = navElement.current;
  
  if (stateMenu === "none" ){
    statElement.style.display= "block";
    navUseRef.current = "block";
    
  }
   else {
    statElement.style.display= "none";
    navUseRef.current = "none";
    }
    
    
  }

/*
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (navElement.current && !navElement.current.contains(event.target)) {
        alert(navElement.current.contains(event.target));
        navElement.current.style.display = 'none';
        navUseRef.current = 'none';
      }
    };
    

    document.addEventListener('click', handleClickOutside);
    
    
/*    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    
  }, []);
*/

     const openPage = {
      openPageUser: () => dispatch({ type: 'user'}),
      openPageProduct: () => dispatch({ type: 'product' }),
     };
    
    return (
      <>
      <Header toggleMenu ={toggleMenu} />
      <Nav stateRef = {navElement} open ={openPage} />
      <div>{renderConponent()} </div>
      <SocialIcons />
      </>
    );
  }
  
  
export default App;

