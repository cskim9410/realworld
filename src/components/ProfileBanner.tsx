import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { deleteFollow, postFollow } from "../api/profile";
import useUser from "../hooks/useUser";
import useLoginStore from "../store/loginStore";
import { useState } from "react";
import useProfile from "../hooks/useProfile";

interface PorfileBannerProps {
  username: string;
}

const ProfileBanner = ({ username }: PorfileBannerProps) => {
  const { profile, mutate } = useProfile(username);
  const { user } = useUser();
  const navigate = useNavigate();
  const { image, bio, following } = profile.profile;
  const { isLogin } = useLoginStore();
  const [disabled, setDisabled] = useState(false);

  const clickFollowBtn = async () => {
    if (!isLogin) navigate("/login");
    setDisabled(true);
    following ? await deleteFollow(username) : await postFollow(username);
    await mutate();
    setDisabled(false);
  };

  return (
    <div className="bg-[#f3f3f3] w-full pt-8 pb-4 mb-8">
      <div className="screen-width px-[15px]">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            alt="user-img"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h4 className="font-bold text-2xl leading-4 mb-2">{username}</h4>
          <p className="mb-2 text-[#aaa] font-light">{bio}</p>
        </div>
        {username === user?.user.username ? (
          <Link to={`/settings`}>
            <button className="text-[#999] border border-[#464040] hover:bg-[#ccc] rounded px-2 py-1 text-sm ml-auto block">
              Edit Profile Settings
            </button>
          </Link>
        ) : (
          <button
            onClick={clickFollowBtn}
            disabled={disabled}
            className={`mr-1 border rounded px-2 py-1 text-sm leading-[1.25]  h-fit transition-all disabled:cursor-not-allowed disabled:opacity-50 ml-auto block ${
              following
                ? "bg-white opacity-80 hover:bg-[#e6e6e6] hover:opacity-100 text-[#373a3c]"
                : "hover:bg-[#ccc] hover:text-white border-[#ccc] text-[#ccc]"
            }`}
          >
            <div className="flex">
              <BiPlus className="inline mr-1" />
              {`${following ? "Unf" : "F"}ollow ${username}`}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileBanner;
