import { LogOut, UserCircle2 } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
export default function Header(){
    const {user, logout} = useAuth();
    async function handleLogout(){
        await logout();
        window.location.href="/";
    }
    return(
        <header className="flex h-16 items-center justify-between
        border-b bg-white px-6 shadow-sm">
            <div>
                <h1 className="text-xl font-bold text-blue-700">
                    API EDUCATIVA
                </h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="font-semibold">
                        {user?.nombre}
                    </p>
                    <p className="text-sm text-gray-500">
                        {user?.rol}
                    </p>
                </div>
                <UserCircle2
                    size={40}
                    className="text-blue-700"></UserCircle2>
                    <button
                    onClick={handleLogout}
                    className="rounded-lg p-2 hover:bg-gray-100"
                    title="Cerrar Sesión"><LogOut/></button>
            </div>
        </header>
    )
}