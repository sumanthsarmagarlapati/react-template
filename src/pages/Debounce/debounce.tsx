import { ChangeEvent, useEffect, useState } from "react";

// 1. THE HOOK: <T> makes it generic so it works for strings, numbers, objects, etc.
function useDebounce<T>(
  value: T,
  delay: T extends number ? number : number,
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: stops timer if value changes again before delay finishes
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// 2. THE COMPONENT
export default function InstantSearch() {
  const [text, setText] = useState<string>("");
  const debouncedText = useDebounce<string>(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log("API CALL WITH:", debouncedText);
    }
  }, [debouncedText]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search: {text}</h2>
      <input
        type="text"
        value={text}
        placeholder="Type fast..."
        onChange={handleInputChange}
      />
      <p>
        Debounced Value: <b>{debouncedText}</b>
      </p>
    </div>
  );
}
