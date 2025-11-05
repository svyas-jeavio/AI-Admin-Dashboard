"use client";

import {
  flexRender,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export type UsageData = {
  id: number;
  user: string;
  usage: number; // total usage
  last24h: number; // usage in last 24h
  plan: string; // free / pro / enterprise
  status: "active" | "capped" | "inactive";
};

type Props = {
  data: UsageData[];
};

export default function UsageTable({ data }: Props) {
  const columns: ColumnDef<UsageData>[] = [
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "usage",
      header: "Total Usage",
      cell: ({ row }) => `${row.original.usage} calls`,
    },
    {
      accessorKey: "last24h",
      header: "Last 24h",
      cell: ({ row }) => `${row.original.last24h} calls`,
    },
    {
      accessorKey: "plan",
      header: "Plan",
      cell: ({ row }) => <Badge variant="outline">{row.original.plan}</Badge>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        let color = "default";
        if (row.original.status === "active") color = "green";
        else if (row.original.status === "capped") color = "red";
        return <Badge variant="outline">{row.original.status}</Badge>;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="grid grid-cols-5 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b">
        <div>User</div>
        <div>Total Usage</div>
        <div>Last 24h</div>
        <div>Plan</div>
        <div>Status</div>
      </div>

      {/* Rows */}
      {data.map((row) => (
        <div
          key={row.id}
          className="grid grid-cols-5 gap-4 px-4 py-3 items-center bg-card rounded-lg shadow-sm hover:shadow-md transition"
        >
          <div className="font-medium">{row.user}</div>
          <div>{row.usage} calls</div>
          <div>{row.last24h} calls</div>
          <div>
            <Badge variant="outline">{row.plan}</Badge>
          </div>
          <div>
            <Badge
              variant="outline"
              className={
                row.status === "active"
                  ? "border-green-500 text-green-500"
                  : row.status === "capped"
                  ? "border-red-500 text-red-500"
                  : "border-muted-foreground text-muted-foreground"
              }
            >
              {row.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
