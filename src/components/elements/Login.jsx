import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-orange-100">
        <div className=" basis-1/2 bg-zinc-900 border border-zinc-800 border-1" ></div>
        <div className="flex flex-col justify-center items-center basis-1/2 bg-zinc-950 border-y border-r border-zinc-800 border-1 ">
            <LoginForm/>
        </div>
      </div>
    </>
  );
};

export default Login;
