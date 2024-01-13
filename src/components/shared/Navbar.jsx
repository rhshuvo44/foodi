import React, { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import LoginModal from "../LoginModal";
import { AuthContext } from "../../config/contexts/AuthProvider";
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:bg-transparent hover:text-accent transition-all duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2 w-28">
            <li>
              <NavLink
                to="menu"
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                All Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="salad"
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                Salad
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pizza"
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                Pizza
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 w-40">
            <li>
              <NavLink
                to="menu "
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                Online Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                Table Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                className="hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                Order Tracking
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          to="offers"
          className="hover:bg-transparent hover:text-accent transition-all duration-300 t"
        >
          Offers
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 easy-in-out">
      <nav
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-sm bg-base-100 transition-all duration-300 easy-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end mr-3 hidden lg:flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            to="contact"
            className="btn bg-accent rounded-full px-6 text-white flex items-center gap-2 hover:bg-black transition-all duration-500"
            onClick={() => document.getElementById("login").showModal()}
          >
            <FaRegUser className="w-4 h-4" /> Login
          </button>
          <LoginModal />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
