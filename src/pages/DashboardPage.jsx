import { Outlet } from "react-router-dom";
import Sidebar from "@/components/elements/Sidebar";
import { getAuthToken } from "@/util/auth";

const DashboardPage = () => {
  return (
      <Sidebar>
        <Outlet />
      </Sidebar>
  );
}


export async function action({ request, params }) {
  const formData = await request.formData();

  let intent = formData.get("intent");

  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  const method = request.method;
  let data;
  let url;

  if (intent === "addWebsite") {
    const feedUrl = formData.get("url");
    const name = formData.get("name");
    const feedId = formData.get("feedId");

    data = {
      url: feedUrl,
      name,
      feedId,
    };

    url = "http://localhost:3030/feed";
  }

  if (intent === "switchAutomatic") {
    const automatic = formData.get("automatic");
    const id = formData.get("id");

    data = {
      automatic,
      id,
    };

    url = "http://localhost:3030/feed";
  }

  if (intent === "publishTweet") {
    const content = formData.get("content");

    data = {
      content,
    };

    url = "http://127.0.0.1:3030/twitter/tweet";
  }

  if (intent === "deleteTwitter") {
    url = "http://localhost:3030/user/deleteTwitter";
  }

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(data != null && { body: JSON.stringify(data) }),
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}


export default DashboardPage;
