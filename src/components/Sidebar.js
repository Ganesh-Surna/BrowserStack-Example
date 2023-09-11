import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import DashboardIcon from "../icons/DashboardIcon";
import FolderIcon from "../icons/FolderIcon";
import CodeIcon from "../icons/CodeIcon";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <select defaultValue="p1" className={classes["drop-down"]}>
        <option value="p1">Project one</option>
        <option value="all">View All Projects</option>
      </select>
      <section className={classes["fields"]}>
        <NavLink to="/dashboard" className={({isActive})=>isActive? classes.active : ""} end >
          <DashboardIcon/>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/folder" className={({isActive})=>isActive? classes.active : ""}>
          <FolderIcon/>
          <span>Test Cases</span>
        </NavLink>
        <NavLink to="/dashboard/test-runs" className={({isActive})=>isActive? classes.active : ""}>
          <CodeIcon/>
          <span>Test Runs</span>
        </NavLink>
      </section>
    </div>
  );
}