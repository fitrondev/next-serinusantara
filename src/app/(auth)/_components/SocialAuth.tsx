import FacebookAction from "./FacebookAction";
import GoogleAction from "./GoogleAction";

const SocialAuth = () => {
  return (
    <div>
      <p className="text-center text-sm my-4">Or Continue With</p>

      <div className="flex items-center justify-center gap-4 ">
        <GoogleAction />
        <FacebookAction />
      </div>
    </div>
  );
};
export default SocialAuth;
