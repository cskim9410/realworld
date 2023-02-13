import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState, useRef } from "react";
import type { CurrentUser } from "../../types/user";
import { customPost } from "../../api/config";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user: { user: CurrentUser } = await customPost("/api/users/login", {
        user: {
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        },
      });
      localStorage.setItem("jwtToken", user.user.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[60%] text-center">
      <div className="mt-6 px-4">
        <h1 className="text-4xl font-medium mb-2">Log in</h1>
        <p className="mb-2">
          <Link
            to="/register"
            className="text-green mb-4 hover:text-darkGreen hover:underline"
          >
            Need an account?
          </Link>
        </p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <fieldset disabled={isLoading}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="input"
            />
            <button className="confirm-btn block ml-auto">Log in</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Login;
