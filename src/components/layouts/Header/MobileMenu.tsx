import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenu2Fill } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { Session } from "next-auth";
import Logo from "@/components/Logo";

const MobileMenu = ({ session }: { session: Session | null }) => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden inline-flex items-center gap-2">
        <RiMenu2Fill className="size-6 select-none text-background" />
        <Logo />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <NavLinks className="h-full text-2xl flex flex-col justify-center gap-5" />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
