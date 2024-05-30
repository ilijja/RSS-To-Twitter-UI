import { redirect } from "react-router-dom";
import { getAuthToken } from "@/util/auth";

export async function action({ request, params }) {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  let url;

  const method = request.method;

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "DELETE") {
    const id = params.id;
    if (!id) {
      return null;
    }
    url = `http://localhost:3030/feed/${id}`;
  }

  if (method === "POST") {
    const formData = await request.formData();

    const id = formData.get("id");

    const data = {
      id,
    };

    options.body = JSON.stringify(data);
    url = `http://localhost:3030/blog`;
  }

  const response = await fetch(url, options);

  const result = await response.json();

  return redirect("/home");
}
