"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { Registration } from "@/api/services/registration";
import { RegistrationCredentials } from "@/api/types/registrationCredentials";

const useRegister = () => {
  const { mutate, isLoading, isError } = useMutation(
    (registerData: RegistrationCredentials) =>
      Registration.postRegistrationCredentials(registerData),
    {
      onSuccess: () => {
        toast("Account was created, you need only to login");
      },
      onError: (error: Error) => {
        toast(`Failed to register ${error.message}`);
      },
    },
  );

  return { mutate, isLoading, isError };
};

export default useRegister;
