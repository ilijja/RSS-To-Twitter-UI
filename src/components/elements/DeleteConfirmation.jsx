import { useContext } from "react";
import { Form } from "react-router-dom";
import UserProgressContext from "@/store/UserProgresContext";

const DeleteConfirmation = ({ feed }) => {
  const { setHideModal } = useContext(UserProgressContext);

  return (
    <>
      <>
        <Form method="delete" action={`blogs/${feed._id}`}>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-left font-semibold text-zinc-50">
              Are you sure?
            </h2>
            <p className="text-left text-sm text-zinc-400">
              This action cannot be undone. This will permanently delete your
              feed and remove your blogs from our servers.
            </p>
            <div className="inline-flex justify-end w-full">
              <div className="inline-flex  gap-2 justify-between w-fit">
                <button
                  type="button"
                  onClick={setHideModal}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-zinc-950 hover:bg-accent text-zinc-50 h-10 px-4 py-2 mt-2 sm:mt-0 hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center text-zinc-950 gap-x-1.5 rounded-md  bg-zinc-50 px-3 py-1.5 text-sm font-medium hover:bg-zinc-200"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </Form>
      </>
    </>
  );
};

export default DeleteConfirmation;
