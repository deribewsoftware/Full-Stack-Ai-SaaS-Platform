import Sidebar from "@/components/shared/SideBar";

const Layout = ({children}:{children:React.ReactNode}) => {
  return ( <div className="flex flex-col">
   <Sidebar/>
    {children}
  </div> );
}
 
export default Layout;