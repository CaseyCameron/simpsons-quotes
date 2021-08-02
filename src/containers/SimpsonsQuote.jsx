import React, { useState } from 'react';
import Button from '../components/quote/Load';
import DisplayQuote from '../components/quote/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState('quote')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchQuote();
    console.log('before setting state', data);
    setQuote(data);
    console.log('after setQuote', quote);
    console.log('you made it');
  }

  return (
    <>
      <DisplayQuote quote={quote} />
      <form onSubmit={handleSubmit}>
        <Button type='submit'>Get Quote</Button>
      </form>
    </>
  );
}

export default SimpsonsQuote;