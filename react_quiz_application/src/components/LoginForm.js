import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useHistory();

  async function handlelogin(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to login");
      setLoading(false);
    }
  }

  return (
    <Form style={{ height: "330px" }} action="#" onSubmit={handlelogin}>
      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button disabled={loading} type="Submit">
        <span>Login</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account?{" "}
        <Link exact to="/signup">
          Signup
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
}

export default LoginForm;
