import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
interface Props{
    children:ReactNode;
}
export default function DashboardLayout({children}:Props){
    return(
        <div className="flex min-h-screen flex-col bg-slate-100">
            <Header/>
        <div className="flex flex-1">
            <Sidebar/>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
        <Footer/>
        </div>
    )
}