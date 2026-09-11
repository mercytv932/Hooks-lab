import { usePagination } from "../hooks/usePagination";

export default function PaginationDemo() {
  const items = Array.from({ length: 120 }, (_, i) => `Item ${i + 1}`);
  const pagination = usePagination(items.length, 10);
  const currentItems = items.slice(pagination.startIndex, pagination.endIndex);

  return (
    <div>
      <h2>Pagination Demo</h2>
      <p>
        Page {pagination.currentPage} of {pagination.totalPages}
      </p>

      {currentItems.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <div className="pagination-controls">
        <button
          onClick={pagination.previousPage}
          disabled={!pagination.canPreviousPage}
        >
          Previous
        </button>
        <button
          onClick={pagination.nextPage}
          disabled={!pagination.canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
