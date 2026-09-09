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

  function setPage(pageNumber: number) {
    const page = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(page);
  }

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

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  };
}
