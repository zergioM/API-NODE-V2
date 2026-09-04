import { Link } from "react-router-dom";
import { TriangleAlert, House } from "lucide-react";

export default function NotFound()
{
    return(
        <div className="flex min-h-screen items-center justify-center
        bg-slate-100 px-4">
            <div className="w-full max-w-lg rounded-2x1 bg-white p-10 text-center shadow-xl">
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-red-100 p-6">
                        <TriangleAlert
                        size={70}
                        className="text-red-600"></TriangleAlert>
                    </div>
                </div>
                <h1 className="text-7x1 font-extrabold text-red-600">404</h1>
                <h2 className="mt-4 text-2x1 font-bold text-slate-800">
                    Página no encontrada
                </h2>
                <p className="mt-3 text-slate-500">
                    La página que intenta visitar no existe o fue movida.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg
                    bg-blue-600 px-6 py-3 font-semibold text-white transition
                    hover:bg-blue-700">
                        <House size={20}>Ir al inicio</House>
                    </Link>
                                       
            </div>
        </div>);
}