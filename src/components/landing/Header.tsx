import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-[100px]">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 h-full flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-[90px] object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
