import header_logo from "../assets/header_logo.png";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import GlassContainer from "../components/GlassContainer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between px-10 py-8 max-sm:py-12">
        <Link to="/" className="block w-[6.3rem] xl:mr-8">
          <img src={header_logo} width={100} height={100} alt="Ellyshia Tan" />
        </Link>

        <nav>
          <GlassContainer colored={true}>
            <ul
              className={`z-20 relative flex flex-col items-center justify-center lg:w-[472px] lg:flex-row lg:justify-between ${
                openNavigation ? "flex" : "hidden"
              }`}
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`/${item.url}`}
                  className={`block relative font-interItalic uppercase mx-7 after:content-[''] after:w-0 after:h-[1.5px] after:bg-color-2 after:absolute after:left-0 after:bottom-0 after:transition-width after:duration-200 hover:after:w-[95%] ${
                    item.url === pathName.hash ? "after:w-[95%]" : "after:w-0"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </ul>

            <button onClick={toggleNavigation} className="z-20 opacity-[80%]">
              <MenuSvg setOpenNavigation={openNavigation} />
            </button>
          </GlassContainer>
        </nav>
      </div>
    </header>
  );
};

export default Header;
