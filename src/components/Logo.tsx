import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-3xl font-bold bg-gradient-to-r from-primary to-primary/90 bg-clip-text text-transparent",
        className
      )}>
      SERI NUSANTARA
    </h1>
  );
};
export default Logo;
