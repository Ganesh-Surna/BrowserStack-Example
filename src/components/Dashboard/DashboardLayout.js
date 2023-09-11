import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function DashboardLayout(){
    return <div className="below-header">
        <Sidebar/>
        <Outlet/>
    </div>
}