import { Outlet } from "react-router-dom";
import { UserProgressContextProvider } from "@/store/UserProgresContext";
import { Toaster } from "@/components/ui/toaster";

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

export default RootLayout;
