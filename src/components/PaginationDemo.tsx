import { usePagination } from "../hooks/usePagination";

export default function PaginationDemo() {
  const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  const pagination = usePagination(items.length, 5);
  const currentItems = items.slice(pagination.startIndex, pagination.endIndex);

  return (
    <div>
      <h2>Pagination Demo</h2>

      {currentItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
