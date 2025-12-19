import { range } from "./utils";

interface Props {
  pageSize: number;
  totalCount: number;
}

function Pagination({ pageSize, totalCount }: Props) {
  let pageCount = Math.ceil(totalCount / pageSize);
  let pages = range(1, pageCount);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link clickable page-link bg-transparent text-blue ">
            Previous
          </a>
        </li>

        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="clickable page-link bg-transparent text-blue ">
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link clickable page-link bg-transparent text-blue">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
