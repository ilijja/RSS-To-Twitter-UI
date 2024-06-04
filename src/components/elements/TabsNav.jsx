import React, { useContext } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import AddWebsiteModal from "./AddWebsiteModal";
import { getAuthToken } from "../../util/auth";
import Options from "./Options";

const tabs = [
  { name: "Your Blog", val: "blog" },
  // { name: "Generate", val: "generate" },
];

const TabsNav = () => {
  const { currentTab, setTab, setShowModal } = useContext(UserProgressContext);

  const handleAddWebsite = () => {
    setShowModal(<AddWebsiteModal />);
  };

  const handleConnectTwitter = async () => {
    try {
      const authUrl = "http://127.0.0.1:3030/twitter/auth";
      const token = getAuthToken();

      const response = await fetch(authUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const { url } = await response.json();
        window.location.href = url;
      } else {
        throw new Error("Failed to connect to Twitter");
      }
    } catch (error) {
      console.error("Error connecting to Twitter:", error);
      alert("Connection to Twitter failed.");
    }
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="flex justify-between">
      <div className="bg-zinc-800 w-fit p-1 rounded-lg">
        <nav className="flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setTab(tab.val)}
              className={classNames(
                currentTab === tab.val
                  ? "bg-zinc-950 text-zinc-50"
                  : "text-zinc-400",
                "rounded-md px-3 py-1.5 text-sm font-medium w-32 flex justify-center"
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex justify-center items-center">

        <Options connectTwitterHandler={handleConnectTwitter} addWebsiteHandler={handleAddWebsite}/>
        {/* <Popover>
          <PopoverTrigger className="flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 rounded-lg w-10 h-10">
            <EllipsisVerticalIcon className="h-6 w-6 text-white" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col bg-zinc-950 text-zinc-50 border w-32 border-zinc-600 ">
            <Button>Ok</Button>
            <Button>Ok</Button>
          </PopoverContent>
        </Popover> */}
        {/*                 
                <span>
                <EllipsisVerticalIcon className="h-6 w-6 text-white" />
                </span> */}
      </div>

      {/* {currentTab === 'blog' && <button onClick={addWebsisteHandler} className="text-zinc-950 rounded-lg px-3 py-1.5 bg-zinc-50">
                <div className="flex flex-row align-middle gap-2 items-center justify-between">
                    <PlusCircleIcon className="h-5 w-5"/>
                    <span>Add website</span>            
                </div>
            </button>
            }

            <button onClick={handleConnectTwitter} className="w-12 h-full bg-zinc-50 rounded-md">
                Connect twitter
            </button> */}
    </div>
  );
};

export default TabsNav;
