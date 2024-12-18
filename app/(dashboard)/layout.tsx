import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="h-[75px] md:pl-56 w-full z-50 fixed inset-y-0">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="h-full md:pl-56 pt-[75px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
