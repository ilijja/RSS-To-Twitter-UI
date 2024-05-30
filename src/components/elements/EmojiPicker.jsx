import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserProgressContext from "@/store/UserProgresContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const EmojiPicker = () => {

    const {pickerState, hidePicker, selectEmoji} = useContext(UserProgressContext)
    

    return <>
    <Transition.Root show={pickerState} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={hidePicker}>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="translate-x-[105%]">
                <div>
                  <div onClick={() => hidePicker} className="absolute right-4 top-4 cursor-pointer">
                    <XMarkIcon className="w-4 h-4 text-zinc-50" />
                  </div>
                  <div className="text-center">
                  <Picker data={data} onEmojiSelect={(emoji) => selectEmoji(emoji)} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
}

export default EmojiPicker;