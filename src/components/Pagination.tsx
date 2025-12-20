import { ArrowRight03Icon, ArrowLeft03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
  const next = <HugeiconsIcon icon={ArrowRight03Icon} size={19} />;
  const previous = <HugeiconsIcon icon={ArrowLeft03Icon} size={19} />;
  let pageCount = Math.ceil(totalCount / pageSize);
  const isFirstPage = selectedPage === 1;
  const isLastPage = selectedPage === pageCount;
  let pages = range(1, pageCount);

  if (pageCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {selectedPage > 1 ? (
          <li
            className={`page-item rounded-3 ${isFirstPage ? "disabled " : ""}`}>
            <button
              disabled={isFirstPage}
              onClick={() => onPageSelect(selectedPage - 1)}
              className="page-link clickable  bg-transparent">
              {previous}
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
              className="page-link clickable page-link bg-transparent ">
              {next}
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
