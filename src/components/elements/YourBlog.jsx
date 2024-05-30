import BlogsTable from "./BlogsTable";
import Modal from "./Modal";
import ComboboxPicker from "./ComboboxPicker";
import SwitchAutomatic from "./SwitchAutomatic";
import { TrashIcon } from "@heroicons/react/24/outline";
import { act, useContext } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import { ButtonOutline } from "../ui/button-outline";
import { Loader2, RefreshCcw } from "lucide-react";
import { useNavigation, useSubmit } from "react-router-dom";
import { useToast } from "../ui/use-toast";

const YourBlog = () => {
  const { feeds, activeFeed } = useContext(UserProgressContext);
  const submit = useSubmit();
  const navigation = useNavigation();
  // const {toast} = useToast();

  const isSubmitting = navigation.state === "submitting";

  const handleUpdateBlogs = () => {
    const formData = new FormData();
    formData.append("url", activeFeed.url);
    formData.append("name", activeFeed.name);
    formData.append("feedId", activeFeed._id);
    formData.append("intent", "addWebsite")
    submit(formData, { method: "POST" });
  };

  return (
    <>
      <div className="mt-2">
        <div className=" space-y-1">
          <h2 className="text-zinc-50 font-semibold text-2xl">Your blogs</h2>
          <p className="text-sm text-zinc-400">
            Your recent blogs. Updated every hour.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-zinc-700 h-[1px] w-full my-4"
        ></div>

        <div className="flex flex-col gap-3">
          <div className="w-full flex justify-between align-middle items-center py-3">
            <div className="inline-flex h-8 gap-2 items-center">
              {feeds.length > 0 && <ComboboxPicker />}
              <ButtonOutline onClick={handleUpdateBlogs}>
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCcw className="w-4 h-4" />
                )}
              </ButtonOutline>
            </div>

            <div className="inline-flex gap-1">
              {feeds.length > 0 && <SwitchAutomatic />}
            </div>
          </div>
          <BlogsTable />
        </div>

        
        <Modal /> 
      </div>
    </>
  );
};

export default YourBlog;
