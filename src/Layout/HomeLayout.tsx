import Footer from "@/Components/Footer/Footer";
import React from "react";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div style={{ marginTop: "0px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
