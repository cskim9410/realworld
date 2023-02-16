import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState, useRef } from "react";
import useLoginStore from "../../store/loginStore";
import { registerUser } from "./../../api/user";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { loginAction } = useLoginStore();

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await registerUser({
        user: {
          username: usernameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        },
      });
      localStorage.setItem("jwtToken", user.user.token);
      loginAction();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[60%] text-center">
      <div className="mt-6 px-4">
        <h1 className="text-4xl font-medium mb-2">Sign Up</h1>
        <p className="mb-2">
          <Link
            to="/register"
            className="text-green mb-4 hover:text-darkGreen hover:underline"
          >
            Have an account?
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset disabled={isLoading}>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Username"
              className="input px-6 py-4 text-lg"
            />
            <input
              type="email"
              ref={emailRef}
              placeholder="Email"
              className="input px-6 py-4 text-lg"
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              className="input px-6 py-4 text-lg"
            />
            <button className="confirm-btn block ml-auto text-xl py-3 px-6">
              Sign Up
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
