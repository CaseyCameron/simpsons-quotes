import React, { useState } from 'react';
import Button from '../components/quote/Load';
import DisplayQuote from '../components/quote/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState('quote')

  const handleSubmit = () => {
    setQuote(fetchQuote());
  }

  return (
    <>
      <DisplayQuote>{quote}</DisplayQuote>
      <Button type='submit' onClick={handleSubmit}>Get Quote</Button>
    </>
  );
}

export default SimpsonsQuote;