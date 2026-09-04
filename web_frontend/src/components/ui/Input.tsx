import type { InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    error?: string;
}
export default function Input({
    label,
    error,
    ...props
}: Props){
    return (
        <div className="mb-5">
            <label className="mb-2 block font-medium">
                {label}
            </label>
            <input
            {...props}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none 
            focus:border-blue-600"/>
            {error &&(
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    )
}
interface Props{
    
}