import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Pencil } from "lucide-react";

const columns = [
  {
    header: "No",
    accessorKey: "no",
  },
  {
    header: "Nama / Tipe",
    accessorKey: "nama",
  },
  {
    header: "RAM & Internal",
    accessorKey: "internal",
  },
  {
    header: "Variant",
    accessorKey: "variant",
  },
  {
    header: "IMEI",
    accessorKey: "imei",
  },
  {
    header: "Action",
    cell: ({ row }) => <Pencil />,
  },
];

const data = [
  {
    nama: "Iphone XR",
    internal: "128 GB",
    variant: "Black",
    imei: "867594857463547",
  },
  {
    nama: "Iphone 11 Pro",
    internal: "64 GB",
    variant: "White",
    imei: "867594857463547",
  },
  {
    nama: "Iphone 12 Pro Max",
    internal: "256 GB",
    variant: "Red",
    imei: "867594857463547",
  },
];

const DataTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg border border-gray-200 shadow-sm">
        <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-gray-200 px-6 py-3 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-800">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="transition-colors duration-150 hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b border-gray-200 px-6 py-3"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
