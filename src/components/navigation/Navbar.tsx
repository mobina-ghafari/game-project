"use client";

import { routes } from "@/src/router/routes";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { logo } from "@/src/images";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem("authToken");
    return Boolean(token);
  });

  const menuItems = [
    {
      title: "Home",
      onClick: () => router.push(routes.home),
      route: routes.home,
    },
    {
      title: "Users",
      onClick: () => router.push(routes.users),
      route: routes.users,
    },
    {
      title: "Products",
      onClick: () => router.push(routes.products),
      route: routes.products,
    },
  ];
  return (
    <>
      <nav className="w-full sticky z-50 top-0 flex items-center justify-around shadow overflow-hidden py-2">
        <div className="flex items-center justify-center w-30 h-10 mt-2">
          <Image className="object-cover w-full" src={logo} alt="logo" />
        </div>
        <div className="flex">
          <ul className="flex items-center gap-x-5">
            {menuItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => {
                    item.onClick();
                  }}
                  className={`flex text-sm items-center cursor-pointer hover:text-primary ${pathname === item.route ? "text-primary" : " text-text-muted"} transition duration-300 ease-in-out `}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-s ps-3 ms-3 border-stone-800">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("authUsername");
                  setIsLoggedIn(false);
                  router.push(routes.home);
                } else {
                  router.push(routes.login);
                }
              }}
              className="text-white text-sm cursor-pointer border border-stone-800 hover:bg-stone-800 rounded py-1 px-3 outline-0 transition duration-300 ease-in-out"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
