"use client";

import { routes } from "@/src/router/routes";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { logo } from "@/src/images";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
      <nav className="w-full sticky z-50 top-0 flex items-center justify-around shadow overflow-hidden p-1">
        <div className="">
          <Image className="w-30" src={logo} alt="logo" />
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
            <button className="text-white text-sm cursor-pointer border border-stone-800 hover:bg-stone-800 rounded py-1 px-3 outline-0 transition duration-300 ease-in-out">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
