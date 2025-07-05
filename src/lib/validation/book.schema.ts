import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),
  isbn: z.string().min(1),
  description: z.string().optional(),
copies: z.preprocess(
  (val) => {
    if (val === "" || val === undefined || val === null) return 1;
    if (typeof val === "string") return Number(val);
    return val;
  },
  z.number({ required_error: "Copies is required" }).min(0)
),
  available: z.boolean().default(true),
});

// Accept string or number in form inputs
export type BookFormValues = z.infer<typeof bookSchema>
