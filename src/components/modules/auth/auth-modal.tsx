"use client";

import Login from "@/components/modules/auth/login";
import Registration from "@/components/modules/auth/registration";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 items-center justify-center rounded-lg">
          Auth modal
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="overview">
          <div className="flex justify-between w-full pt-5 pb-5">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="login">
                Login
              </TabsTrigger>
              <TabsTrigger className="w-full" value="register">
                Register
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="register">
            <Registration />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
