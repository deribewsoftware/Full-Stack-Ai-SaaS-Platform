import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return ( <aside className="sidebar">
    <div className="flex size-full gap-4 flex-col">
      <Link href="/">
      <Image
       alt="logo" 
      src="/assets/images/logo-text.svg" width={180} height={28}/>
      </Link>
    </div>
  </aside> );
}
 
export default Sidebar;