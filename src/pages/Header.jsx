import main from "../img/logo_me.png";

const Header = () => {
  return (
    <div className="h-screen flex justify-center flex-wrap content-center">
      <img className="w-1/4" src={main} alt="" />
    </div>
  );
};

export default Header;
