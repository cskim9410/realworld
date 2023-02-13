import { Link } from "react-router-dom";
const Login = () => {
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
        <form>
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="confirm-btn block ml-auto">Log in</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
