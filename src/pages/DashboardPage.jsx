import { Outlet } from "react-router-dom";
import Sidebar from "@/components/elements/Sidebar";

const DashboardPage = () => {
  return (
      <Sidebar>
        <Outlet />
      </Sidebar>
  );
}

export async function action({request, params}){

    return null;

}

export default DashboardPage;
