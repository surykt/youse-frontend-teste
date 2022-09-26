import React from "react";

const maxItems = 9;
const maxLeft = (maxItems -1 ) / 2;

const Pagination = ({ skip, limit, handleNextPage, handlePreviousPage }) => {
  const currentPage = skip ? (skip / limit) +1 : 1;




  return (
    <div className="ml-10 my-5">
      <button className="w-8 border border-solid border-black mr-2" disabled={currentPage <= 1} onClick={handlePreviousPage}> {"<"} </button>
       {parseInt(currentPage)}
      <button className="w-8 border border-solid border-black ml-2" disabled={currentPage >= 4} onClick={handleNextPage}> {">"} </button>
    </div>
  );
};

export default Pagination;
