import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";

type SortOrder = "ASC" | "DESC";

interface PaginationData {
  limit: number;
  page?: number;
  search?: string;
  sort?: string;
  order?: SortOrder;
  totalRecords: number;
  recordsPerPage?: number[];
  active?: boolean;
  onRowChange: Function;
  onPageChange: Function;
}

const listValues = [
  { name: 10, value: 10 },
  { name: 20, value: 20 },
  { name: 30, value: 30 },
];

const Pagination = React.memo(
  ({
    limit = 1,
    page = 1,
    totalRecords,
    search,
    sort,
    order,
    active,
    onPageChange = () => {},
    onRowChange = () => {},
  }: PaginationData) => {
    const [recordsRange, setRecordsRange] = useState<Record<string, any>>({
      start: 0,
      end: 0,
    });
    const [pagesList, setPagesList] = useState<Record<string, any>[]>([]);

    useEffect(() => {
      calculateRangeOfNumbers();
    }, [page]);

    useEffect(() => {
      calculateLimitsList();
      calculateRangeOfNumbers();
    }, [totalRecords, limit]);

    const calculateRangeOfNumbers = () => {
      const startValue = limit * (page - 1) + 1;
      const endValue = startValue + limit - 1;
      setRecordsRange({ start: startValue, end: endValue });
    };

    const calculateLimitsList = () => {
      let pages = [];
      const totalPages = totalRecords / limit;
      for (let i = 0; i < totalPages; i++) {
        pages.push({
          name: i + 1,
          value: i + 1,
        });
      }
      setPagesList([...pages]);
    };

    return (
      <>
        <div>
          <div>No of Records Per Page</div>
          <Dropdown
            options={listValues}
            value={limit}
            optionLabel="name"
            optionValue="value"
          />
          <div>
            {" "}
            Showing {} Out Of {totalRecords}
          </div>
        </div>

        <div>
          <div>Page</div>
          <Dropdown
            options={pagesList}
            value={page}
            optionLabel="name"
            optionValue="value"
          />
        </div>
      </>
    );
  },
);

export default Pagination;
