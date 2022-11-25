import image from "../../images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

function Login() {
  return (
    <>
      <h1>Login to your Account</h1>
      <div className="column">
        <Illustration image={image} alt="Login" />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
