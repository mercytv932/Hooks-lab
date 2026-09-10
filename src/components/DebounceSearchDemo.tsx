import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
