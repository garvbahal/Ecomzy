import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);

  async function fetchProductsData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Error is here");
      }
      const data = await res.json();
      setPosts(data);
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
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 max-w-6xl mx-auto p-2 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
