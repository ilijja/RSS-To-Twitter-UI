import React, { useContext, useEffect } from "react";
import YourBlog from "./YourBlog";
import TabsNav from "./TabsNav";
import UserProgressContext from "@/store/UserProgresContext";
import GenerateManually from "./GenerateManually";
import Sheet from "./Sheet";

const Home = () => {
  const { currentTab } = useContext(UserProgressContext);

  return (
    <>
      <TabsNav />
      <div className="mt-5">
        {currentTab === "blog" && <YourBlog />}
        {currentTab === "generate" && <GenerateManually />}
        <Sheet/>
      </div>
    </>
  );
};

export default Home;
