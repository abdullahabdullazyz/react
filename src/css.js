import React from 'react';

const MyComponent = () => {
  
  const titleStyles = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: 'blue',
};

  return (
    <div>
       <h1 style={titleStyles}>هذا عنوان مُنَسَّق</h1>
    </div>
  );
};

export default MyComponent;

