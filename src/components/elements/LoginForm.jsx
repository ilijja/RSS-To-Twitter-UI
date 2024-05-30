import { FaXTwitter } from "react-icons/fa6";
import { Form } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center p-8 w-full h-fit sm: w-[350px]">
        <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
          <h2 className="text-zinc-50 text-2xl font-semibold">
            Login to your account
          </h2>
          <p className="text-sm text-zinc-400">
            Enter your email and password to log in
          </p>
          <Form className="w-full" method="post">
            <div className="flex flex-col w-full gap-2 mt-5">
              <label
                htmlFor="email"
                className="flex flex-start block text-sm font-medium leading-6 text-zinc-50"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                // value={url}
                // onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-md h-9 px-3 py-2 bg-transparent text-white placeholder:text-gray-400 ring-1 ring-zinc-900 focus-visible:outline-none disabled:cursor-not-allowed  :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active"
                placeholder="name@example.com"
              />
              <label
                htmlFor="password"
                className="flex flex-start block text-sm font-medium leading-6 text-zinc-50"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // value={url}
                // onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-md h-9 px-3 py-2 bg-transparent text-white placeholder:text-gray-400 ring-1 ring-zinc-900 focus-visible:outline-none disabled:cursor-not-allowed  :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-50 text-zinc-950 shadow hover:bg-zinc-50/90 h-9 px-4 py-2"
              >
                Sign In with Email
              </button>
            </div>
          </Form>

          <div className="relative mt-3 w-full">
            <div className="absolute mt-[7px] flex items-center w-full">
              <span className="w-full border-t border-zinc-900"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-950 px-2 text-zinc-400">
                Or continue with
              </span>
            </div>
          </div>

          <button className="mt-3 mb-3 inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border border-zinc-900 bg-zinc-950 shadow-sm hover:bg-zinc-900 text-zinc-50 h-9 px-4 py-2">
            <FaXTwitter className="text-zinc-50" />
          </button>

          <p className="px-8 text-center text-sm text-zinc-400">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
