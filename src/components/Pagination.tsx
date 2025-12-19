function Pagination() {
  const pageSize = 10;
  const totalCount = 40;

  let pageCount = Math.ceil(totalCount / pageSize);

  let pages: number[] = [];

  for (let count = 1; count <= pageCount; count++) {
    pages.push(count);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="clickable page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
