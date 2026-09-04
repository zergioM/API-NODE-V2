interface Props{
    children: React.ReactNode;
    loading?:boolean;
}
export default function Button ({
    children,
    loading
}:Props){
    return(
        <button
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-3 text-white
        font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition">
            {loading?"Ingresando...":children}
        </button>
    )
}