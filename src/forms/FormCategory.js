import React from 'react';
import './category_form.css';
import './buttons.css';

const FormCategory = ({onSubmit}) => {
  alert(onSubmit);
  
  const formId = React.useRef(0);
  
  function onSubmitTheForm(event) {
    event.preventDefault();
     let form = formId.current;
     let formData = new FormData(form);
     
     let dataForm = {
       name : formData.get("name"),
       description: formData.get("description"),
     };
     
     onSubmit(dataForm);
  
     alert("added the category");
  }
  return (
    <div id="add-Category-Page" className="container">
      <div className="form-container">
        <form id="categoryForm" className="category-form" ref ={formId} onSubmit={onSubmitTheForm}>
          <div className="name">
            <input type="text" className="input" id="categoryName" name ="name" placeholder="add name" required />
          </div>
          <div className="description">
            <textarea className="input" id="categoryDescription" rows="5" placeholder="add description" name ="description" required></textarea>
          </div>
          <div className="file">
            <input type="file" id="imageCategory" accept="image/*" />
          </div>
          <div className="form-buttons">
            <button id="buttonCategory" className="create">create</button>
            <button id="closeFormCategory" className="close" type = "submit">إغلاق</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategory;