import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

function SignupForm() {
  return (
    <Form style={{ height: "500px" }} action="#">
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
        Already have an account?{" "}
        <Link exact to="/login">
          Login
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
}

export default SignupForm;
