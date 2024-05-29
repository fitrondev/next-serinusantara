import Logo from "@/components/Logo";
import { auth } from "@/auth";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import DropdownProfile from "./DropdownProfile";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="container h-16 flex items-center justify-between">
        <MobileMenu session={session} />

        <div className="hidden lg:inline-flex items-center gap-x-5">
          <Logo />
          <NavLinks className="space-x-5" />
        </div>

        <div>
          {session ? (
            <div className="flex gap-5">
              <div className="inline-flex items-center gap-5">
                <FiSearch className="size-5 text-background" />
                <MdNotificationsNone className="size-6 text-background" />
              </div>
              <DropdownProfile session={session} />
            </div>
          ) : (
            <Button asChild>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
