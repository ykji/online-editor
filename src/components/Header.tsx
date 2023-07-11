import { logo } from "../data/logo";

const Header = () => {
  return (
    <div className="w-full bg-[#060606] h-[8vh] p-2 header">
      <img src={logo} alt="logo" style={{ width: 40 }} />
    </div>
  );
};

export default Header;
