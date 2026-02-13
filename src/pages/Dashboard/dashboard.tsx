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
  }, []);

  return <div>Dashboard</div>;
}
