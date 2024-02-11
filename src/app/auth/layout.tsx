import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-zinc-800"></div>
      <div className="flex w-1/2 items-center justify-center h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
