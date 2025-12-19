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
  let pages = range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => onPageSelect(selectedPage - 1)}
            className="page-link clickable page-link bg-transparent text-blue ">
            Previous
          </a>
        </li>

        {pages.map((page) => (
          <li key={page} className="page-item">
            <a
              onClick={() => onPageSelect(page)}
              className={`clickable page-link bg-transparent text-blue ${
                selectedPage === page ? "active" : ""
              }`}>
              {page}
            </a>
          </li>
        ))}
        <li className="page-item"></li>
        <a
          onClick={() => onPageSelect(selectedPage + 1)}
          className="page-link clickable page-link bg-transparent text-blue">
          Next
        </a>
      </ul>
    </nav>
  );
}

export default Pagination;
