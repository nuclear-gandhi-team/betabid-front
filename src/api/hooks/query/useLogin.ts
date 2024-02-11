"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { Login } from "@/api/services/login";
import { LoginCredentials, LoginResponse } from "@/api/types/loginCredentials";

const useLogin = () => {
  const { mutate, isLoading, isError, data } = useMutation<
    LoginResponse,
    Error,
    LoginCredentials
  >((loginData: LoginCredentials) => Login.postLoginCredentials(loginData), {
    onSuccess: (data) => {
      localStorage.setItem("jwtToken", data.token);
      console.log(data.token);
      toast("Login successful");
    },
    onError: (error) => {
      toast(`Failed to log in: ${error.message}`);
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useLogin;
