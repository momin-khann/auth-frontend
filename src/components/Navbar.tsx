import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navList = [
  {
    id: 1,
    link: "About",
    linkHref: "/about",
  },
  {
    id: 3,
    link: "Admin",
    linkHref: "/admin",
  },
  {
    id: 4,
    link: "Settings",
    linkHref: "/settings",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const user = useCurrentUser();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-md">
      <div className="flex">
        {navList.map((item) => (
          <Button
            key={item.id}
            variant={location.pathname === item.linkHref ? "default" : "ghost"}
            onClick={() => navigate(item.link.toLowerCase())}
          >
            {item.link}
          </Button>
        ))}
      </div>

      {/* Right-Side User Button with Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className={"outline-none"}>
          <Avatar>
            {/*<AvatarImage src={user?.profilePicture} />*/}

            <AvatarFallback className={"bg-sky-600"}>
              <FaUser className={"text-white"} />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        {/* Dropdown Content */}
        <DropdownMenuContent className="mt-1 p-2">
          <DropdownMenuItem>
            <Link to={"/settings"} className={"flex items-center gap-2"}>
              <GearIcon />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            // onClick={() => logout()}
            className={"flex items-center gap-2"}
          >
            <ExitIcon />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
export default Navbar;
