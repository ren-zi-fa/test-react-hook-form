import * as z from "zod";

export const IdentitySchema = z.object({
  firstName: z
    .string()
    .min(3, "nama awal tidak boleh kosong")
    .regex(/^[A-Za-z]+$/, "Nama hanya boleh satu kata dan huruf saja"),
  lastName: z
    .string()
    .min(3, "nama terakhir tidak boleh kosong")
    .regex(/^[A-Za-z]+$/, "Nama hanya boleh satu kata dan huruf saja"),
});
