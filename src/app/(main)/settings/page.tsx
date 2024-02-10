"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import PageTitle from "@/components/modules/page-title";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const SettingsPasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, { message: "You should know your current password" }),
  newPassword: z.string().min(1, { message: "New password is required" }),
  passwordConfirmation: z
    .string()
    .min(1, { message: "New password confirmation required" }),
});
const SettingsNamedSchema = z.object({
  email: z.string().min(3),
  publicName: z.string().min(1),
});

const Page = () => {
  const formPassword = useForm<z.infer<typeof SettingsPasswordSchema>>({
    resolver: zodResolver(SettingsPasswordSchema),
  });
  const formName = useForm<z.infer<typeof SettingsNamedSchema>>({
    resolver: zodResolver(SettingsNamedSchema),
  });

  const handleSubmitPassword = (
    data: z.infer<typeof SettingsPasswordSchema>,
  ) => {
    toast("You changed your password successfully!");
    console.log(data);
  };
  const handleSubmitName = (data: z.infer<typeof SettingsNamedSchema>) => {
    toast("You changed your public name successfully!");
    console.log(data);
  };

  return (
    <div className="mb-6">
      <PageTitle
        title="Settings"
        description="Here you can manage your account settings"
      />
      <Form {...formPassword}>
        <form
          onSubmit={formPassword.handleSubmit(handleSubmitPassword)}
          className="space-y-4 mx-6 mt-4 mb-8"
        >
          <FormLabel className="text-xl -mx-2">Security</FormLabel>
          <Separator className="w-2/12 -mx-2" />
          <FormField
            control={formPassword.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Current password</FormLabel>
                <FormControl>
                  <Input
                    className="w-2/3 min-w-[250px]"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={formPassword.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">New password</FormLabel>
                <FormControl>
                  <Input
                    className="w-2/3 min-w-[250px]"
                    type="password"
                    placeholder="•••••••••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={formPassword.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">Confirm new password</FormLabel>
                <FormControl>
                  <Input
                    className="w-2/3 min-w-[250px] "
                    type="password"
                    placeholder="•••••••••••••••"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Update</Button>
        </form>
      </Form>

      <Form {...formName}>
        <form
          onSubmit={formName.handleSubmit(handleSubmitName)}
          className="space-y-4 mx-6 mt-4"
        >
          <FormLabel className="text-xl -mx-2">Public name and email</FormLabel>
          <Separator className="w-2/12 -mx-2" />
          <FormField
            control={formName.control}
            name="publicName"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">New public name</FormLabel>
                <FormControl>
                  <Input
                    className="w-2/3 min-w-[250px]"
                    placeholder="Dima"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The public name will be shown to all users. By default, the
                  public name is the same as the user name. Your current public
                  name is <span className="font-bold">Public Name</span>
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={formName.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel color="black">New email</FormLabel>
                <FormControl>
                  <Input
                    className="w-2/3 min-w-[250px]"
                    type="email"
                    placeholder="example@email.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your current email is{" "}
                  <span className="font-bold">password</span>
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Yes, delete my account</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Page;
