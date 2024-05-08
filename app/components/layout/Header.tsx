"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/LOGO-2.png";
import Star from "@/assets/images/star.svg";
import { usePathname, useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { userContext } from "../UserContextProvider";
import { deleteCookie } from 'cookies-next';
import useAuth from "@/app/common/hooks/useAuth";

const Header = () => {
  const {isLoggedIn} = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const { refreshUser, user, clearUser } = useContext(userContext);
  const [hide, isHide] = useState(false);

  const handleSignout = async () => {
    deleteCookie('jwt-token');
    clearUser();
    router.replace('/auth/signin');
  }

  useEffect(() => {
    if (isLoggedIn && !user) {
      refreshUser();
    }
  }, [isLoggedIn])

  return (
    <header className="bg-transparent fixed top-3 z-[99] w-full lg:px-7 md:px-7">
      <div className="mx-auto xl:max-w-screen-xl md:max-w-[100%] lg:py-2 py-1 px-6 lg:px-4 md:px-2 sm:px-6 bg-slate-950 rounded-xl shadow">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="" href="/">
              <Image className="lg:max-w-48 max-w-40" src={Logo} alt="logo" aria-label="logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm m-0 p-0">
                <li className={`menu-item ${pathname === "/" ? "current-menu-item" : ""}`}>
                  <Link className="text-white" href="/">Home</Link>
                </li>
                <li className={`menu-item ${pathname === "/about-us" ? "current-menu-item" : ""}`}>
                  <Link className="text-white" href="/about-us">About us</Link>
                </li>
               {/* <li className={`menu-item ${pathname === "/blogs" ? "current-menu-item" : ""}`}>
                 <Link href="/blog">blogs</Link>
               </li> */}
                <li className={`menu-item ${pathname === "/pricing" ? "current-menu-item" : ""}`}>
                  <Link className="text-white" href="/pricing">Pricing</Link>
                </li>
                <li className={`menu-item ${pathname === "/contact-us" ? "current-menu-item" : ""}`}>
                  <Link className="text-white" href="/contact-us">Contact us</Link>
                </li>
               {isLoggedIn && <li className={`menu-item ${pathname === "/gallery" ? "current-menu-item" : ""}`}>
                 <Link className="text-white" href="/gallery">Gallery</Link>
               </li>}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {!isLoggedIn &&<div className="sm:flex sm:gap-4">
              <Link className="pq-button-flat md:min-w-40" href="/auth/signin">Login</Link>
            </div>}

            {isLoggedIn && <div className={`w-14 text-white text-center flex items-center justify-center rounded-md h-9 gap-1 ${user?.credits <= 10 ? "bg-danger" : ""}`}>
              {user?.credits} <Image src={Star} alt="star" />
            </div>}

            {isLoggedIn && 
              <div className="relative">
                <button onClick={() => isHide(prev => !prev)} className="cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-md border bg-white w-9">
                  <span className="uppercase font-Mona_Medium py-1">{user?.username.split("")[0]}</span>
                </button>
              
                {hide && <div className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                  <div className="p-2">
                    <Link
                      href="/settings"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Account Settings
                    </Link>
              
                    <form method="POST" action="#">
                      <button
                        onClick={handleSignout}
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                      >
                        <FiLogOut /> Logout
                      </button>
                    </form>
                  </div>
                </div>}
              </div>
            }

            <div className="block md:hidden">
              {!isLoggedIn && <Link href="/auth/signin" className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                Login
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </header>
    // <header id="pq-header" className="pq-header-style-1 pq-has-sticky bg-transparent absolute top-3 z-10 w-full">
    //   <div className="pq-bottom-header">
    //     <div className="max-w-screen-2xl mx-auto">
    //       <nav className="navbar navbar-expand-lg bg-gray-950 rounded-xl px-6 py-0">
    //         <Link className="" href="/">
    //           <Image
    //             className="max-w-48"
    //             src={Logo}
    //             alt="logo"
    //             aria-label="logo"
    //           />
    //         </Link>
    //         <div
    //           className="collapse navbar-collapse"
    //           id="navbarSupportedContent"
    //         >
    //           <div id="pq-menu-contain" className="pq-menu-contain">
    //             <ul id="pq-main-menu" className="navbar-nav ml-auto">
    //               <li className={`menu-item ${pathname === "/" ? "current-menu-item" : ""}`}>
    //                 <Link href="/">home</Link>
    //               </li>
    //               <li className={`menu-item ${pathname === "/about-us" ? "current-menu-item" : ""}`}>
    //                 <Link href="/about-us">About us</Link>
    //               </li>
    //               {/* <li className={`menu-item ${pathname === "/blogs" ? "current-menu-item" : ""}`}>
    //                 <Link href="/blog">blogs</Link>
    //               </li> */}
    //               <li className={`menu-item ${pathname === "/pricing" ? "current-menu-item" : ""}`}>
    //                 <Link href="/pricing">Pricing</Link>
    //               </li>
    //               <li className={`menu-item ${pathname === "/contact-us" ? "current-menu-item" : ""}`}>
    //                 <Link href="/contact-us">contact us</Link>
    //               </li>
    //               {isLoggedIn && <li className={`menu-item ${pathname === "/gallery" ? "current-menu-item" : ""}`}>
    //                 <Link href="/gallery">Gallery</Link>
    //               </li>}
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="pq-btn-container auth-button-wrapper">
    //           <div className="pq-button-block">
    //             {isLoggedIn && <div className={`credits-wrapper ${user?.credits <= 10 ? "bg-danger" : ""}`}>
    //               {user?.credits} <Image src={Star} alt="star" />
    //             </div>}

    //             {!isLoggedIn && <Link href="/auth/signin" className="pq-button pq-button-flat">
    //               <span className="pq-button-text">Sign In</span>
    //             </Link>}

    //             {isLoggedIn && <div className="auth-dropdown">
    //               <Dropdown>
    //                 <Dropdown.Toggle variant="success" id="dropdown-basic">
    //                   {user?.username.split("")[0]}
    //                 </Dropdown.Toggle>

    //                 <Dropdown.Menu className="animate slideIn">
    //                   <div className="user-email-highlight"><span className="text-uppercase">{user?.username.split("")[0]}</span> {user?.email}</div>
    //                   <Link className="dropdown-item" href="/settings"><span><LuUser /></span> Account</Link>
    //                   <Dropdown.Divider />
    //                   <Dropdown.Item onClick={handleSignout}><span><FiLogOut /></span> Log out</Dropdown.Item>
    //                 </Dropdown.Menu>
    //               </Dropdown>
    //             </div>}
    //           </div>
    //         </div>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <i className="fas fa-bars"></i>
    //         </button>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
