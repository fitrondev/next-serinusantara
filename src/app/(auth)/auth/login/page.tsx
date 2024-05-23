import AuthCard from "../../_components/AuthCard";
import LoginForm from "../../_components/LoginForm";
import SocialAuth from "../../_components/SocialAuth";

const LoginPage = () => {
  return (
    <AuthCard title="Login" footer="login">
      <LoginForm />
      <SocialAuth />
    </AuthCard>
  );
};
export default LoginPage;
