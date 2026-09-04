import{
    Building2,
    GraduationCap,
    Home,
    School,
    Users,
    BookOpen,
} from "lucide-react";
import { Navigate, NavLink } from "react-router-dom";
const menu=[
    {
        name:"Panel",
        path:"/dashboard",
        icon:Home,
    },
    {
        name:"Usuarios",
        path:"/usuarios",
        icon:Users,
    },
    {
        name:"Instituciones",
        path:"/instituciones",
        icon:Building2,
    },
    {
        name:"Sedes",
        path:"/sedes",
        icon:School,
    },
    {
        name:"Docentes",
        path:"/docentes",
        icon:GraduationCap,
    },
    {
        name:"Cursos",
        path:"/cursos",
        icon:BookOpen,
    },   
];
export default function Sidebar(){
    return(
        <aside className="w-64 border-r bg-slate-900 text-white">
            <nav className="mt-8">
                {menu.map((item)=>{
                    const Icon = item.icon
                    return(
                        <NavLink
                        key={item.path}
                        to={item.path}
                        className={({isActive})=>
                        `mx-2 mb-2 flex items-center gap-3 rounded-lg px-4 py-3
                        transition ${isActive
                            ?"bg-blue-700":"hover:bg-slate-800"
                        }`}>
                            <Icon size={20}></Icon>
                            {item.name}
                        </NavLink>
                    )
                })}
            </nav>
        </aside>
    )
}