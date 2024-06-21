import React from 'react';
import "../css/Header.css";
 const Header = ({toggleMenu}) => {
  return (
  <section class="menu">
   <div class="open">
      <button onClick = {toggleMenu}>
       &#9776;
      </button>
    </div>
</section>
);
}

export default Header;