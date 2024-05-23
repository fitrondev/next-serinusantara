import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";

const FacebookAction = () => {
  return (
    <div>
      <Button variant={"outline"}>
        <FaFacebook className="size-6 text-blue-800" />
      </Button>
    </div>
  );
};
export default FacebookAction;
