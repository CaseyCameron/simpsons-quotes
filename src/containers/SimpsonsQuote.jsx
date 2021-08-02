import React, { useState } from 'react';
import Button from '../components/quote/Load';
import DisplayQuote from '../components/quote/Quote';

const SimpsonsQuote = () => {


  return (
    <>
      <DisplayQuote>quote</DisplayQuote>
      <Button type='submit' onClick={handleSubmit}>Get Quote</Button>
    </>
  );
}

export default SimpsonsQuote;