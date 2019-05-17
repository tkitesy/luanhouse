import React from "react";
import ReactPaginate from "react-paginate";

export function Pagination({pageCount, onPageChange, ...rest}){
    return (
        <ReactPaginate
          previousLabel={'上一页'}
          nextLabel={'下一页'}
          breakLabel={'...'}
          breakClassName={'PagedList-ellipses'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageChange}
          containerClassName={'pagination'}
          subContainerClassName={'pagination'}
          activeClassName={'active'}
          {...rest}
        />
    );
}
