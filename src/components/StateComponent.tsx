import { useState } from "react";
import ClickCounter from "./ClickCounter";
import MultipleState from "./MultipleState";

export default function StateComponent() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <div>
        <MultipleState />
      </div>
    </div>
  );
}
