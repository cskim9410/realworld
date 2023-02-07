import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-100 absolute bottom-0 py-4 w-full mt-[3rem]">
      <div className="px-[15px] md:max-w-[720px] sm:max-w-[576px] lg:max-w-[940px] mx-auto">
        <Link to="/" className="text-green font-logo">
          conduit
        </Link>
        <span className="text-gray-400 font-light text-xs ml-3">
          © 2023. An interactive learning project from{" "}
          <Link to="https://thinkster.io" className="text-green">
            Thinkster
          </Link>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </div>
  );
};
export default Footer;
