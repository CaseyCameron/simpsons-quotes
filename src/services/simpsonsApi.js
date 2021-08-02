export const simpsonsApi = async () => {
  let data = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random');
  console.log(data.json());
  return data.json();
}