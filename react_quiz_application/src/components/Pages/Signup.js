import image from "../../images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

function Signup() {
  return (
    <>
      <h1>Create An Account</h1>
      <div className="column">
        <Illustration image={image} alter="Signup" />

        <Form className={classes.signup} action="#">
          <TextInput type="text" placeholder="Enter Name" icon="person" />

          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Enter Password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button>
            <span>Signup</span>
          </Button>

          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;
