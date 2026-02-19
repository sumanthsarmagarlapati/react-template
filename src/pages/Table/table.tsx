// Table.tsx
import { useState } from "react";
import Pagination from "./pagination";

export default function Table() {
  const users = [
    { name: "SUmanth", age: "23", active: false, id: 1 },
    { name: "SUmant1", age: "23", active: true, id: 2 },
    { name: "SUmanth3", age: "23", active: true, id: 3 },
    { name: "SUmanth4", age: "23", active: true, id: 4 },
  ];

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Logic to get current page's data
  const startIndex = (page - 1) * limit;
  const currentData = users.slice(startIndex, startIndex + limit);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table border={1} cellPadding="10" cellSpacing="0" width="100%"> // this linme gives design so ignore first if ask only 
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        limit={limit}
        page={page}
        totalRecords={users.length}
        onPageChange={(newPage: number) => setPage(newPage)}
        onRowChange={(newLimit: number) => {
          setLimit(newLimit);
          setPage(1); // Reset to first page when limit changes
        }}
      />
    </div>
  );

    // return (
  //     <div>
  //         <DataTable value={data} >
  //             <Column field='name' sortable />
  //             <Column field='age' sortable />
  //             <Column field='active' sortable />

  //         </DataTable>
  //         <Pagination
  //             totalRecords={100}
  //             limit={10}
  //             recordsPerPage={[10, 20, 30]}
  //             onPageChange={(data) => onPageDataChange(data)}
  //             onRowChange={(data) => onRowDataChange(data)}
  //         ></Pagination>
  //     </div>
  // )
}
