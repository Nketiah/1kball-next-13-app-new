"use client"

import React, { useMemo } from "react";
import { useTable,  usePagination } from "react-table";
import styles from "../app/tableStyles.module.css";
import{ ImArrowLeft, ImArrowRight } from "react-icons/im"
import { MdArrowForwardIos } from "react-icons/md"


const AppTable = ({drawData, drawColumns}) => {

  const columns = useMemo(() => drawColumns, []);
  const data = useMemo(() => drawData, [])

  // 0551665102

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable({ columns, data }, usePagination)

  const { pageSize, pageIndex } = state

  return (
    <>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <span>
          Page{"  "}
          <strong>
            {pageIndex + 1} <span className={styles.of}>of</span> {pageOptions.length}{" "}
          </strong>{" "}
        </span>
        <span>
          | <span className={styles.goto}>Go to page</span>:{" "}
          <input
          className={styles.inputNum}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          className={styles.selectOption}
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 50].map((page, index) => (
            <option key={index} value={page} >
              <span>Show</span> {page}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
         <ImArrowLeft  className={styles.icons}/>
        </button>
        <button className={styles.navButtons} onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button className={styles.navButtons} onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
         <ImArrowRight className={styles.icons} />
        </button>
      </div>
    </>
  );
};

export default AppTable;
