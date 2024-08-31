'use client'
import ReactPaginate from "react-paginate";

export const PaginationOutline = ({ totalGoods, onPaginationClick, skip }) => {
  return (
    <div className="flex justify-center my-7">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="&#129138;"
        onPageChange={onPaginationClick}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(totalGoods / 10)}
        previousLabel="&#129136;"
        renderOnZeroPageCount={null}
        forcePage={skip / 10}
        previousClassName="prev"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  );
}