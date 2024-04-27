import Choose from "@/components/Choose";
import { ButtonDestructive } from "@/components/Click";
import NavbarComponent from "@/components/Navbar";
import { SidebarMenu } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col justify-between p-24">
    <div>
      <div className=" text-2xl font-semibold items-start p-[10px]">
        Dashboard
      </div>
      <div className=" grid grid-cols-5 ">
        <div className="col-span-3 flex flex-wrap gap-5"> 
          <div className="h-[136px] w-[204px] bg-[#FFEFE7] rounded-md">
            <div className=" p-3 font-normal text-start pl-5 text-base">
              Available Position
            </div>
            <div className="text-4xl px-6 pl-5"> 24</div>
            <div className="text-[#FF5151] h-[24px] p-2 pl-5">
              4 urgently needed
            </div>
          </div>
          <div className="h-[136px] w-[204px] bg-[#E8F0FB] rounded-md">
            <div className=" p-3 font-normal text-start pl-5 text-base">
              Job Open
            </div>
            <div className="text-4xl px-6 pl-5">10</div>
            <div className="text-[#FF5151] h-[24px] p-2 pl-5">
              10 Active hiring
            </div>
          </div>
          <div className="h-[136px] w-[204px] bg-[#FDEBF9] rounded-md">
            <div className=" p-3 font-normal text-start pl-5 text-base">
              New Employees
            </div>
            <div className="text-4xl px-6 pl-5">24</div>
            <div className="text-[#FF5151] h-[24px] p-2 pl-5">4 Department</div>
          </div>

          <div className="w-[312px] h-[190px] border rounded-md border-[#E0E0E0] grid grid-cols-5">
            <div className="col-span-3">
              <div className="font-normal p-3 text-[18px] pl-5">
                Total Employees
              </div>
              <div className=" text-4xl p-1 pl-5 font-semibold">216</div>
              <div className="text-[#686868] text-[12px] p-1 pl-5">120 Men</div>
              <div className="text-[#686868] text-[12px]  pl-5">96 Women</div>
            </div>
            <div className="mt-9 pr-4 col-span-2">
              <img src="./graph.png " />
            </div>
          </div>

          <div className="w-[320px] h-[190px] border rounded-md border-[#E0E0E0] grid grid-cols-5">
            <div className="col-span-3">
              <div className="font-normal p-3 text-[18px] pl-5">
                Talent Requests
              </div>
              <div className=" text-4xl p-1 pl-5 font-semibold">16</div>
              <div className="text-[#686868] text-[12px] p-1 pl-5">6</div>
              <div className="text-[#686868] text-[12px]  pl-5">10 Women</div>
            </div>
            <div className="mt-9 pr-4 col-span-2">
              <img src="./graph2.png " />
            </div>
          </div>

          <div className="border border-[#E0E0E0] w-[650px] h-[345px] rounded-md relative">
            <div className="p-4 flex justify-between ">
              <div className=" font-normal text-[18px]">Announcement</div>
              <div>
                <Choose />
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-[600px] text-[#303030] pt-3 p-4">
                <div className=" flex justify-between">
                  <div>
                    Outing schedule for every departement
                    <div className="text-[14px] text-[#686868]">
                      5 Minutes ago
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin.png" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-[600px] text-[#303030] pt-3 p-4">
                <div className=" flex justify-between">
                  <div>
                    Meeting HR Department
                    <div className="text-[14px] text-[#686868]">
                      Yesterday, 12:30 PM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin2.png" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[70px] w-[600px] text-[#303030] pt-0 p-4">
                <div className=" flex justify-between">
                  <div>
                    {" "}
                    IT Department need two more talents for UI/UX Designer
                    position
                    <div className="text-[14px] text-[#686868]">
                      Yesterday, 09:15 AM{" "}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin2.png" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[10px] border-t border-t-[#E0E0E0]  text-[16px] text-[#FF5151] text-center rounded-b-md w-[650px]">
              See All Announcement
            </div>
          </div>
        </div>

        <div className="col-span-2"> 
          <div className=" w-[475px] h-[258px] bg-[#161E54] rounded-md ml-2">
            <div className="text-white text-[18px] p-[10px] bg-[#1B204A] rounded-t-md pl-5">Recently Activity</div>
            <div className="text-gray-400 text-[10px] pt-6 pl-5">10.40 AM, Fri 10 Sept 2021</div>
            <div className="text-[18px] text-white pl-5 pt-1">You Posted a New Job</div>
            <div className="text-gray-300 text-[14px] pl-5 pr-10 pt-2">Kindly check the requirements and terms of work and make sure everything is right.</div>
          <div className="flex justify-between">
            <div className="text-[white] text-[14px] pl-5 pt-9">
            Today you makes 12 Activity
            </div>
             
            <div className="pr-8 pt-7">
             <ButtonDestructive />
             </div>
          
            
            
          </div>
          </div>


          <div>
          <div className="border border-[#E0E0E0] w-[475px] h-[424px] rounded-md overflow-hidden mt-[30px] ml-2">
            <div className="p-4 flex justify-between ">
              <div className=" font-normal text-[18px] pl-2">Upcoming Schedule</div>
              <div>
                <Choose />
              </div>
            </div>

            <div className="pl-[25px] pt-2">
            <div className="text-[#686868] text-[12px] pl-0 pb-2">Priority</div> 
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-[430px] text-[#303030] pt-3 p-4 ">
             
                <div className=" flex justify-between">
                  
                  <div className="">
                    Review candidate applications
                    <div className="text-[12px] text-[#686868]">
                      Today - 11.30 AM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
            <div className="text-[#686868] text-[12px] pl-0 pb-2">Other</div> 
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-[430px] text-[#303030] pt-3 p-4">
                <div className=" flex justify-between">
                  <div>
                    Interview with candidates
                    <div className="text-[12px] text-[#686868]">
                      Today - 10.30 AM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[70px] w-[430px] text-[#303030] pt-0 p-4">
                <div className=" flex justify-between">
                  <div>
                    
                    Short Meeting with Product Designer <br/>
                    from IT Department
                    <div className="text-[12px] text-[#686868]">
                     Today - 09.15 AM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[70px] w-[430px] text-[#303030] pt-0 p-4">
                <div className=" flex justify-between">
                  <div>
                    
                    
                    <div className="text-[14px] text-[#686868]">
                   
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="p-[10px] border-t border-t-[#E0E0E0] border-b border-b-[#E0E0E0] text-[16px] text-[#FF5151] text-center rounded-b-md w-[473px] bg-white  absolute bottom-[-165px]">
              Create a new schedule
            </div>
          </div>
          </div>



        </div>
      </div>
    </div>
    // </main>
  );
}
