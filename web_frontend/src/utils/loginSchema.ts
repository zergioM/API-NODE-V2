import { z } from "zod";
export const loginSchema = z.object({
    correo: z.string().email("Correo invalido"),
    password: z.string().min(4,"Ingrese la contraseña"),   
});
export type LoginFormData = z.infer<typeof loginSchema>;
