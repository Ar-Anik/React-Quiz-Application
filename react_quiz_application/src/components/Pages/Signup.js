import image from "../../images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

function Signup() {
  return (
    <>
      <h1>Create An Account</h1>
      <div className="column">
        <Illustration image={image} alter="Signup" />
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;
