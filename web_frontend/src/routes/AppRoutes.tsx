import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<PublicRoute><Login/></PublicRoute>}/>
            <Route path= "/dashboard" element= {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path= "/*" element= {<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    );
}