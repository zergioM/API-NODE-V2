import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props{
    children: React.ReactNode;
}
export default function ProtectedRoute({children}:Props){
    const {loading, isAuthenticated}= useAuth();
    if(loading){
        return(
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-500">Cargando...</p>
            </div>
        );
    }
    if(!isAuthenticated){
        return <Navigate to="/" replace/>
    }
    return <>{children}</>
}