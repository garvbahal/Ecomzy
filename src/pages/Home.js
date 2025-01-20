import React, { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);

  async function fetchProductsData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts([]);
    } catch (err) {
      console.log("Error is here");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Home;
