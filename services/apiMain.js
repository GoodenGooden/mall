import supabase from "../ui/supabase";

export async function getItems() {
let { data, error } = await supabase
  .from('shopping')
  .select('*');

  console.log('Fetched data:', data);

if (error) {
  console.error('Error fetching data:', error.message);
  // Handle the error (e.g., display a message to the user)
  throw new Error(error.message); 
 
}
return data;

 
}





/*
export async function getItems() {
  try {
    const res = await fetch('https://zfljexksuojxmuyfvesw.supabase.co/rest/v1/shopping?select=*', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbGpleGtzdW9qeG11eWZ2ZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDUyODgsImV4cCI6MjA1MzAyMTI4OH0.6Kqr2x_LpoLSpZf51Pb6pseOlYSFvUjr20URch0uWlo', // Your RapidAPI Key
      'Authorization': `Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbGpleGtzdW9qeG11eWZ2ZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDUyODgsImV4cCI6MjA1MzAyMTI4OH0.6Kqr2x_LpoLSpZf51Pb6pseOlYSFvUjr20URch0uWlo`,
      
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    console.log(data)
    return data; // Return the fetched data
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err; // Optionally, re-throw the error if you want it to be handled by the caller
  }
}

*/

/*
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
  
   */
