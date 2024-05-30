import { useContext, useState } from "react";
import { Form, useParams, useSubmit } from "react-router-dom";

const AddWebsiteModal = () => {
  const submit = useSubmit();

  return (
    <>
      <Form method="post" action="/home">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-zinc-50 font-semibold text-lg tracking-tight">
                Your website RSS
              </h3>
            </div>
            <div className="flex justify-start">
              <p className="text-zinc-400 text-sm">
                Copy and paste the website RSS URL to import.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="text"
                className="flex flex-start block text-sm font-medium leading-6 text-zinc-50"
              >
                Website RSS
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="w-full rounded-md h-9 px-3 py-2 bg-transparent text-white placeholder:text-gray-400 ring-1 ring-zinc-800 focus-visible:outline-none disabled:cursor-not-allowed  :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active"
                placeholder="www.example.com/feed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="text"
                className="flex flex-start block text-sm font-medium leading-6 text-zinc-50"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md h-9 px-3 py-2 bg-transparent text-white placeholder:text-gray-400 ring-1 ring-zinc-800 focus-visible:outline-none disabled:cursor-not-allowed  :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active"
                placeholder="Website 1"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <button
              type="submit"
              name="intent" value="addWebsite"
              // onClick={importWebsiteHandler}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-50 text-zinc-950 shadow hover:bg-zinc-50/90 h-9 px-4 py-2"
            >
              Import
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddWebsiteModal;
