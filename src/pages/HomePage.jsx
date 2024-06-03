import { redirect, useActionData, useLoaderData } from "react-router-dom";
import Home from "@/components/elements/Home";
import { useContext, useEffect } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import { getAuthToken } from "@/util/auth";
import { useToast } from "@/components/ui/use-toast";

const HomePage = () => {
  const { addFeeds, setTwitter, setHideModal } = useContext(UserProgressContext);
  const data = useLoaderData();
  const actionData = useActionData();
  const { toast } = useToast();

  useEffect(() => {
    if(actionData?.intent){
      toast({
        title: actionData.title,
        description: actionData.msg,
      })
    }
    setHideModal()
  }, [actionData]);

  useEffect(() => {
    addFeeds(data.data);
    setTwitter(data.user);
  }, [data]);

  return (
    <>
      <Home />
    </>
  );
};

export async function loader() {
  const token = getAuthToken();
  const url = "http://localhost:3030/feed";

  if (!token) {
    return redirect("/login");
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(url, options);

  const result = response.json();

  return result;
}

export default HomePage;
