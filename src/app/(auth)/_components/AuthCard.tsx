import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AuthCard = ({
  title,
  footer,
  children,
}: {
  title: string;
  footer: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="w-[380px] bg-foreground/70 text-white border-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="text-sm justify-center">
        {footer === "login" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-primary">
              Register
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary">
              Login
            </Link>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};
export default AuthCard;
