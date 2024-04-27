import NavbarComponent from "@/components/Navbar";
import { SidebarMenu } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col justify-between p-24">
   <div>
    <div className=" text-2xl font-semibold items-start p-[10px]">Dashboard</div>
    <div className=" grid grid-cols-9 ">
    
    <div className="col-span-5 flex flex-wrap gap-5" >
    <div className="h-[136px] w-[204px] bg-[#FFEFE7] rounded-md">
      <div className=" p-3 font-normal text-start pl-5 text-base">Available Position</div>
      <div className="text-4xl px-6 pl-5"> 24</div>
      <div className="text-[#FF5151] h-[24px] p-2 pl-5">4 urgently needed</div>
    </div>
    <div className="h-[136px] w-[204px] bg-[#E8F0FB] rounded-md">
      <div className=" p-3 font-normal text-start pl-5 text-base">Job Open</div>
      <div className="text-4xl px-6 pl-5">10</div>
      <div className="text-[#FF5151] h-[24px] p-2 pl-5">10 Active hiring</div>
    </div>
    <div className="h-[136px] w-[204px] bg-[#FDEBF9] rounded-md">
      <div className=" p-3 font-normal text-start pl-5 text-base">New Employees</div>
      <div className="text-4xl px-6 pl-5">24</div>
      <div className="text-[#FF5151] h-[24px] p-2 pl-5">4 Department</div>
    </div>

    </div>


    
    <div className="col-span-4 bg-orange-400">
column2 
    </div>


    </div>
   </div>
    // </main>
  );
}
