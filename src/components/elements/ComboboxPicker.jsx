import { Fragment, useContext, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import UserProgressContext from "@/store/UserProgresContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import DeleteConfirmation from "./DeleteConfirmation";
import { Trash } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ComboboxPicker() {
  const { feeds, setActiveFeed, activeFeed, setShowModal } = useContext(UserProgressContext);

  useEffect(() => {
    if (feeds.length > 0) {
      if (!activeFeed) {
        setActiveFeed(feeds[0]);
      } else {
        const updatedFeed = feeds.find((feed) => feed._id === activeFeed._id);
        if (updatedFeed) {
          setActiveFeed(updatedFeed);
        } else {
          setActiveFeed(feeds[0]);
        }
      }
    } else {
      setActiveFeed(null);
    }
  }, [feeds, activeFeed]);

  const deleteFeed = (feed) => {
    setShowModal(<DeleteConfirmation feed={feed}/>)
  };

  return (
    <Listbox value={activeFeed} onChange={setActiveFeed}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium leading-6 text-zinc-50">Assigned to</Listbox.Label> */}
          <div className="relative w-64">
            <Listbox.Button className="relative w-full cursor-pointer py-2 rounded-md bg-zinc-950  font-semibold text-center text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-800 focus:outline-none focus:ring-1 sm:text-sm sm:leading-6">
              <span className="block truncate">
                {activeFeed ? activeFeed.name || "Fetching" : "Fetching"}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 px-1 max-h-28 w-full overflow-auto rounded-md bg-zinc-950 py-1 text-base shadow-lg ring-1 ring-zinc-700 focus:outline-none sm:text-sm">
                {feeds.map((feed) => (
                  <Listbox.Option
                    key={feed._id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-zinc-800 text-zinc-50" : "text-zinc-50",
                        "relative cursor-pointer select-none py-[8px] pl-3 pr-9 rounded"
                      )
                    }
                    value={feed}
                  >
                    {({ activeFeed, active }) => (
                      <>
                        <span
                          className={classNames(
                            activeFeed ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {feed.name}
                        </span>

                        {active ? (
                          <span
                            onClick={() => deleteFeed(feed)}
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-50"
                            )}
                          >
                            <Trash  className="h-4 w-4"/>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
