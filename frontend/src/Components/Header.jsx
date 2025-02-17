import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import logo from "../assets/images/online-food-logo.webp";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <div className="flex items-center justify-between self-start">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <img
            src={logo}
            alt="Book My Buddy Logo"
            className="h-8 sm:h-10 mr-4"
          />
        </Link>
        <form>
          <TextInput
            type="text"
            className="hidden lg:inline rounded-full bg-white border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400"
            placeholder="Search..."
            icon={AiOutlineSearch}
          />
        </form>
      </div>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Button color="orange"
          className="w-12 h-10 bg-orange-400 hover:bg-orange-400 text-white"
          pill
        >
          <IoBagHandleOutline />
        </Button>
        <Link to="/signin">
          <Button color="orange" className="custom-orange-reverse" pill>
            LOGIN
          </Button>
        </Link>
        <Link to="/signin">
          <Button color="orangeOutline" className="custom-orange-button" pill>
            SIGNUP
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/services"} as="div">
          <Link to="/services">Services</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
