import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState, useRef } from "react";
import useLoginStore from "../../store/loginStore";
import { loginUser } from "../../api/user";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loginAction } = useLoginStore();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await loginUser({
        user: {
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
        <h1 className="text-4xl font-medium mb-2">Log in</h1>
        <p className="mb-2">
          <Link
            to="/register"
            className="text-green mb-4 hover:text-darkGreen hover:underline"
          >
            Need an account?
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset disabled={isLoading}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input px-6 py-4 text-lg"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="input px-6 py-4 text-lg"
            />
            <button className="confirm-btn block ml-auto text-xl py-3 px-6">
              Log in
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Login;
