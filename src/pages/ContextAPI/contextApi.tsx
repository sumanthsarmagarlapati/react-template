import React, { createContext, useState, useContext } from "react";

interface TableContextType {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  currentRecords: any[];
  total: number;
}

const TableContext = createContext<TableContextType | null>(null);

export const TableProvider = ({ children, data }: { children: React.ReactNode; data: any[] }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const startIndex = (page - 1) * limit;
  const currentRecords = data.slice(startIndex, startIndex + limit);

  return (
    <TableContext.Provider value={{ page, setPage, limit, setLimit, currentRecords, total: data.length }}>
      {children}
    </TableContext.Provider>
  );
};

// 3. Create a custom hook to handle the 'null' check safely
export const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};
