"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TableRow, TableCell } from "@/components/ui/table";
import { Usage } from "./schema/UsageSchema";

export function DraggableUsageRow({
  row,
  cells,
}: {
  row: Usage;
  cells: any[];
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.id });

  return (
    <TableRow
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      data-dragging={isDragging}
    >
      {cells.map((cell) => (
        <TableCell key={cell.id}>{cell.render()}</TableCell>
      ))}
    </TableRow>
  );
}
