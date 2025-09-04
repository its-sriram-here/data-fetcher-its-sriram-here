import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData({ error: "Failed to fetch data" });
      }
    };

    fetchData();
  }, []); // runs only once on mount

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Product Data</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
};

export default App;
