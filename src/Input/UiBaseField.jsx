import React from 'react';

const BaseField = ({ content, errors }) => {
  return (
    <div className="base-input-field">
      {content}
      <div className="error-message">
        {errors?.map((error, index) => (
          <span className='error-field' key={index}>{error}</span>
        ))}
      </div>
    </div>
  );
};

export default BaseField;
