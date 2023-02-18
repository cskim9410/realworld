import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { putUser } from "./../../api/user";
import type { ChangeEvent, FormEvent } from "react";
import useUser from "./../../hooks/useUser";
import useLoginStore from "../../store/loginStore";
import useArticles from "../../hooks/useArticles";

interface Body {
  email: string | undefined;
  password?: string | undefined;
  username: string | undefined;
  bio: string | undefined;
  image: string | undefined;
}

const Settings = () => {
  const navigate = useNavigate();
  const { logoutAction } = useLoginStore();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: articlesMutate } = useArticles({ query: "?", page: 1 });
  const [disabled, setDisabled] = useState(false);

  const { user, isLoading: isUserLoading, mutate } = useUser();

  const [formBody, setFormBody] = useState<Body>({
    email: user?.email,
    password: "",
    username: user?.username,
    bio: user?.bio,
    image: user?.image,
  });

  const { email, password, username, bio, image } = formBody;

  const Logout = async () => {
    setDisabled(true);
    localStorage.removeItem("jwtToken");
    await articlesMutate();
    logoutAction();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    setFormBody({
      email: user?.email,
      password: "",
      username: user?.username,
      bio: user?.bio,
      image: user?.image,
    });
  }, [user]);

  const changeBodyProp = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormBody({
      ...formBody,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await putUser({
        user: formBody,
      });
      localStorage.setItem("jwtToken", user.token);
      if (mutate) await mutate();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[60%] text-center">
      <div className="mt-6 px-4">
        <h1 className="text-4xl font-medium mb-2">Your Settings</h1>
        <form onSubmit={handleSubmit}>
          <fieldset disabled={isLoading}>
            <input
              type="text"
              placeholder="URL or profile picture"
              name="image"
              onChange={changeBodyProp}
              value={image}
              className="input px-3 py-2 text-[1rem]"
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeBodyProp}
              value={username}
              className="input px-6 py-3 text-lg"
            />
            <textarea
              rows={8}
              placeholder="Short bio about you"
              onChange={changeBodyProp}
              name="bio"
              value={bio}
              className="input px-6 py-3 text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeBodyProp}
              value={email}
              className="input px-6 py-3 text-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              name="password"
              onChange={changeBodyProp}
              className="input px-6 py-3 text-lg"
            />
            <button className="confirm-btn block ml-auto text-xl py-3 px-6">
              Update Settings
            </button>
          </fieldset>
        </form>
        <hr className="my-4" />
        <button
          onClick={Logout}
          disabled={disabled}
          className="py-2 px-4 text-danger border border-danger hover:bg-danger hover:text-white rounded font-semibold text-base disabled:bg-danger disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Or click here to logout.
        </button>
      </div>
    </div>
  );
};
export default Settings;
