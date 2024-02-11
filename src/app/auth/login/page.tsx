"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";

import useLoginMutation from "@/api/hooks/mutation/useLoginMutation";
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

const LoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate: credentials } = useLoginMutation({
    onSuccessfulCallback: () => router.push("/browse"),
  });

  const handleSubmit = (data: z.infer<typeof LoginSchema>) => {
    credentials({ login: data.username, password: data.password });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 p-20"
      >
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Login into account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account.
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
              <FormDescription>
                This is your username that you used for registration (not a
                public name).
              </FormDescription>
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
        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button
            variant="ghost"
            type="button"
            onClick={() => router.push("./register")}
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
