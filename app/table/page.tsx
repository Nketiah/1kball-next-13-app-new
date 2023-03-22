// "use client";
export default {}
// import React, { useMemo } from "react";
// import {
//   useTable,
//   useSortBy,
//   useGlobalFilter,
//   useFilters,
//   usePagination,
//   useRowSelect,
//   useColumnOrder,
//   useBlockLayout 
// } from "react-table";
// import { useSticky } from 'react-table-sticky'

// import MOCK_DATA from "@/components/MOCK_DATA.json";
// import { COLUMNS, GROUPED_COLUMNS } from "@/components/columns";
// import styles from "./table.module.css";
// import GlobalFilterInput from "@/components/GlobalFilterInput";
// import ColumnFilter from "@/components/ColumnFilter";
// import CheckBox from "@/components/CheckBox";
// import { Styles } from "@/components/TableStyles"

// const AppTable = () => {
//   // Basic table
  
//   const BasicTable = () => {
//     const columns = useMemo(() => GROUPED_COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//     } = useTable({ columns, data });

//     return (
//       <>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//       </>
//     );
//   };

//   const SortingTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//     } = useTable({ columns, data }, useSortBy);

//     return (
//       <>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                     {column.render("Header")}
//                     <span>
//                       {column.isSorted && (column.isSortedDesc ? "🔽" : "🔼")}
//                     </span>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//       </>
//     );
//   };

//   const TableFilter = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);
//     const defaultColumn = useMemo(() => {
//       return {
//         Filter: ColumnFilter,
//       };
//     }, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//       state,
//       setGlobalFilter,
//     } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter);

//     const { globalFilter } = state;

//     return (
//       <>
//         <GlobalFilterInput filter={globalFilter} setFilter={setGlobalFilter} />
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                     <div>{column.canFilter && column.render("Filter")}</div>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//       </>
//     );
//   };

//   const PaginationTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       page,
//       nextPage,
//       previousPage,
//       canNextPage,
//       canPreviousPage,
//       pageOptions,
//       state,
//       gotoPage,
//       pageCount,
//       setPageSize,
//       prepareRow,
//     } = useTable({ columns, data }, usePagination);

//     const { pageSize, pageIndex } = state;

//     return (
//       <>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//         <div>
//           <span>
//             Page{" "}
//             <strong>
//               {pageIndex + 1} of {pageOptions.length}{" "}
//             </strong>{" "}
//           </span>
//           <span>
//             | Go to page:{" "}
//             <input
//               type="number"
//               defaultValue={pageIndex + 1}
//               onChange={(e) => {
//                 const pageNumber = e.target.value
//                   ? Number(e.target.value) - 1
//                   : 0;
//                 gotoPage(pageNumber);
//               }}
//               style={{ width: "50px" }}
//             />
//           </span>
//           <select
//             value={pageSize}
//             onChange={(e) => setPageSize(Number(e.target.value))}
//           >
//             {[10, 20, 30, 50].map((page, index) => (
//               <option key={index} value={page}>
//                 Show {page}
//               </option>
//             ))}
//           </select>
//           <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//             {"<<"}
//           </button>
//           <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//             Previous
//           </button>
//           <button onClick={() => nextPage()} disabled={!canNextPage}>
//             Next
//           </button>
//           <button
//             onClick={() => gotoPage(pageCount - 1)}
//             disabled={!canNextPage}
//           >
//             {">>"}
//           </button>
//         </div>
//       </>
//     );
//   };

//   const RowSelectionTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//       selectedFlatRows,
//     } = useTable({ columns, data }, useRowSelect, (hooks) => {
//       hooks.visibleColumns.push((columns) => {
//         return [
//           {
//             id: "selection",
//             Header: ({ getToggleAllRowsSelectedProps }) => (
//               <CheckBox {...getToggleAllRowsSelectedProps()} />
//             ),
//             Cell: ({ row }) => (
//               <CheckBox {...row.getToggleRowSelectedProps()} />
//             ),
//           },
//           ...columns,
//         ];
//       });
//     });

//     const firstPageRows = rows.slice(0, 10);

//     return (
//       <>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {firstPageRows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//         <pre>
//           <code>
//             {JSON.stringify(
//               {
//                 selectedFlatRows: selectedFlatRows.map((row) => row.original),
//               },
//               null,
//               2
//             )}
//           </code>
//         </pre>
//       </>
//     );
//   };

//   const ColumnOrderTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//       setColumnOrder,
//     } = useTable({ columns, data }, useColumnOrder);

//     const handleChangeOrder = () => {
//       setColumnOrder([
//         "id",
//         "firstname",
//         "lastname",
//         "mobile",
//         "country",
//         "dob",
//       ]);
//     };

//     return (
//       <>
//         <button onClick={handleChangeOrder}>Change column order</button>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//       </>
//     );
//   };

//   const ColumnHidingTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//       allColumns,
//       getToggleHideAllColumnsProps,
//     } = useTable({ columns, data });

//     return (
//       <>
//         <div>
//           <div>
//             <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
//           </div>
//           {allColumns.map((column) => (
//             <div key={column.id}>
//               <label>
//                 <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
//                 {column.Header}
//               </label>
//             </div>
//           ))}
//         </div>
//         <table {...getTableProps()} className={styles.table}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//           <tfoot className={styles.tableFooter}>
//             {footerGroups.map((footerGroup) => (
//               <tr {...footerGroup.getFooterGroupProps()}>
//                 {footerGroup.headers.map((column) => (
//                   <td {...column.getFooterProps()}>
//                     {column.render("Footer")}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tfoot>
//         </table>
//       </>
//     );
//   };


//   const StickyColumnTable = () => {
//     const columns = useMemo(() => COLUMNS, []);
//     const data = useMemo(() => MOCK_DATA, []);

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//     } = useTable({ columns, data }, useBlockLayout, useSticky )
//     const firstPageRows = rows.slice(0, 15)

//     return (
//       <>
//        <Styles>
//       <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
//         <div className="header">
//           {headerGroups.map((headerGroup) => (
//             <div {...headerGroup.getHeaderGroupProps()} className="tr">
//               {headerGroup.headers.map((column) => (
//                 <div {...column.getHeaderProps()} className="th">
//                   {column.render('Header')}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div {...getTableBodyProps()} className="body">
//           {firstPageRows.map((row) => {
//             prepareRow(row);
//             return (
//               <div {...row.getRowProps()} className="tr">
//                 {row.cells.map((cell) => (
//                   <div {...cell.getCellProps()} className="td">
//                     {cell.render('Cell')}
//                   </div>
//                 ))}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </Styles>
//       </>
//     )
//   }


//   return (
//     <>
//       {/* <BasicTable /> */}
//       {/* <SortingTable /> */}
//       {/* <TableFilter /> */}
//       <PaginationTable />
//       {/* <RowSelectionTable /> */}
//       {/* <ColumnOrderTable /> */}
//       {/* <ColumnHidingTable /> */}
//       {/* <StickyColumnTable/> */}
//     </>
//   );
// };

// export default AppTable;
