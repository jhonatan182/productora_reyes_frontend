import './Paging.css';
const Paging = ({ currentPage, totalPages, pageLimit, onPageChange = () => { }, onLimitChange = () => { } }) => {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        pages.push(<span className="paging_page current" key={i}>{i}</span>);
      } else {
        pages.push(<span className="paging_page" key={i} onClick={() => onPageChange(i)}>{i}</span>);
      }
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        if (i === currentPage) {
          pages.push(<span className="paging_page current" key={i}>{i}</span>);
        } else {
          pages.push(<span className="paging_page" key={i} onClick={() => onPageChange(i)}>{i}</span>);
        }
      }
      pages.push(<span className="paging_page sep" key="sep2">...</span>);
      pages.push(<span className="paging_page" key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</span>);
    } else if (currentPage > totalPages - 2) {
      pages.push(<span className="paging_page" key={1} onClick={() => onPageChange(1)}>{1}</span>);
      pages.push(<span className="paging_page sep" key="sep1">...</span>);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        if (i === currentPage) {
          pages.push(<span className="paging_page current" key={i}>{i}</span>);
        } else {
          pages.push(<span className="paging_page" key={i} onClick={() => onPageChange(i)}>{i}</span>);
        }
      }
    } else {
      pages.push(<span className="paging_page" key={1} onClick={() => onPageChange(1)}>{1}</span>);
      pages.push(<span className="paging_page sep" key="sep1">...</span>);
      pages.push(<span className="paging_page" key={currentPage - 1} onClick={() => onPageChange(currentPage - 1)}>{currentPage - 1}</span>);
      pages.push(<span className="paging_page current" key={currentPage}>{currentPage}</span>);
      pages.push(<span className="paging_page" key={currentPage + 1} onClick={() => onPageChange(currentPage + 1)}>{currentPage + 1}</span>);
      pages.push(<span className="paging_page sep" key="sep2">...</span>);
      pages.push(<span className="paging_page" key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</span>);
    }
  }
  return (
    <div className="paging">
      <div className="paging__limit">
        <span>Limit:</span>
        <select value={pageLimit} onChange={onLimitChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="paging__pages">
        {pages}
      </div>
    </div>
  );
}

export default Paging;
