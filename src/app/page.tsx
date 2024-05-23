import { auth } from "@/auth";
import { SignOut } from "@/components/SignOut";

const Home = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const user = session.user;
  return (
    <>
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>Your email is {user.email}</p>
      </div>
      <SignOut />
    </>
  );
};
export default Home;
