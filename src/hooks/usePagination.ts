import { useState } from "react";

export function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1,
) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const itemsOnCurrentPage = endIndex - startIndex;
  const canNextPage = currentPage < totalPages;
  const canPreviousPage = currentPage > 1;

  function nextPage() {
    if (canNextPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function previousPage() {
    if (canPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  }
}
