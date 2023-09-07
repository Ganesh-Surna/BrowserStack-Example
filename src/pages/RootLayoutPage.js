import { Outlet } from "react-router-dom";
import Card from "../UI/Card";
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import Root from "../UI/Root";

export default function RootLayoutPage() {
  return (
    <Root>
      <MainNavigation />
      <Sidebar/>
      <Card>
        <Outlet />
      </Card>
    </Root>
  );
}
