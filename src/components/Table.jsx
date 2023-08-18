import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

const Table = ({ columns, data, withoutPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderRows = () => {
    return currentData.map((row, index) => (
      <tr key={index} className="border-b border-gray-200">
        {columns.map((column) => (
          <td key={column.accessor} className="py-2 px-4">
            {row[column.accessor]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-3 px-4 text-left text-gray-700 font-semibold bg-gray-100"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>

      {!withoutPagination && (
        <div className="flex justify-start gap-5 items-center mt-4">
          <Select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset halaman saat mengubah jumlah item per halaman
            }}
            w={100}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Select>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`py-2 px-4 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
