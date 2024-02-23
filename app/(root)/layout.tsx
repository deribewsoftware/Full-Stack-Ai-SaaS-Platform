import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/SideBar";

const Layout = ({children}:{children:React.ReactNode}) => {
  return ( <main className="root">
   <Sidebar/>
   <MobileNav/>
    {children}
  </main> );
}
 
export default Layout;