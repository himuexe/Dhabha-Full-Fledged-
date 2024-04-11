import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500"></CircleUserRound>
        {user?.email}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500 ">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator></Separator>
        <DropdownMenuItem>
            <Button className="flex flex-1 font-bold bg-orange-500" onClick={()=> logout()}>Log Out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
