import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { HiUserGroup } from "react-icons/hi";
import { Play, ListVideo, Music, User, Mic2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaCircleRadiation } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io"

type Menu = {
  label: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  submenu?: Submenu[];
};

type Submenu = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export function SidebarMenu() {
  const menus: Menu[] = [
    {
      label: "Main Menu",
      name: "Dashboard",
      icon: (
        <MdDashboard
          size={20}
          className="mr-2"
          style={{ color: "rgba(255, 81, 81, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Main Menu",
      name: "Recruitment",
      icon: (
        <TiUserAdd
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Main Menu",
      name: "Schedule",
      icon: (
        <BiSolidCalendarEvent
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Main Menu",
      name: "Employee",
      icon: (
        <HiUserGroup
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Main Menu",
      name: "Department",
      icon: (
        <FaCircleRadiation
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Other",
      name: "Support",
      icon: (
        <BiSupport
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
    {
      label: "Other",
      name: "Settings",
      icon: (
        <IoMdSettings
          size={20}
          className="mr-2"
          style={{ color: "rgba(178, 178, 178, 1)" }}
        />
      ),
      href: "/",
    },
  ];

  const uniqueLabels = Array.from(new Set(menus.map((menu) => menu.label)));

  return (
    <ScrollArea className="h-screen lg:w-56 sm:w-full bg-gray-50 border ">
      <div className="text-center text-3xl font-bold m-3 p-3 pt-8 w-32 h-16">
        ZU AI
      </div>
      <div className="md:px-4 sm:p-0 mt-5 ">
        {uniqueLabels.map((label, index) => (
          <React.Fragment key={label}>
            {label && (
              <p
                className={`mx-4 mb-3 text-xs text-left  tracking-wider pt-5 text-slate-400 ${
                  index > 0 ? "mt-10" : ""
                }`}
              >
                {label}
              </p>
            )}
            {menus.map((menu) =>
              menu.label === label ? (
                <div
                  key={menu.name}
                  className={`px-0.5 ${
                    menu.name == "Dashboard"
                      ? " text-[#ff5201]"
                      : "text-[#686868]"
                  } `}
                >
                  <Link
                    href={menu.href}
                    className="flex text-xs h-10 my-2 items-center p-4  hover:bg-primary dark:hover:bg-primary dark:hover:text-background hover:text-white rounded-md"
                  >
                    <div className="w-6">{menu.icon}</div>
                    <div className=" p-3 text-[16px]">{menu.name}</div>
                  </Link>
                </div>
              ) : null
            )}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
