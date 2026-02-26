// 1. Define props with a placeholder 'T'
interface CardProps<T> {
  content: T;
  label: string;
}

// 2. Use the placeholder in the component
// The <T,> syntax is a trick for .tsx files so the compiler 
// doesn't think <T> is a  HTML tag like <div> tag becoz in .tsx file both html and js combined so that <T> thinks it is Html tag but here its is generic so by keeping 
// , compiler knows it is Generic.
const DataCard = <T,>({ content, label }: CardProps<T>) => {
  return (
    <div className="border p-4">
      <h3>{label}</h3>
      <pre>{JSON.stringify(content)}</pre>
    </div>
  );
};

// 3. Usage: TypeScript automatically figures out what 'T' is!
export default function Generic() {
  return (
    <>
      {/* T is inferred as a string */}
      <DataCard label="User Name" content="Alex" />
      
      {/* T is inferred as an object */}
      <DataCard label="Settings" content={{ theme: 'dark', notifications: true }} />
    </>
  );
}
