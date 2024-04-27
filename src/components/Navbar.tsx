"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
// import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
// import * as Icon from "react-feather";
// import { ThemeContext } from "./Provider";

import { SidebarMenu } from "./Sidebar";
import Search from "./Search";
// import User from "./User";

export default function NavbarComponent() {
  const router = useRouter();
//   const theme = useContext(ThemeContext);
//   const { setTheme } = useTheme();
  const logout = () => {
    localStorage.removeItem("user");

    router.replace("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 border-b">
      <nav
        className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger className="text-black mt-2">
                  <Menu />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                  <SheetHeader>
                    <SheetTitle className="text-left text-xl font-bold ml-3 text-black ">
                      ZU AI
                    </SheetTitle>
                    <SheetDescription>
                      <SidebarMenu />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="border border-gray-500 w-[343px] rounded-sm">
              <Search />
            </div>
          </div>

          <div className="flex items-center">
            {/* //notification icon */}
            <div className="p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5015 22C13.8066 22 14.8745 21.0769 14.8745 19.9487H10.1284C10.1284 20.4928 10.3784 21.0145 10.8235 21.3992C11.2685 21.7839 11.8721 22 12.5015 22ZM19.6205 15.8462V10.7179C19.6205 7.56923 17.6747 4.93333 14.2812 4.2359V3.53846C14.2812 2.68718 13.4863 2 12.5015 2C11.5167 2 10.7217 2.68718 10.7217 3.53846V4.2359C7.3164 4.93333 5.38238 7.55897 5.38238 10.7179V15.8462L3.85177 17.1692C3.10427 17.8154 3.62634 18.9231 4.68233 18.9231H20.3087C21.3647 18.9231 21.8987 17.8154 21.1512 17.1692L19.6205 15.8462Z"
                  fill="#B2B2B2"
                />
                <circle
                  cx="17.5"
                  cy="7"
                  r="4.5"
                  fill="#FF5151"
                  stroke="white"
                />
              </svg>
            </div>

            {/* //chat icon */}
            <div className=" p-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2.35403C0.5 1.72971 0.737053 1.13095 1.15901 0.689481C1.58097 0.248014 2.15326 0 2.75 0L16.25 0C16.8467 0 17.419 0.248014 17.841 0.689481C18.2629 1.13095 18.5 1.72971 18.5 2.35403V11.7702C18.5 12.3945 18.2629 12.9933 17.841 13.4347C17.419 13.8762 16.8467 14.1242 16.25 14.1242H5.46575C5.16741 14.1243 4.8813 14.2483 4.67037 14.4691L1.46075 17.8271C1.38215 17.9095 1.28193 17.9657 1.17279 17.9886C1.06365 18.0114 0.950486 17.9999 0.847624 17.9554C0.744763 17.9109 0.656827 17.8355 0.594947 17.7387C0.533067 17.6419 0.500024 17.5281 0.5 17.4116V2.35403ZM6.125 7.0621C6.125 6.74994 6.00647 6.45056 5.7955 6.22983C5.58452 6.00909 5.29837 5.88509 5 5.88509C4.70163 5.88509 4.41548 6.00909 4.2045 6.22983C3.99353 6.45056 3.875 6.74994 3.875 7.0621C3.875 7.37427 3.99353 7.67365 4.2045 7.89438C4.41548 8.11511 4.70163 8.23912 5 8.23912C5.29837 8.23912 5.58452 8.11511 5.7955 7.89438C6.00647 7.67365 6.125 7.37427 6.125 7.0621ZM10.625 7.0621C10.625 6.74994 10.5065 6.45056 10.2955 6.22983C10.0845 6.00909 9.79837 5.88509 9.5 5.88509C9.20163 5.88509 8.91548 6.00909 8.7045 6.22983C8.49353 6.45056 8.375 6.74994 8.375 7.0621C8.375 7.37427 8.49353 7.67365 8.7045 7.89438C8.91548 8.11511 9.20163 8.23912 9.5 8.23912C9.79837 8.23912 10.0845 8.11511 10.2955 7.89438C10.5065 7.67365 10.625 7.37427 10.625 7.0621ZM14 8.23912C14.2984 8.23912 14.5845 8.11511 14.7955 7.89438C15.0065 7.67365 15.125 7.37427 15.125 7.0621C15.125 6.74994 15.0065 6.45056 14.7955 6.22983C14.5845 6.00909 14.2984 5.88509 14 5.88509C13.7016 5.88509 13.4155 6.00909 13.2045 6.22983C12.9935 6.45056 12.875 6.74994 12.875 7.0621C12.875 7.37427 12.9935 7.67365 13.2045 7.89438C13.4155 8.11511 13.7016 8.23912 14 8.23912Z"
                  fill="#B2B2B2"
                />
              </svg>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className=" flex ">
                 {/* <div className="p-3"> <User /> </div> */}
                  <a
                    className="font-medium text-black flex items-center"
                    href="#"
                    aria-current="page"
                  >
                    Admirra John
                    <div className="p-1">
                        <svg
                      style={{
                        marginLeft: "2px",
                        height: "18px",
                        width: "18px",
                      }}
                      width="18"
                      height="18"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 10L12.5 15L18.5 10"
                        stroke="#737898"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    </div>
                  </a>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  onClick={() => logout()}
                  className="text-red-400 py-2"
                >
                  {/* <span>
                    <Icon.LogOut size={15} className="mr-2" />
                  </span>{" "} */}
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
