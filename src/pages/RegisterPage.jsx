import Register from "@/components/elements/Register";
import { useToast } from "@/components/ui/use-toast";
import { getAuthToken } from "@/util/auth";
import { useEffect } from "react";
import { redirect, useActionData } from "react-router-dom";

const RegisterPage = () => {
  const actionData = useActionData();
  const {toast} = useToast();

  useEffect(() => {
    if (actionData) {
      toast({
        title: actionData.title,
        description: actionData.msg,
      });
    }
  }, [actionData]);

  return (
    <>
      <Register />
    </>
  );
};

export async function loader() {
  const token = getAuthToken();

  if (token) {
    return redirect("/home");
  }

  return null;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const data = {
    name,
    email,
    password,
  };

  const url = "http://localhost:3030/auth/signup";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);

  const result = await response.status;

  if (response.status == 200) {
    return redirect("/login");
  }

  return { title: "Error", msg: "Error while creating account, user with this email alredy exists" };
}

export default RegisterPage;
