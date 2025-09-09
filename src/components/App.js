
import React, { useState, useEffect } from "react";


const App = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


 useEffect(() => {
   setLoading(true);
   fetch("https://dummyjson.com/products")
     .then((response) => response.json())
     .then((json) => {
       setData(json);
       setLoading(false);
     })
     .catch((error) => {
       setError(error);
       setLoading(false);
     });
 }, []);


 if (loading) {
   return <div>Loading...</div>;
 }


 if (error) {
   return <div>An error occurred: {error.message}</div>;
 }


 if (!data) {
   return <div>No data found</div>;
 }


 return (
   <div>
     <h1>Data Fetched from API</h1>
     <pre>{JSON.stringify(data, null, 2)}</pre>
   </div>
 );
};


export default App;
