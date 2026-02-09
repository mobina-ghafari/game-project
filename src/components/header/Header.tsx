"use client";

import { routes } from "@/src/router/routes";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="header-style relative hidden lg:block">
        <div className="header-content flex justify-start items-center w-full ms-10 h-full">
          <div className="flex flex-col">
            <span className="text-6xl text-text-bold font-extrabold">
              Built for Gamers,
            </span>
            <span className="text-6xl text-[#5eead4] font-extrabold bg-primary/30 px-1 rounded-s-md border-e-2 mt-5">
              Powered by Passion
            </span>
            <div className="mt-10">
              <button
                onClick={() => router.push(routes.products)}
                className="py-5 px-10 text-text-bold text-xl rounded-md bg-primary hover:opacity-80 cursor-pointer"
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full h-[90vh] ">
        <div className="flex justify-center items-center w-full h-full ms-10">
          <div className=" flex flex-col">
            <span className="text-6xl text-text-white font-extrabold">
              Built for Gamers,
            </span>
            <span className="text-6xl text-[#5eead4] font-extrabold bg-primary/30 px-1 rounded-s-md border-e-2 mt-5">
              Powered by Passion
            </span>
            <div className="mt-10">
              <button className="py-5 px-10 text-text-white text-xl rounded-md bg-primary hover:opacity-80 cursor-pointer">
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
