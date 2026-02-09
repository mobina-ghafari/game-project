"use client";

import Image from "next/image";
import { logo } from "@/src/images";
import { useForm } from "react-hook-form";
import { usePost } from "@/src/services/api/useApi";
import { dummyEndpoints } from "@/src/services/api/endpoints";
import { LoginBody, LoginResponse } from "@/src/types/login";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { routes } from "@/src/router/routes";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginBody>();
  const router = useRouter();

  const { mutateAsync, isPending } = usePost<LoginResponse, LoginBody>();

  const onSubmit = async (values: LoginBody) => {
    try {
      const res = await mutateAsync({
        url: dummyEndpoints.login,
        body: { ...values, expiresInMins: 30 },
        source: "dummy",
      });
      localStorage.setItem("authToken", res.token);
      localStorage.setItem("authUsername", res.username);
      toast.success("Login successful");
      router.push(routes.home);
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="w-ful h-screen flex justify-center items-center">
      <div className="w-full mx-2 md:w-1/2 lg:w-3/12 h-full flex flex-col items-center justify-center">
        <div className="w-40 flex items-center justify-center">
          <Image className="object-cover w-full" src={logo} alt="logo" />
        </div>
        <span className="text-text-white font-bold text-4xl">Welcome back</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="w-full mt-10"
        >
          <div className="">
            <label htmlFor="username" className="text-text-white text-sm">
              Username
            </label>
            <input
              id="username"
              className="w-full outline-0 border border-stone-800 text-text-white text-sm p-2 rounded mt-2 focus:border-primary"
              {...register("username")}
              type="text"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="text-text-white text-sm">
              Password
            </label>
            <input
              id="password"
              className="w-full outline-0 border border-stone-800 text-text-white text-sm p-2 rounded mt-2 focus:border-primary"
              {...register("password")}
              type="password"
            />
          </div>
          <button
            type="submit"
            className="bg-primary w-full rounded py-2 text-text-white mt-5 cursor-pointer hover:opacity-80"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
