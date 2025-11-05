import { z } from "zod";

export const usageSchema = z.object({
  id: z.number(),
  user: z.string(),
  usage: z.number(),
  last24h: z.number(),
  plan: z.string(),
  status: z.string(),
});
export type Usage = z.infer<typeof usageSchema>;
