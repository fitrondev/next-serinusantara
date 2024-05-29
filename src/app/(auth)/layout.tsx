import { auth } from "@/auth";
import Logo from "@/components/Logo";
import Image from "next/image";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) {
    return redirect("/");
  }
  return (
    <div className="relative w-screen h-screen flex items-center justify-center text-white">
      <Image
        src={"/auth.jpg"}
        alt=""
        fill
        priority
        className="object-cover brightness-50"
      />
      <Logo className="absolute top-4 left-4" />
      <div className="absolute">{children}</div>
    </div>
  );
};
export default AuthLayout;
