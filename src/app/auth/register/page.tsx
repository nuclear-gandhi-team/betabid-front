"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import useRegisterMutation from "@/api/hooks/mutation/useRegisterMutation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const RegistrationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  passwordConfirmation: z.string().min(1, { message: "Confirm your password" }),
});

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
  });

  const { mutate: credentials } = useRegisterMutation({
    onSuccessfulCallback: () => router.push("./login"),
  });

  const handleSubmit = (data: z.infer<typeof RegistrationSchema>) => {
    credentials({
      login: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.passwordConfirmation,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 p-20"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to create your account.
          </p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Username</FormLabel>
              <FormControl>
                <Input placeholder="Hjyup" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Your username will be also displayed for a public. You can add
                public name in the settings to change this behavior.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="yourmail@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel color="black">Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button
            variant="ghost"
            type="button"
            onClick={() => router.push("./login")}
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
