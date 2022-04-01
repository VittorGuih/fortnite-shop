import React, { useEffect, useState } from 'react';
import CONFIG from '../../../.configs.json';

export function Store() {
  const token = CONFIG.API_KEY;

  useEffect(() => {
    fetchItems();
  }, []);

  const [algo, setAlgo] = useState([
    {
      images: {},
      added: {},
    },
  ]);
  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    // setAlgo(json.items);
    console.log(typeof json);
    console.log(json);
  };

  return (
    <>
      <ul>
        <li>aa</li>
      </ul>
    </>
  );
}
