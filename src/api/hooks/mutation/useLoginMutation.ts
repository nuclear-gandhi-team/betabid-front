"use client";

import { useMutation } from "react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";

import { User } from "@/api/services/user";
import { LoginCredentials, LoginResponse } from "@/api/types/login-credentials";

const useLoginMutation = () => {
  const inThreeHours = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
  const { mutate, isLoading, isError, data } = useMutation<
    LoginResponse,
    Error,
    LoginCredentials
  >((loginData: LoginCredentials) => User.postLoginCredentials(loginData), {
    onSuccess: (data) => {
      Cookies.set("jwtToken", data.token, {
        expires: inThreeHours,
        secure: true,
        sameSite: "strict",
      });
      toast("Login successful");
    },
    onError: (error) => {
      toast(`Failed to log in: ${error.message}`);
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useLoginMutation;
