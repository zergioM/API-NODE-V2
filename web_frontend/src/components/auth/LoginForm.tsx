import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { loginSchema } from "../../utils/loginSchema";
import type { LoginFormData } from "../../utils/loginSchema";
import { useAuth } from "../../hooks/useAuth";
export default function LoginForm(){
    const navigate = useNavigate();
    const { login } = useAuth();
    const [ loading, setLoading ] = useState(false);
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<LoginFormData>({
        resolver:zodResolver(loginSchema)
    });

    async function onSubmit(data:LoginFormData){
        try {
            setLoading(true);
            await login(data);
            toast.success("Bienvenido");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Correo o contraseña incorrecto");
        }finally{
            setLoading(false);
        }
    }
    return(
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5">
            <Input label="Correo" type="email" placeholder="correo@correo.com"
            {...register("correo")}
            error={errors.correo?.message}/>
            <Input label="Contraseña" type="password" placeholder="***********"
            {...register("password")}
            error={errors.password?.message}/>
            <Button loading={loading}>
                Iniciar sesion
            </Button>
        </form>
    )
}