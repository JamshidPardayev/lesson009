import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="h-[80px] flex items-center justify-between max-w-[1200px] mx-auto px-3">
      <img src={logo} alt="logo" className="h-[60px]" />
      <button className="w-[200px] h-[35px] bg-gray-900 text-white rounded hover:bg-gray-800 cursor-pointer duration-300">
        Contact
      </button>
    </div>
  );
};

export default Header;
