import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks"; 
export default function MobileNav() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0(); //Auth0 hook 
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500"></CircleUserRound>
              {user?.email}
            </span>
          ) : (
            <span>Welcome to Dhabha.com!</span>
          )}
        </SheetTitle>
        <Separator></Separator>
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks></MobileNavLinks>
          ) : (
            <Button className="flex-1 font-bold bg-orange-500" onClick={()=> loginWithRedirect()}>Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
