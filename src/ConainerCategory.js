import React from 'react';
/*
 const  ShowTableCategory = (category) => {
  return (
    <>
    <div class = "nameCaregory" id ="nameCategory"> {category.name}</div>
      <div class = "descriptionCategory" id ="descriptionCategory"> {category.description}</div>
      
       <div class = "button-category">
        <button id = "deleteCategory">deletCategory</button>
 
          <button id="buttonUpdateCategory"> Update</button >
          </div>
          </>);
          
}

export default ShowTableCategory;


*/



const ShowTableCategory = ({ data,category }) => {
  
  const tableHeaders = category
    ? ['name', 'description', 'update', 'dele']
    : ['name', 'description', 'price','update','delete'];

  const tableRows = data.map((item,index) => {
    /*
    const id = item.id || item._id; // Assuming each item has an ID property
    const editAction = () => {
      // Implement logic to open the edit form for the given item
    };
    const deleteAction = () => {
      onDelete(id);
    };
*/
    return (
      <tr key={index}>
        {category ? (
          <>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </>
        ) : (
          <>
            <td>{item.name}</td>
            <td>{item.description}</td>
            
          </>
        )}
        <td>
          <button >تعديل</button>
        </td>
        <td>
          <button>حذف</button>
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
