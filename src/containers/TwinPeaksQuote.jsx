import React, { useState } from 'react';
import Button from '../components/quote/Load';
import DisplayQuote from '../components/quote/Quote';
import { fetchQuote } from '../services/twinPeaksApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchQuote();
    setQuote(data);
  }

  return (
    <>
      <DisplayQuote>{quote}</DisplayQuote>
      <form onSubmit={handleSubmit}>
        <Button type='submit'>Get Quote</Button>
      </form>
    </>
  );
}

export default SimpsonsQuote;