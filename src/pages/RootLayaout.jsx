import { Outlet, redirect } from "react-router-dom";
import { UserProgressContextProvider } from "@/store/UserProgresContext";
import { Toaster } from "@/components/ui/toaster";
import { checkIfLogged, getAuthToken } from "@/util/auth";

const RootLayout = () => {
  return (
    <main>
      <UserProgressContextProvider>
        <Outlet />
        <Toaster />
      </UserProgressContextProvider>
    </main>
  );
};

export async function loader() {

  // const token = getAuthToken()

  // if(token){
  //   return redirect('/home')
  // }

  return null
}

export default RootLayout;
