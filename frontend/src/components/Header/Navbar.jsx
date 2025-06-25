import React, { useState } from 'react';
import {
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaComments,
  FaBell,
  FaTh,
  FaSearch,
} from 'react-icons/fa';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-800 px-4 py-2 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-700 text-3xl" />
            <div className="relative hidden sm:flex">
              <FaSearch className="absolute top-2.5 left-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 text-black pl-8 pr-4 py-1 rounded-full w-64 placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavItem icon={<FaHome />} label="Home" active />
            <NavItem icon={<FaUserFriends />} label="My Network" />
            <NavItem icon={<FaBriefcase />} label="Jobs" />
            <NavItem icon={<FaComments />} label="Messaging" />
            <NavItem icon={<FaBell />} label="Notifications" badge="1" />
            <NavItem
              icon={
                <img
                  src="https://i.pravatar.cc/24"
                  alt="me"
                  className="rounded-full w-5 h-5"
                />
              }
              label="Me"
              dropdown
            />
          </div>

          <div className="hidden lg:flex items-center gap-4 text-sm">
            <NavItem icon={<FaTh />} label="For Business" dropdown />
            <button className="text-yellow-600 font-semibold whitespace-nowrap">
              Try Premium for ₹0
            </button>
          </div>

       
          <div className="md:hidden z-50 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-b text-gray-700 px-4 py-3 space-y-4">
          <MobileItem icon={<FaHome />} label="Home" />
          <MobileItem icon={<FaUserFriends />} label="My Network" />
          <MobileItem icon={<FaBriefcase />} label="Jobs" />
          <MobileItem icon={<FaComments />} label="Messaging" />
          <MobileItem icon={<FaBell />} label="Notifications" badge="1" />
          <MobileItem
            icon={
              <img
                src="https://i.pravatar.cc/24"
                alt="me"
                className="rounded-full w-5 h-5 inline-block"
              />
            }
            label="Me"
            dropdown
          />
          <hr />
          <MobileItem icon={<FaTh />} label="For Business" dropdown />
          <button className="text-yellow-600 font-semibold">
            Try Premium for ₹0
          </button>
        </div>
      )}
    </>
  );
}

function NavItem({ icon, label, active, dropdown, badge }) {
  return (
    <div
      className={`flex flex-col items-center justify-center relative hover:text-blue-600 ${
        active ? 'text-black border-b-2 border-black' : 'text-gray-600'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
      {dropdown && <span className="text-[8px]">▼</span>}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

function MobileItem({ icon, label, dropdown, badge }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-xs px-1.5 rounded-full">
          {badge}
        </span>
      )}
      {dropdown && <span className="text-[10px]">▼</span>}
    </div>
  );
}
