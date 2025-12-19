import { range } from "./utils";

interface Props {
  pageSize: number;
  totalCount: number;
  selectedPage: number;
  onPageSelect(page: number): void;
}

function Pagination({
  pageSize,
  totalCount,
  onPageSelect,
  selectedPage,
}: Props) {
  let pageCount = Math.ceil(totalCount / pageSize);
  const isFirstPage = selectedPage === 1;
  const isLastPage = selectedPage === pageCount;
  let pages = range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {selectedPage > 1 ? (
          <li
            className={`page-item rounded-3 ${isFirstPage ? "disabled " : ""}`}>
            <button
              disabled={isFirstPage}
              onClick={() => onPageSelect(selectedPage - 1)}
              className="page-link clickable page-link bg-transparent text-blue">
              Previous
            </button>
          </li>
        ) : null}

        {pages.map((page) => (
          <li key={page} className="page-item">
            <button
              onClick={() => onPageSelect(page)}
              className={`clickable page-link bg-transparent text-blue ${
                selectedPage === page ? "active" : ""
              }`}>
              {page}
            </button>
          </li>
        ))}
        {selectedPage < pageCount ? (
          <li className={`page-item rounded-3 ${isLastPage ? "disabled" : ""}`}>
            <button
              disabled={isLastPage}
              onClick={() => onPageSelect(selectedPage + 1)}
              className="page-link clickable page-link bg-transparent text-blue">
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
