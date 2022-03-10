import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/xeontutorial-1dcee.appspot.com/o/images%2FLogo%20Restoran%20Fusion%20Elegan%20Klasik%20Cokelat%20(1).png?alt=media&token=66ba387d-b27d-40e2-b6cd-85e289ed71d3"
        alt=""
        className="w-[100px] h-[100px] lg:ml-[30px]"
        id="logo"
      />

      {/* search Box */}
      <div
        className="bg-searchBar h-[40px] flex items-center overflow-hidden px-2 ml-20 
      sm:hidden md:flex"
        id="searchBox"
      >
        <Search className="text-gray-400" />
        <input
          type="text"
          className="w-full h-full bg-transparent rounded-lg text-textColor outline-none border-none placeholder-gray-400 px-2"
          placeholder="Search"
        />
      </div>

      <div
        className="ml-auto flex items-center justify-evenly h-[40px] 
        sm:w-[75%] md:w-[50%] lg:w-[25%] "
        id="profileContainer" 
      >
        <IconButton className="lg:mx-4">
          <Settings className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <IconButton className="lg:mx-4">
          <Notifications className="text-gray-400 hover:text-textColor" />
        </IconButton>
        <div className="flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/xeontutorial-1dcee.appspot.com/o/images%2FZEPETO_-8585561958682290818.png?alt=media&token=b97c7bf2-abd7-48c8-8751-3c9aba479f83"
            alt=""
            className="rounded-full w-[40px] h-[40px] object-cover"
          />
          <p className="text-textColor text-[16px] font-bold ml-2">
          XEON{" "}
            <span className="block text-[12px] text-gray-500">
            Creator Zepeto
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
