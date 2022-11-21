import { Link } from "react-router-dom";
import image from "../../images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

function Login() {
  return (
    <>
      <h1>Login to your Account</h1>
      <div className="column">
        <Illustration image={image} alt="Login" />

        <Form className={`${classes.login}`} action="#">
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput type="email" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Login</span>
          </Button>

          <div class="info">
            Don't have an account?{" "}
            <Link exact to="/signup">
              Signup
            </Link>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
