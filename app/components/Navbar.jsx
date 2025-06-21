"use client"
import { assets, BagIcon, CartIcon, HomeIcon} from "@/app/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const clerk = useClerk();
  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <>
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => handleNavigation('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => handleNavigation('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ? <>
        <UserButton>
          <UserButton.MenuItems>
          <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={handleNavigation("/cart")}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
          <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={handleNavigation("/my-orders")}/>
          </UserButton.MenuItems>
        </UserButton>
        </> : 
        <button onClick={() => clerk.openSignIn()} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => handleNavigation('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {user ? <>
        <UserButton>
          <UserButton.MenuItems>
          <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={handleNavigation("/")}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
          <UserButton.Action label="Product" labelIcon={<BoxIcon/>} onClick={handleNavigation("/all=products")}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
          <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={handleNavigation("/cart")}/>
          </UserButton.MenuItems>
          <UserButton.MenuItems>
          <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={handleNavigation("/my-orders")}/>
          </UserButton.MenuItems>
        </UserButton>
        </> : 
        <button onClick={() => clerk.openSignIn()} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </div>
    </nav>
        </>
  );
};

export default Navbar;