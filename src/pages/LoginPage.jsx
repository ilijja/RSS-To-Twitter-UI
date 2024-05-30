import { redirect } from "react-router-dom";
import Login from "@/components/elements/Login";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export async function action({ request, params }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const method = "POST"

  const data = {
    email: email,
    password: password,
  };

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("http://localhost:3030/auth/login", options);

  const result = await response.json()

  const token = result.token
  localStorage.setItem('token', token)

  return redirect('/home');
}

export default LoginPage;
