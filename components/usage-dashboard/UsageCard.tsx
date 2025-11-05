"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface UsageCardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendDir?: "up" | "down";
  subtext?: string;
  description?: string;
}

export function UsageCard({
  title,
  value,
  trend,
  trendDir,
  subtext,
  description,
}: UsageCardProps) {
  const TrendIcon = trendDir === "down" ? TrendingDown : TrendingUp;

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
        {trend && (
          <Badge variant="outline" className="border-0 flex items-center gap-1">
            <TrendIcon className="h-4 w-4" /> {trend}
          </Badge>
        )}
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        {subtext && (
          <div className="flex gap-2 font-medium">
            {subtext} <TrendIcon className="size-4" />
          </div>
        )}
        {description && (
          <div className="text-muted-foreground">{description}</div>
        )}
      </CardFooter>
    </Card>
  );
}
