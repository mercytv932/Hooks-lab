import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceSearchDemo() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <p>Current value: {search}</p>
      <p>Debounced value: {debouncedSearch}</p>
    </div>
  );
}
