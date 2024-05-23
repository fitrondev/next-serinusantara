import Logo from "@/components/Logo";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
