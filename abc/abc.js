// A function that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });
  }
  
  // Async function to await and log
  async function logData() {
    const result = await fetchData(); // Wait for the Promise to resolve
    console.log(result);              // Log the result
  }
  
  // Call the async function
  logData(); // Output after 1 second: "Data fetched!"