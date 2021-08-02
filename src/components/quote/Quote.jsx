import React from 'react';

const DisplayQuote = ({ quote }) => {
  console.log('display props', quote);
  return (
    <p>{quote}</p>
  );
};

export default DisplayQuote;