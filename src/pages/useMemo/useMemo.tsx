import { useState, useMemo } from "react";

export default function UseMemo() {
  // throw new Response("Dashboard crashed intentionally");

  const [number, setNumber] = useState(5);
  const [dark, setDark] = useState(false);

  const factorial = (n) => {
    console.log("Calculating...");
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  };

  // Memoized value
  // const memoizedFactorial = useMemo(() => {
  //   return factorial(number);
  // }, [number]); // Only recalculates if number changes
  
  const memoizedFactorial= factorial(number);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
  };

  return (
    <div style={themeStyle}>
      <h2>Factorial: {memoizedFactorial}</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />

      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
  //   useEffect(() => {
  //   axios
  //     .get('https://dummyjson.com/users')
  //     .then((res) => {
  //       console.log('data', res?.data?.users);
  //     })
  //     .catch((err) => {});
  // }, []);

  // return <div>Dashboard</div>;
}
