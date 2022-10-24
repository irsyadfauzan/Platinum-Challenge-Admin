import React from "react";

function Pagination({ paginate, pageNumber }) {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <button href="!#" className="page-link">
          prev
        </button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => 
              paginate(number)} 
              href="!#" className="page-link">
              {number}
            </button>
          </li>
        ))}
        <button href="!#" className="page-link">
          next
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
