import { useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  // throw new Response("Dashboard crashed intentionally");
    useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((res) => {
        console.log('data', res?.data?.users);
      })
      .catch((err) => {});

      fetch('https://dummyjson.com/users')
        .then(async res => {
          if (!res.ok) {
            throw new Error("Error!");
          }
          //  const data = await res.json();
          //  console.log(data);
          return res.json();
        })
        .then(data => {
          // console.log('data', data?.users);
        })
  }, []);

  return <div>Dashboard</div>;
}
