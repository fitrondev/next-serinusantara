import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleAction = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}>
      <Button variant={"outline"} type="submit">
        <FcGoogle className="size-6" />
      </Button>
    </form>
  );
};
export default GoogleAction;
