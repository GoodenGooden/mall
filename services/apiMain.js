
export  async function getItems() {
    try {
      const res = await fetch ('https://fakestoreapi.com/products');
    //  const res = await fetch('https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=Tomm&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended', {
       // method: 'GET',
       // headers: {
       //   'X-RapidAPI-Key': 'cf2e50e7a6msh524186c5e3a03a0p10b92bjsne359c24c5ac8',  // Your RapidAPI Key
       //   'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
       // }
     // });
  
      // Check if the response is successful
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      // Parse the JSON response
      const data = await res.json();
      console.log('Data:', data);  // Log the response data to the console
  
      return data;  // Return the data if needed
  
    } catch (err) {
      console.error('Error fetching data:', err);  // Log any errors
    }
    
  }
  
  // Call the function to see the output in the console
  
   
export async function searchItem ()  {
  try {

const res = await fetch (`https://fakestoreapi.com/products/category/${searchQuery}`)

 // Check if the response is successful
 if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}

// Parse the JSON response
const data = await res.json();
console.log('Data:', data);  // Log the response data to the console

return data;  // Return the data if needed



  }catch (err) {
    console.error('Error fetching data:', err);  // Log any errors
  }
}