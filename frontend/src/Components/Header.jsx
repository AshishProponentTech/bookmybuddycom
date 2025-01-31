import React, { useState } from 'react';
import { Navbar, Dropdown } from 'flowbite-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <Navbar.Toggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <Navbar.Collapse open={isMobileMenuOpen}>
          <Navbar.Link href="#" active={true}>
            Home
          </Navbar.Link>

          <Dropdown
            label="Dropdown"
            className="md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <Dropdown.Item href="#">Dashboard</Dropdown.Item>
            <Dropdown.Item>
              <Dropdown
                label="Dropdown"
                placement="right-start"
                className="dark:hover:bg-gray-600 dark:hover:text-white"
              >
                  <Dropdown.Item href="#">Overview</Dropdown.Item>
                  <Dropdown.Item href="#">My downloads</Dropdown.Item>
                  <Dropdown.Item href="#">Billing</Dropdown.Item>
                  <Dropdown.Item href="#">Rewards</Dropdown.Item>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item href="#">Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Sign out</Dropdown.Item>
          </Dropdown>

          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;