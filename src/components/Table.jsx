import React, { useMemo } from "react";
import jsonData from "../data.json";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import moment from "moment";


export default function Table() {

  const data = useMemo(() => {
    return jsonData.map((item) => {
      return {
        ...item,
        createdAt: moment(item.createdAt).format("MMM-DD-YY"),
        updatedAt: moment(item.updatedAt).format("DD-MMM-YY"),
        price: item.price ?? 0,
        sale_price: item.sale_price ?? 0,
      };
    });
  }, [jsonData]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "subcategory",
        header: "Subcategory",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "updatedAt",
        header: "updatedAt",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
        enableGrouping: true,
      },
      {
        accessorKey: "sale_price",
        header: "Sale Price",
        size: 50,
        enableGrouping: true,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
    enableGrouping: true, // Globally enable grouping for the table
    initialState: {
      grouping: ['category'], // Optionally define initial grouping states
    },
    muiPaginationProps: {
      color: "standard",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
    positionPagination: "bottom"
  });

  return <MaterialReactTable table={table} />;
}





