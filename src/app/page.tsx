import HomePageOverview from "@/Components/HomePageOverview/HomePageOverview";
import HomeLayout from "@/Layout/HomeLayout";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <HomePageOverview />
    </HomeLayout>
  );
};

export default page;
