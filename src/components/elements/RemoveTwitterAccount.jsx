import { useContext } from "react";
import { Form, useNavigation } from "react-router-dom";
import UserProgressContext from "@/store/UserProgresContext";
import { getAuthToken } from "@/util/auth";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const RemoveTwitterAccount = () => {
  const { setHideModal } = useContext(UserProgressContext);
  const { toast } = useToast();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  if (navigation.state === "loading") {
    setHideModal();
  }

  return (
    <>
      <Form method="delete">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg text-left font-semibold text-zinc-50">
            Are you sure?
          </h2>
          <p className="text-left text-sm text-zinc-400">
            This will permanently disconnect your X account from our servers.
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
              <Button
                name="intent"
                value="deleteTwitter"
                type="submit"
                variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Continue
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default RemoveTwitterAccount;
