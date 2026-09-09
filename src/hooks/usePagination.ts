import { useState } from "react";

export function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  intialPage: number = 1,
) {
  const [currentPage, setCurrentPage] = useState(intialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
}
