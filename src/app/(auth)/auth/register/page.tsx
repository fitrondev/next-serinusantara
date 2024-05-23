import AuthCard from "../../_components/AuthCard";
import RegisterForm from "../../_components/RegisterForm";
import SocialAuth from "../../_components/SocialAuth";

const RegisterPage = () => {
  return (
    <AuthCard title="Register" footer="register">
      <RegisterForm />
      <SocialAuth />
    </AuthCard>
  );
};
export default RegisterPage;
