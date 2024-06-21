import React from 'react';
import '../nav.less'; // يمكنك إضافة التنسيقات هنا


const MyNav = ({opene}) => {
  
  return (
    <div  className="overlay">
      <div className="content">
        <button onClick ={opene.openPageProduct}> product </button>
        <a className="openPageButton" data-element-id="add-Category-Page">إضافة صنف</a>
        <a className="openPageButton" data-element-id="show-Products-Page">عرض المنتجات</a>
        <a className="openPageButton" data-element-id="user-interface">عرض المنتجات</a>
      </div>
      {/* CATEGORY FIRM */}
    </div>
  );
};

const Nav = ({stateRef,open}) => {
  return (
    <div id="myNav" ref ={stateRef}>
      <MyNav opene= {open} />
      <br />
      <br />
      <div className="margin"></div>
    </div>
  );
};



export default Nav;