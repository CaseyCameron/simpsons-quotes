export const fetchQuote = async () => {
  let response = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random');
  let data = await response.json();
  return data.quoteText;
}