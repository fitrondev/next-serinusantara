import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-xl lg:text-3xl font-bold bg-primary px-2 rounded-full text-white",
        className
      )}>
      SERI NUSANTARA
    </h1>
  );
};
export default Logo;
