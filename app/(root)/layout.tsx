import { ReactNode } from "react";
import Navbar from "@/app/(root)/_components/navbar/navbar";
import Footer from "@/app/(root)/_components/footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full w-full flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
