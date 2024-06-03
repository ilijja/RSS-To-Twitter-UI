import { Globe } from "lucide-react";
import { Button } from "../ui/button";

const DashedContainer = (props) => {
  return (
    <>
      <div className="flex h-[450px] w-full shrink-0 items-center justify-center rounded-md border-zinc-700 border border-dashed">
        <div className="flex flex-col justify-center items-center w-fit h-42">
          <Globe size={32} className="text-zinc-500" />
          <h3 className="mt-4 text-lg font-semibold text-zinc-50">
            No feeds added
          </h3>
          <p className="mb-4 mt-2 text-sm text-zinc-400">
            You have not added any website. Add one below.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={props.handleAddWebsite}
          >
            Add website
          </Button>
        </div>
      </div>
    </>
  );
};

export default DashedContainer;
