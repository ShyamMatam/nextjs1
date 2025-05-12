"use client";
import { useState, useEffect } from "react";

export default function Convert() {
  const [data, setData] = useState([]);
//   fetch data from api
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="max-w-sm flex flex-col  rounded overflow-hidden shadow-lg m-4 bg-white">
          <img className="w-full h-64 object-cover" src={item.image} alt={item.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 truncate">{item.title}</div>
            <p className="text-gray-700 text-base truncate">{item.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
              ${item.price}
            </span>
            <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">
              ★ {item.rating.rate}
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
              {item.rating.count} reviews
            </span>
          </div>
        </div>
        
      ))}
    </>
  );
}


