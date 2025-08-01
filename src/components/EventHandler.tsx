export default function EventHandler() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
